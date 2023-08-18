"use client";
import React, { useEffect, useState } from "react";

import toast from "react-hot-toast";

import ButtonOutline from "@/components/Button/ButtonOutline";

const fetchUsers = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/user", {
      cache: "no-store",
    });
    console.log("response", response.json());
    return response.json();
  } catch (error) {
    console.log("error", error);
  }
};

export default async function Dashboard() {
  //   const users = await fetchUsers();

  return (
    <div className="md:flex max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto justify-center">
      {/* {console.log("users", users)} */}
    </div>
  );
}
