import Note from './Note';
import AddNote from './AddNote';

const NoteList = ({
	notes,
	handleAddNote}) => {
	return (

		<div className='notes-list'>
			{notes.map((note) => (
				<Note
					id={note.id}
					text={note.text}
				/>
			))}
		</div>
	);
};

export default NoteList;