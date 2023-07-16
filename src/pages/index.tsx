import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import Head from "next/head";
import { api } from "~/utils/api";

export default function Home() {
  const { data } = api.posts.getAll.useQuery();
  const { isSignedIn } = useUser();
  console.log(data);
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#f8e962] to-[#2e2e2e]">
        <div className="layout">
          <h1 className="text-2xl text-white">My t3-stack playground app</h1>
          <div className="text-xl text-white">
            {!isSignedIn && <SignInButton />}
            {isSignedIn && <SignOutButton />}
          </div>
          <div className="text-white">
            {data?.map((post) => (
              <div key={post.id}>{post.content}</div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
