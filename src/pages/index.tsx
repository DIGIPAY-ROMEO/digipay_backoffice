import { type NextPage } from "next";
import Head from "next/head";
import { SignInForm } from "~/components/sign_in";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-base-100 text-slate-800">
        <div className="flex flex-col mb-5 justify-center items-center">
          <h1 className="text-md font-bold text-3xl sm:text-3xl">BACKOFFICE</h1>
          <p className="text-lg">Super Admin Login</p>
        </div>
        <div className="flex flex-col items-stretch w-[80vw] sm:w-[20vw]">
          <SignInForm/>
        </div>
      </main>
    </>
  );
};

export default Home;
