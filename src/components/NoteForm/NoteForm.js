import { useState } from "react";
import "./NoteForm.css";
import { useDispatch, useSelector } from "react-redux";
// import { addNote } from "../../redux/actions/noteActions";
import { noteActions } from "../../redux/reducers/noteReducer";
import { notificationSelector, resetNotification } from "../../redux/reducers/notificationReducer";


function NoteForm() {
  const [NoteText, setNoteText] = useState("");
  const dispatch = useDispatch();
  const message = useSelector(notificationSelector);

  if(message){
    setTimeout(() => {
      dispatch(resetNotification());
    }, 3000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //onCreateNote(NoteText);
    dispatch(noteActions.add(NoteText));
    setNoteText("");
  };

  return (
    <div className="container">
        {
      message &&  
      <div className="alert alert-success" role="alert">
          {message}
     </div>
     }
    <form onSubmit={handleSubmit}>
      <textarea
        type="text"
        className="form-control mb-3"
        value={NoteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <button className="btn btn-success float-end" type="submit">Create Note</button>
    </form>
    </div>
  );
}

export default NoteForm;
