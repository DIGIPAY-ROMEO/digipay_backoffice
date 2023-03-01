import { MdAdminPanelSettings, MdArrowRight } from "react-icons/md";

const SideBar = (): JSX.Element => (
  <div className="hidden w-[40vh] flex-col justify-between bg-white p-5 lg:flex">
    <div className="flex flex-col items-stretch justify-center">
      <h1 className="text-2xl font-bold text-primary">BACK OFFICE</h1>
      <p className="text-slate-400">DigiPay</p>
    </div>

    <div className="flex flex-col items-stretch justify-start">
      Nav Bar Buttons
    </div>

    <div className="dropdown-end dropdown dropdown-right" role="button">
      <div tabIndex={0} className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-start space-x-3">
          <MdAdminPanelSettings size={50} />
          <div className="flex flex-col items-start">
            <b>Juan Dela Cruz</b>
            <small className="text-slate-500">Super Admin</small>
          </div>
        </div>
        <MdArrowRight size={50} />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu rounded-box w-52 bg-white p-2 shadow"
      >
        <li>
          <a>Profile</a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <li>
          <a>Sign Out</a>
        </li>
      </ul>
    </div>
  </div>
);

export default SideBar;
