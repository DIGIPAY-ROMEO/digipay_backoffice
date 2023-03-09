import { FaSearch } from "react-icons/fa";

const SearchModal = (): JSX.Element => {
  return (
    <>
      <input type="checkbox" id="search-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="flex flex-row items-center justify-between">
            <h3 className="text-2xl font-bold">Search</h3>
            <label htmlFor="search-modal" className="btn-sm btn-circle btn ">
              ✕
            </label>
          </div>
          <p className="py-4">{`Please type the data you want to search below:`}</p>
          <div className="input-group">
            <input
              className="input w-full bg-slate-200"
              placeholder="Type here..."
            />
            <label
              htmlFor="search-modal"
              role="button"
              className="btn-square btn"
            >
              <FaSearch color="white" />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchModal;
