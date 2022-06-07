import React, { useContext, useEffect, useState } from "react";
import { isEmpty } from "lodash-es";

import { AppContext } from "../../contexts/AppContext";
import CharacterCard, {
	CharacterInterface,
} from "../character-card/CharacterCard";
import Loader from "../loader/Loader";
import { filterByKeyword, sort } from "../../helpers";

import "./CharactersList.css";

type Props = {};

const CharactersList: React.FunctionComponent<Props> = () => {
	const { keyword, data, sortMethod } = useContext(AppContext);
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
			{isEmpty(data) ? (
				<Loader />
			) : (
				characters.map((character) => (
					<CharacterCard key={character.char_id} {...character} />
				))
			)}
		</ul>
	);
};

export default CharactersList;
