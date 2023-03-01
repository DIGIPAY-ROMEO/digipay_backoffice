import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdSpaceDashboard, MdArrowRight } from "react-icons/md";
import SideBar from "~/core/components/navigation/SideBar";
import NAV_ROUTES from "~/core/constants/data/navRoutes";

const PageViewAction: NextPage = (): JSX.Element => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Digipay PH | Back Office</title>
        <meta name="description" content="Digipay PH | Back Office" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {router.isReady && (
        <main className="flex min-h-screen flex-row items-stretch justify-start bg-base-100 text-slate-800">
          <SideBar />
          <div className="flex h-[15vh] w-full flex-row items-center justify-between px-9">
            <div className="flex flex-row items-center space-x-5">
              <MdSpaceDashboard size={85} className="hidden lg:flex" />
              <div className="flex flex-col items-stretch justify-center">
                <h1 className="text-4xl font-bold uppercase text-slate-800">
                  {router.asPath.split("/")[2]?.split("_").join(" ")}
                </h1>
                <div className="breadcrumbs text-sm text-slate-400">
                  <ul>
                    <li>
                      <Link href={"/admin/dashboard"} className="capitalize">
                        {router.asPath.split("/")[1]?.split("_").join(" ")}
                      </Link>
                    </li>
                    <li>
                      <Link href={router.asPath} className="capitalize">
                        {router.asPath.split("/")[2]?.split("_").join(" ")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {NAV_ROUTES.filter(
                (route) => router.asPath === route.href && route.hasChildRoute
              ).map((route) => (
                <div
                  key={route.id}
                  role={"button"}
                  className="dropdown dropdown-right dropdown-hover "
                >
                  <MdArrowRight tabIndex={0} size={60} />
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu rounded-box w-52 bg-white p-2 shadow"
                  >
                    {route.childRoutes?.map((childRoute) => (
                      <li key={childRoute.href}>
                        <Link href={childRoute.href}>{childRoute.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default PageViewAction;
