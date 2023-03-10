import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdSpaceDashboard, MdArrowRight } from "react-icons/md";
import { GenericTable } from "~/core/components/CRUD/read";
import SideBar from "~/core/components/navigation/SideBar";
import NAV_ROUTES from "~/core/constants/data/navRoutes";

const PageView: NextPage = (): JSX.Element => {
  const router = useRouter();

  const DashboardHeader = (): JSX.Element => (
    <div className="flex w-full flex-row items-center justify-between px-9 pt-10">
      <div className="flex flex-row items-center space-x-5">
        <div className="flex flex-col items-stretch justify-center">
          <h1 className="text-4xl font-bold uppercase text-slate-800">
            {router.asPath.split("/")[2]?.split("_").join(" ")?.split("?")[0]}
          </h1>
          <div className="breadcrumbs text-sm text-slate-400">
            <ul>
              <li>
                <Link href={router.asPath} className="capitalize">
                  {router.asPath.split("/")[1]?.split("_").join(" ")}
                </Link>
              </li>
              <li>
                <Link href={router.asPath} className="capitalize">
                  {
                    router.asPath
                      .split("/")[2]
                      ?.split("_")
                      .join(" ")
                      ?.split("?")[0]
                  }
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {NAV_ROUTES.filter(
          (route) => router.asPath.includes(route.href) && route.hasChildRoute
        ).map((route) => (
          <div
            key={route.id}
            role={"button"}
            className="dropdown-hover dropdown-right dropdown "
          >
            <MdArrowRight tabIndex={0} size={60} />
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box w-52 bg-white p-2 shadow"
            >
              {route.childRoutes?.map((childRoute) => (
                <li key={childRoute.href}>
                  <Link className="text-sm" href={childRoute.href}>
                    {childRoute.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Digipay PH | Back Office</title>
        <meta name="description" content="Digipay PH | Back Office" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {router.isReady && (
        <main className="flex max-h-screen flex-row items-stretch justify-start overflow-scroll bg-base-100 text-slate-800">
          <SideBar />
          <div className="flex  w-full max-w-full flex-col items-stretch justify-start">
            <DashboardHeader />
            {!router.asPath.includes("dashboard") && <GenericTable />}
          </div>
        </main>
      )}
    </>
  );
};

export default PageView;
