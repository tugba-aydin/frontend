import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NoteList from './components/NoteList';
import Search from './components/Search';
import AddNote from './components/AddNote';
const App = (  ) => {
	const [notes, handleAddNote] = useState([
	]);

	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			handleAddNote(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (text) => {
		const newNote = {
			id: nanoid(),
			text: text
				};
		const newNotes = [...notes, newNote];
		handleAddNote(newNotes);
		
	};
	return (
			<div className='container'>
				<Search handleSearchNote={setSearchText} />
				<AddNote handleAddNote={handleAddNote} />
				<NoteList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
				/>
			</div>
	);
};

export default App;