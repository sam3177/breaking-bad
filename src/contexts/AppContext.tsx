import React, { ReactNode, useEffect, useState } from "react";
import { debounce } from "lodash-es";
import axios, { AxiosResponse } from "axios";

import { SortOptionsEnum } from "../enums";
import { CharacterInterface } from "../components/character-card/CharacterCard";

export const AppContext = React.createContext<ContextType>(
	null as any,
);

type ContextType = {
	keyword: string;
	search: (e: any) => void;
	sortMethod: SortOptionsEnum;
	onChangeSortMethod: (e: any) => void;
	data: CharacterInterface[];
};

interface DataItemInterface extends CharacterInterface {}

type Props = { children: ReactNode };

export const sortOptions = [
	{
		label: "Character name ascending",
		value: SortOptionsEnum.CHARACTER_ASCENDING,
	},
	{
		label: "Character name descending",
		value: SortOptionsEnum.CHARACTER_DESCENDING,
	},
	{
		label: "Character name ascending",
		value: SortOptionsEnum.ACTOR_ASCENDING,
	},
	{
		label: "Character name descending",
		value: SortOptionsEnum.ACTOR_DESCENDING,
	},
];

export const Provider: React.FunctionComponent<Props> = ({
	children,
}) => {
	const [keyword, setKeyword] = useState("");
	const [sortMethod, setSortMethod] = useState(
		SortOptionsEnum.CHARACTER_ASCENDING,
	);
	const [data, setData] = useState<CharacterInterface[]>([]);

	useEffect(() => {
		axios
			.get("https://breakingbadapi.com/api/characters")
			.then((response: AxiosResponse) => {
				const data: DataItemInterface[] = response.data;
				setData(
					data.map(({ name, portrayed, img, char_id }) => ({
						name,
						portrayed,
						img,
						char_id,
					})),
				);
			})
			.catch((err) => console.log(err));
	}, []);

	const search = debounce((e: any) => {
		setKeyword(e.target.value);
	}, 700);

	const onChangeSortMethod = debounce((e: any) => {
		setSortMethod(e.target.value);
	}, 400);

	return (
		<AppContext.Provider
			value={{
				keyword,
				search,
				sortMethod,
				onChangeSortMethod,
				data,
			}}>
			{children}
		</AppContext.Provider>
	);
};
