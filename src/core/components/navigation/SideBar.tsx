import Link from "next/link";
import Router from "next/router";
import { type ChangeEventHandler, useState } from "react";
import { MdAdminPanelSettings, MdArrowRight } from "react-icons/md";
import NAV_ROUTES from "~/core/constants/data/navRoutes";

const SideBar = (): JSX.Element => {
  const [searchedNav, setSearchNav] = useState<string>("");
  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setSearchNav(e.currentTarget.value);

  return (
    <div className="hidden max-h-[100vh] w-[17vw] flex-col justify-between bg-white p-5 lg:flex">
      <div
        className="flex flex-col items-stretch justify-center"
        role={"button"}
        onClick={() => void Router.push("/admin/dashboard")}
      >
        <h1 className="text-2xl font-bold text-primary">BACK OFFICE</h1>
        <p className="text-slate-400">DigiPay</p>
      </div>

      <input
        type="text"
        className="input my-5 bg-slate-200 transition-all ease-in-out focus:shadow-md focus:outline-none active:outline-none"
        placeholder="Search..."
        value={searchedNav}
        onChange={handleOnChange}
      />

      <div className="flex flex-1 flex-col items-stretch justify-start overflow-scroll pl-3 ">
        {NAV_ROUTES.filter((route) =>
          route.name.toLowerCase().includes(searchedNav.toLowerCase())
        ).map((nav) => {
          return (
            <div
              key={nav.name}
              role={"button"}
              onClick={() => {
                void Router.push(nav.href);
                setSearchNav("");
              }}
              className={`flex flex-row items-center justify-between rounded-lg p-3 hover:text-primary ${
                Router.asPath.includes(nav.href) ? "bg-slate-100" : ""
              }`}
            >
              <div className="flex flex-row items-center justify-start space-x-2">
                <p
                  className={
                    Router.asPath.includes(nav.href)
                      ? "font-bold text-primary"
                      : ""
                  }
                >
                  {nav.name}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="dropdown-right dropdown dropdown-end pt-2" role="button">
        <div
          tabIndex={0}
          className="flex flex-row items-center justify-between"
        >
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
            <Link href="/">Profile</Link>
          </li>
          <li>
            <Link href="/">Settings</Link>
          </li>
          <li>
            <Link href="/">Sign Out</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
