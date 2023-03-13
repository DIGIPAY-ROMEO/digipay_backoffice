import { useRouter } from "next/router";

const CreateModal = (): JSX.Element => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <input type="checkbox" id="create-data-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box min-h-[90vh] min-w-[40vw]">
          <div className="flex flex-row items-start justify-start">
            <div>
              <p className="text-slate-400">Create new</p>
              <h3 className="text-2xl font-bold">Admin User</h3>
            </div>
            <div className="ml-auto flex flex-row items-center justify-start space-x-5">
              <label role="button" htmlFor="create-data-modal">
                ✕
              </label>
            </div>
          </div>
          <div className="flex flex-col items-stretch justify-start">
            <p className="py-3 ">
              Fill out the form below and submit to create.
            </p>
          </div>
          <div className="flex flex-col items-stretch justify-start space-y-5">
            <div className="form-control">
              <label htmlFor="email" className="pl-2 text-sm text-slate-500">
                Email
              </label>

              <input
                id="email"
                className="input w-full border-slate-300"
                type="email"
                placeholder="test@email.com"
              />
            </div>
            <div className="form-control">
              <label htmlFor="role" className="pl-2 text-sm text-slate-500">
                Role
              </label>
              <select className="select-bordered select w-full" id="role">
                <option disabled selected>
                  Select Role...
                </option>
                <option>Super Admin</option>
                <option>Sales</option>
                <option>ANM</option>
              </select>
            </div>
            <div className="form-control">
              <label htmlFor="name" className="pl-2 text-sm text-slate-500">
                Name
              </label>

              <input
                id="name"
                className="input w-full border-slate-300"
                placeholder="Your full name here..."
                type="text"
              />
            </div>
            <div className="form-control">
              <label htmlFor="password" className="pl-2 text-sm text-slate-500">
                Password
              </label>

              <input
                id="email"
                className="input w-full border-slate-300"
                type="password"
              />
            </div>
            <div className="form-control">
              <label
                htmlFor="confirm_password"
                className="pl-2 text-sm text-slate-500"
              >
                Confirm Password
              </label>

              <input
                id="confirm_password"
                className="input w-full border-slate-300"
                type="password"
              />
            </div>
            <div className="flex flex-row items-stretch justify-end space-x-5">
              <label
                className="btn border-none bg-slate-400 text-white"
                htmlFor="create-data-modal"
              >
                CANCEL
              </label>
              <button className="btn btn-primary">SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateModal;
