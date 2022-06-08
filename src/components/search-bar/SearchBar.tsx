import React, { useContext } from "react";
import { styled, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { SearchContext } from "../../contexts/SearchContext";
import { sortOptions } from "../../helpers/variables";

import "./SearchBar.css";

type Props = {};

const CustomTextField = styled(TextField)({
	"& label.Mui-focused": {
		color: "rgb(62, 81, 106)",
	},
	"& .MuiOutlinedInput-root": {
		"&:hover fieldset": {
			borderColor: "rgb(0, 40, 76)",
		},
		"&.Mui-focused fieldset": {
			borderColor: "rgb(0, 40, 76)",
		},
	},
});

const CustomSelect = styled(CustomTextField)({
	"& .MuiOutlinedInput-root.Mui-focused": {
    backgroundColor: "rgb(240,240,240)"
	},
});

const SearchBar: React.FunctionComponent<Props> = () => {

	const { search, sortMethod, onChangeSortMethod } =
		useContext(SearchContext);

	return (
		<div className='mt-5 mx-3 p-3 search-bar'>
			<div className='mr-3 input-wrapper'>
				<SearchIcon className='search-icon' />
				<CustomTextField
					autoFocus
					className='input w-100'
					label='TextField'
					variant='outlined'
					InputLabelProps={{ shrink: true }}
					onChange={search}
				/>
			</div>
			<CustomSelect
				className='ms-3 input'
				id='outlined-select-currency-native'
				select
				label='Native select'
				InputLabelProps={{ shrink: true }}
				defaultValue={sortMethod}
				onChange={onChangeSortMethod}
				SelectProps={{
					native: true,
				}}>
				{sortOptions.map(({ label, value }) => (
					<option key={value} value={value}>
						{label}
					</option>
				))}
			</CustomSelect>
		</div>
	);
};

export default SearchBar;
