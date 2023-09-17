import PropTypes from "prop-types";
import { showFormattedDate } from "../utils/data";

function NoteCard({ changeButton, id, title, body, createdAt, onDelete, buttonData }) {
  return (
    <div className="mx-auto p-6 w-full bg-white rounded-lg border border-gray-200 shadow-md">
      <div className="text-gray-400 pb-2">
        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <span className="text-sm">{showFormattedDate(createdAt)}</span>
      </div>
      <p className="mb-3 font-normal text-gray-700">{body}</p>
      <div className="flex gap-5">
        <button
          onClick={() => onDelete(id)}
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-gray-800 bg-slate-200 hover:bg-gray-900 hover:text-white rounded-lg  focus:ring-4 focus:outline-none focus:ring-red-300"
        >
          Delete
        </button>
        <button
          onClick={() => buttonData(id)}
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-slate-200 bg-gray-800 hover:bg-slate-200 hover:text-gray-800 rounded-lg focus:ring-4 focus:outline-none focus:ring-yellow-300"
        >
          {changeButton}
        </button>
      </div>
    </div>
  );
}

NoteCard.propTypes = {
  changeButton: PropTypes.string,
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  createdAt: PropTypes.string,
  onDelete: PropTypes.func,
  buttonData: PropTypes.func,
};

export default NoteCard;
