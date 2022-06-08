import React from "react";

import CharactersList from "./components/characters-list/CharactersList";
import { ApiProvider } from "./contexts/ApiContext";
import { SearchProvider } from "./contexts/SearchContext";
import SearchBar from "./components/search-bar/SearchBar";

import "./App.css";

function App() {
	return (
		<ApiProvider>
			<SearchProvider>
				<div className='app'>
					<SearchBar />
					<CharactersList />
				</div>
			</SearchProvider>
		</ApiProvider>
	);
}

export default App;
