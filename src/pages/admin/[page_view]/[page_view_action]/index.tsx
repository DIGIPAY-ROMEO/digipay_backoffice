/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { MdArrowLeft } from "react-icons/md";
import { GenericTable } from "~/core/components/CRUD/read";
import SideBar from "~/core/components/navigation/SideBar";

const PageViewAction: NextPage = (): JSX.Element => {
  const router = useRouter();
  const DashboardHeader = (): JSX.Element => (
    <div className="flex w-full flex-row items-center justify-between px-9 pt-10">
      <div className="flex flex-row items-center space-x-5">
        <div className="flex flex-col items-stretch justify-center">
          <h1 className="text-4xl font-bold uppercase text-slate-800">
            {router.asPath.split("/")[2]?.split("_").join(" ")}
          </h1>
          <div className="breadcrumbs text-sm text-slate-400">
            <ul>
              {router.asPath.split("/").map((route: string, index: number) => {
                if (index === 0) {
                  return <></>;
                } else {
                  return (
                    <li key={route}>
                      <Link
                        href={
                          index === 2
                            ? `/admin/${router.asPath.split("/")[2]!}`
                            : router.asPath
                        }
                        className="capitalize"
                      >
                        {router.asPath.split("/")[index]?.split("_").join(" ")}
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
        <div
          role="button"
          onClick={() =>
            void Router.push(`/admin/${Router.asPath.split("/")[2]!}`)
          }
          className="flex flex-row items-center"
        >
          <MdArrowLeft tabIndex={0} size={30} />
          <p>Go Back</p>
        </div>
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

export default PageViewAction;
