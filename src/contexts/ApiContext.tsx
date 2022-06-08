import React, { ReactNode, useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

import { CharacterInterface } from "../components/character-card/CharacterCard";
import { apiUrl } from "../helpers/variables";

export const ApiContext = React.createContext<ContextType>(
	null as any,
);

type ContextType = {
	data: CharacterInterface[];
	isLoadingApi: boolean;
	apiError: boolean;
};

interface DataItemInterface extends CharacterInterface {}

type Props = { children: ReactNode };

export const ApiProvider: React.FunctionComponent<Props> = ({
	children,
}) => {
	const [isLoadingApi, setIsLoadingApi] = useState(true);
	const [data, setData] = useState<CharacterInterface[]>([]);
	const [apiError, setApiError] = useState(false);

	useEffect(() => {
		axios
			.get(apiUrl)
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
			.catch((err) => {
				setApiError(true);
			})
			.finally(() => setIsLoadingApi(false));
	}, []);

	return (
		<ApiContext.Provider
			value={{
				data,
				isLoadingApi,
				apiError,
			}}>
			{children}
		</ApiContext.Provider>
	);
};
