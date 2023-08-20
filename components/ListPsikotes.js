"use client";
import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "@/utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import CardVertical from "@/components/CardVertical";

//server side rendering
// const getPsikotes = async () => {
//     try {
//       const res = await fetch(`${process.env.PATH_URL}api/psikotes`, {
//         cache: "no-store",
//       });

//       if (!res.ok) {
//         toast.error("Failed to get psikotes");
//       }
//       return res.json();
//     } catch (error) {
//       console.log("getPsikotes error", error.message);
//       toast.error(error);
//     }
//   };

export default function Psikotes() {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [psikotes, setPsikotes] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/psikotes")
      .then((res) => res.json())
      .then(({ psikotes }) => {
        setPsikotes(psikotes);
      })
      .catch(() => toast.error("Failed to get psikotes"))
      .finally(() => setLoading(false));
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!psikotes) return <p>No psikotes data</p>;

  return (
    <div
      className="flex flex-col align-item-center text-center mt-8"
      id="feature"
    >
      <ScrollAnimationWrapper>
        <motion.h3
          variants={scrollAnimation}
          className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed mt-24 sm:mt-16"
        >
          Pilih Tes Psikologi
        </motion.h3>
        <motion.p
          variants={scrollAnimation}
          className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
        >
          Ayo pilih tes psikologi yang ingin Anda jalani sekarang. Mulai
          perjalanan pengetahuan diri Anda hari ini!
        </motion.p>
      </ScrollAnimationWrapper>
      {console.log("data psikotes", psikotes)}
      <div className="md:flex max-w-screen-xl mx-auto justify-center gap-4 flex-wrap mt-4">
        {psikotes?.map((tes) => (
          <CardVertical key={tes._id} tes={tes} />
        ))}
      </div>
    </div>
  );
}
