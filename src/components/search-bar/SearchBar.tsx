import React, { useContext } from "react";
import { styled, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { AppContext, sortOptions } from "../../contexts/AppContext";

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

const SearchBar: React.FunctionComponent<Props> = () => {
	const { search, sortMethod, onChangeSortMethod } =
		useContext(AppContext);

	return (
		<div className='mt-5 p-3'>
			<div className='input-wrapper'>
				<SearchIcon className='search-icon' />
				<CustomTextField
        autoFocus
					className='ms-3 input'
					label='TextField'
					variant='outlined'
					size='small'
					InputLabelProps={{ shrink: true }}
					onChange={search}
				/>
			</div>
			<CustomTextField
				className='ms-3 input'
				id='outlined-select-currency-native'
				select
				label='Native select'
				InputLabelProps={{ shrink: true }}
				defaultValue={sortMethod}
				size='small'
				onChange={onChangeSortMethod}
				SelectProps={{
					native: true,
				}}>
				{sortOptions.map(({ label, value }) => (
					<option key={value} value={value}>
						{label}
					</option>
				))}
			</CustomTextField>
		</div>
	);
};

export default SearchBar;
