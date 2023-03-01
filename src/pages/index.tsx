import { type NextPage } from "next";
import Head from "next/head";
import { SignInForm } from "~/components/sign_in";

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Digipay PH | Back Office</title>
        <meta name="description" content="Digipay PH | Back Office" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-base-100 text-slate-800">
        <div className="mb-5 flex w-[80vw] flex-col items-center justify-center sm:w-[20vw]">
          <h1 className="text-md f text-3xl font-extrabold sm:text-3xl">
            BACK OFFICE
          </h1>
          <p className="text-lg">Super Admin Login</p>
        </div>
        <div className="flex w-[80vw] flex-col items-stretch sm:w-[20vw]">
          <SignInForm />
        </div>
      </main>
    </>
  );
};

export default Home;
