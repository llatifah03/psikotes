"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "@/components/Button/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "@/utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Hero = ({
  listUser = [
    {
      name: "Psikotes atau Tes psikologi adalah evaluasi tertulis, visual, atau verbal yang diberikan untuk menilai fungsi kognitif dan emosional anak-anak hingga orang dewasa. Kami menyediakan beberapa soal-soal tes psikologi standar yang bisa anda coba untuk kebutuhan asesmen diri.",
      number: "390",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Silahkan temukan beragam soal-soal psikotes umum yang biasa digunakan untuk kebutuhan asesmen diri dan tes penilaian kerja. Anda dapat menggunakan simulasi tes gratis dari kami sebagai bekal persiapan atau latihan sebelum menghadapi psikotes yang dilakukan oleh pemberi kerja.",
      number: "20",
      icon: "/assets/Icon/gridicons_location.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl lg:mt-32 sm:mt-16 px-8 xl:px-16 mx-auto"
      id="about"
    >
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-2 sm:py-2 mt-32 "
          variants={scrollAnimation}
        >
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1 mt-32">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
              Layanan <strong>Tes Psikologi Gratis</strong> Untuk Kita Semua.
            </h1>
            <p className="text-black-500 mt-4 mb-6">
              Temukan berbagai simulasi tes psikotes online gratis untuk
              kebutuhan asesmen diri, tingkat inteligensi, kepribadian, dan
              kebutuhan tes penilaian kerja. Tes Psikologi kami dirancang untuk
              mengeksplorasi diri agar mengetahui karakter dan potensi diri.
            </p>
            <ButtonPrimary>Mulai</ButtonPrimary>
          </div>
          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <Image
                src="assets/Icon/psikotes.svg"
                alt="psikotes"
                quality={100}
                width={612}
                height={383}
                // layout="responsive"
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="relative w-full flex mt-20">
        <div className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-2  divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            // <motion.div
            //   className="flex items-center justify-start sm:justify-center py-2 sm:py-6  px-2 sm:w-auto mx-auto sm:mx-0"
            //   key={index}
            //   custom={{ duration: 2 + index }}
            //   variants={scrollAnimation}
            // >
            <div className="flex mx-auto  sm:w-auto" key={index}>
              <div className="flex flex-col">
                <p className="text-lg text-black-500">{listUsers.name}</p>
              </div>
            </div>
            // </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
