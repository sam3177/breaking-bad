import { CharacterInterface } from "../components/character-card/CharacterCard";
import { SortOptionsEnum } from "../enums";

export const filterByKeyword = (
	characters: CharacterInterface[],
	keyword: string,
): CharacterInterface[] => {
	if (!keyword) return characters;
	const regex = new RegExp(keyword);
	return characters.filter(
		({ name, portrayed }) =>
			name.toLowerCase().match(regex) ||
			portrayed.toLowerCase().match(regex),
	);
};

export const sort = (
	characters: CharacterInterface[],
	sortOption: SortOptionsEnum,
): CharacterInterface[] => {
	const [key, order] = sortOption.split(" ");

	return characters.sort((a, b) => {
		const getValueAsString = (character: CharacterInterface) =>
			(
				character[key as keyof CharacterInterface] as string
			).toLowerCase();

		if (order === "+") {
			return getValueAsString(a) >= getValueAsString(b) ? 1 : -1;
		} else {
			return getValueAsString(a) >= getValueAsString(b) ? -1 : 1;
		}
	});
};
