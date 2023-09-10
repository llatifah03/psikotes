"use client";
import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import getScrollAnimation from "@/utils/getScrollAnimation";
import ButtonPrimary from "@/components/Button/ButtonPrimary";
import Input from "@/components/Form/Input";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("masuk handleSubmit");

    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log("LoginPage response", response);
        if (response.status === 200) {
          localStorage.setItem("psikotes_token", response?.token);
          toast.success("Selamat datang! Anda berhasil masuk ke akun Anda.");
          // router.push("/");
        } else {
          toast.error(response?.message);
        }
      })
      .catch((err) => {
        console.log("LoginPage err", err);
        toast.error(err);
      })
      .finally(() => setLoading(false));

    // try {
    //   const response = await fetch(`/api/login`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email, password }),
    //   });
    //   console.log("LoginPage response", response);
    //   if (response.ok) {
    //     // router.push("/");
    //     toast.success("Selamat datang! Anda berhasil masuk ke akun Anda.");
    //     localStorage.setItem("psikotes_token", response.token);
    //     router.push("/dashboard");
    //   } else {
    //     toast.error(response?.statusText);
    //   }
    // } catch (error) {
    //   console.log("error", error);
    // }
  };

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div className="md:flex max-w-screen-xl mt-28 px-8 xl:px-16 mx-auto justify-center">
      <div className="relative overflow-hidden md:flex w-1/2  justify-around align-center items-center hidden">
        <motion.div
          className="flex mr-8 h-full w-full"
          variants={scrollAnimation}
        >
          <Image
            src="assets/Icon/psikotes.svg"
            alt="psikotes"
            quality={100}
            width={612}
            height={383}
          />
        </motion.div>
      </div>
      <div className="flex flex-col md:w-1/3 justify-center py-10 items-center ">
        <form onSubmit={handleSubmit} className="w-full items-center">
          <h1 className="text-gray-100 font-bold text-2xl mb-1">
            Selamat Datang kembali!
          </h1>
          <p className="text-sm font-normal text-gray-100 mb-7">
            Belum punya akun?{" "}
            <Link
              href="/register"
              className="capitalize tracking-wide text-orange-500 transition-all underline"
            >
              Daftar
            </Link>
          </p>

          <Input
            label={"E-mail"}
            type="email"
            value={email}
            setValue={setEmail}
          />
          <Input
            label={"Kata Sandi"}
            type="password"
            value={password}
            setValue={setPassword}
          />
          <div className="mt-4">
            <ButtonPrimary type="submit">
              {isLoading ? "isLoading" : "Masuk"}
            </ButtonPrimary>
          </div>
        </form>
        {/* <div className="w-full my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
            OR
          </p>
        </div>
        <div>
          <button
            type="button"
            className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
          >
            <div className="flex items-center justify-center">
              <Image
                src="assets/Icon/google.svg"
                alt="psikotes"
                quality={100}
                width={24}
                height={24}
              />
              <span className="ml-4">Log in with Google</span>
            </div>
          </button>
        </div> */}
      </div>
    </div>
  );
}
