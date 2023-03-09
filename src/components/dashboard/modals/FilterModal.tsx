const FilterModal = (): JSX.Element => {
  return (
    <>
      <input type="checkbox" id="filter-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box space-y-3">
          <div className="flex flex-row items-center justify-between">
            <h3 className="text-2xl font-bold">Filter</h3>
            <label htmlFor="filter-modal" className="btn-sm btn-circle btn ">
              ✕
            </label>
          </div>
          <p>Fill out the form below to filter the table.</p>
          {/*  */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Transaction Status</span>
            </label>
            <select className="select-bordered select">
              <option disabled selected>
                Status
              </option>
              <option>Succesful</option>
              <option>Pending Transaction</option>
              <option>Failed to complete transaction</option>
            </select>
          </div>
          {/*  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Transaction Response</span>
            </label>
            <label className="input-group">
              <select className="select w-fit bg-primary text-sm text-white">
                <option disabled selected>
                  Condition
                </option>
                <option>Contains</option>
                <option>Equals to</option>
              </select>
              <input
                type="text"
                placeholder="info@site.com"
                className="input-bordered input w-full"
              />
            </label>
          </div>
          {/*  */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Select Category</span>
            </label>
            <select className="select-bordered select">
              <option disabled selected>
                Category
              </option>
              <option>Agent Banking</option>
              <option>Bills Payment</option>
              <option>E-Load</option>
            </select>
          </div>
          {/*  */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Start Date</span>
            </label>

            <input className="input-bordered input" type="date" />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">End Date</span>
            </label>

            <input className="input-bordered input" type="date" />
          </div>

          <div className="flex flex-row items-stretch justify-between space-x-5 pt-7">
            <button className="btn flex-[2] border-none bg-slate-500 text-white">
              CLEAR
            </button>
            <button className="btn-primary btn flex-[8] shadow-sm">
              FILTER
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterModal;
