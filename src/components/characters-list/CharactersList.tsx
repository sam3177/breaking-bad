import React, { useContext, useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { isEmpty } from "lodash-es";

import { ApiContext } from "../../contexts/ApiContext";
import { SearchContext } from "../../contexts/SearchContext";
import { filterByKeyword, sort } from "../../helpers";
import { errorImgUrl } from "../../helpers/variables";
import Loader from "../loader/Loader";
import CharacterCard, {
	CharacterInterface,
} from "../character-card/CharacterCard";

import "./CharactersList.css";

type Props = {};

const CharactersList: React.FunctionComponent<Props> = () => {
	const { data, isLoadingApi, apiError } = useContext(ApiContext);
	const { keyword, sortMethod } = useContext(SearchContext);

	const [characters, setCharacters] = useState<CharacterInterface[]>(
		[],
	);

	useEffect(() => {
		setCharacters(
			sort(filterByKeyword([...data], keyword), sortMethod),
		);
	}, [data, sortMethod, keyword]);

	return (
		<ul className='p-3 characters-list'>
			{isLoadingApi ? (
				<Loader />
			) : apiError ? (
				<img className='w-100' src={errorImgUrl} alt='error img' />
			) : isEmpty(characters) ? (
				<Typography variant='h5' className='px-3'>
					No matches for your search!
				</Typography>
			) : (
				characters.map((character) => (
					<CharacterCard key={character.char_id} {...character} />
				))
			)}
		</ul>
	);
};

export default CharactersList;
