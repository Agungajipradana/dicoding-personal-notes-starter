import React from "react";
import ActiveNote from "./ActiveNote";
import Archive from "./Archive";
import PropTypes from "prop-types";

function BodySection({ onDelete, onActive, onArchive, activeDatas, archiveDatas }) {
  return (
    <React.Fragment>
      <section className="">
        <div className="bg-gray-800 border-t-2 text-white w-full px-5 sm:px-24 py-10 md:py-20">
          <h2 className="text-2xl font-bold mb-8">Catatan Aktif</h2>
          {activeDatas.length !== 0 ? <ActiveNote onDelete={onDelete} notes={activeDatas} onActive={onActive} /> : <p className="text-gray-500">Tidak ada catatan</p>}
        </div>
      </section>
      <section className="">
        <div className="bg-gray-800 border-t-2 text-white px-5 sm:px-24 py-10 md:py-20">
          <h2 className="text-2xl font-bold mb-8">Arsip</h2>
          {archiveDatas.length !== 0 ? <Archive onDelete={onDelete} notes={archiveDatas} onArchive={onArchive} /> : <p className="text-gray-500">Tidak ada catatan</p>}
        </div>
      </section>
    </React.Fragment>
  );
}

BodySection.propTypes = {
  onDelete: PropTypes.func,
  onActive: PropTypes.func,
  onArchive: PropTypes.func,
  activeDatas: PropTypes.array,
  archiveDatas: PropTypes.array,
};

export default BodySection;
