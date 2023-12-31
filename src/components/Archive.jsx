import PropTypes from "prop-types";
import NoteCard from "./NoteCard";

function Archive({ onDelete, notes, onArchive }) {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10">
      {notes.map((note) => (
        <NoteCard changeButton="Pindah" key={note.id} onDelete={onDelete} buttonData={onArchive} {...note} />
      ))}
    </div>
  );
}

Archive.propTypes = {
  onDelete: PropTypes.func,
  notes: PropTypes.array,
  onArchive: PropTypes.func,
};

export default Archive;
