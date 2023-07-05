import DeleteForeverOutlined from '@mui/icons-material/DeleteForeverOutlined';
const Note = ({ note, deleteNote }) => (
  <div className='note'>
    <div className='note__body'>{note.text}</div>
    <div className='note__footer'>
      <DeleteForeverOutlined
        onClick={() => deleteNote(note._id)}
        className='note__delete'
        aria-hidden='true'
      ></DeleteForeverOutlined>
    </div>
  </div>
);
export default Note;
