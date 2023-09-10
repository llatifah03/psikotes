"use client";
import { useSession, signIn, signOut } from "next-auth/react";
export default function Component() {
  const { data: session } = useSession();
  console.log("session", session);

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <button
        onClick={
          () => signIn()
          // signIn("credentials", {
          //   email: "sukma@klob.id",
          //   password: "qwerty123",
          //   // The page where you want to redirect to after a
          //   // successful login
          //   redirect: true,
          //   callbackUrl: "/",
          // })
        }
      >
        Sign in
      </button>
    </>
  );
}
