import { SortOptionsEnum } from "../enums";

export const apiUrl = "https://breakingbadapi.com/api/characters";
export const errorImgUrl =
	"https://webartdevelopers.com/blog/wp-content/uploads/2018/09/HTML-Error-Page.png";

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
