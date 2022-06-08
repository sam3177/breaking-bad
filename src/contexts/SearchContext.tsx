import React, { ReactNode, useState } from "react";
import { debounce } from "lodash-es";

import { SortOptionsEnum } from "../enums";

export const SearchContext = React.createContext<ContextType>(
	null as any,
);

type ContextType = {
	keyword: string;
	search: (e: any) => void;
	sortMethod: SortOptionsEnum;
	onChangeSortMethod: (e: any) => void;
};

type Props = { children: ReactNode };

export const SearchProvider: React.FunctionComponent<Props> = ({
	children,
}) => {
	const [keyword, setKeyword] = useState("");
	const [sortMethod, setSortMethod] = useState(
		SortOptionsEnum.CHARACTER_ASCENDING,
	);

	const search = debounce((e: any) => {
		setKeyword(e.target.value);
	}, 700);

	const onChangeSortMethod = debounce((e: any) => {
		setSortMethod(e.target.value);
	}, 400);

	return (
		<SearchContext.Provider
			value={{
				keyword,
				search,
				sortMethod,
				onChangeSortMethod,
			}}>
			{children}
		</SearchContext.Provider>
	);
};
