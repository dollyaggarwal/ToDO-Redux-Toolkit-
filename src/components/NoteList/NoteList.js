import "./NoteList.css";
import { useDispatch, useSelector } from "react-redux";
// import { deleteNote } from "../../redux/actions/noteActions";
import { noteActions } from "../../redux/reducers/noteReducer";
import { noteSelector } from "../../redux/reducers/noteReducer";

function NoteList() {
    const notes= useSelector(noteSelector);
    const dispatch = useDispatch();
  return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li key={index}>
            <p>{note.createdOn}</p>
            <p className="note-content">{note.text}</p>
            <button className="btn btn-danger"
             onClick={()=> dispatch(noteActions.delete(index))}>Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
