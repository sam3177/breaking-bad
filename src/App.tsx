import React from "react";

import "./App.css";

import CharactersList from "./components/characters-list/CharactersList";
import { Provider } from "./contexts/AppContext";
import SearchBar from "./components/search-bar/SearchBar";

function App() {
	return (
		<Provider>
			<div className='App'>
				<SearchBar />
				<CharactersList />
			</div>
		</Provider>
	);
}

export default App;
