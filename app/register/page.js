"use client";
import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import getScrollAnimation from "@/utils/getScrollAnimation";
import ButtonOutline from "@/components/Button/ButtonOutline";

export default function Dashboard() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("masuk handleSubmit");

    try {
      const response = await fetch("http://localhost:3000/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      if (response.ok) {
        router.push("/login");
      } else {
        toast.error("Failed to create user");
      }
    } catch (error) {
      console.log("error", error);
      toast.error(error);
    }
  };

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div className="md:flex max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto justify-center">
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
            Daftar Sekarang!
          </h1>
          <p className="text-sm font-normal text-gray-100 mb-7">
            Sudah punya akun Psikotes?{" "}
            <Link
              href="/login"
              className="capitalize tracking-wide text-orange-500 transition-all underline"
            >
              Masuk
            </Link>
          </p>

          <div className="mt-2">
            <label
              className="flex text-white dark:text-gray-200"
              htmlFor="emailAddress"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
              nama
            </label>
            <input
              id="Username"
              type="text"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          <div className="mt-2">
            <label
              className="flex text-white dark:text-gray-200 "
              htmlFor="emailAddress"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              Email
            </label>
            <input
              id="emailAddress"
              type="email"
              value={email}
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              onChange={(e) => setEmail(e.target.value)}
              className="border-red-500 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div className="mt-2">
            <label
              className="flex text-white dark:text-gray-200"
              htmlFor="password"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-100"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              Kata Sandi
            </label>
            <input
              id="password"
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div className="mt-4">
            <ButtonOutline type="submit">Daftar</ButtonOutline>
          </div>
        </form>
      </div>
    </div>
  );
}
