// import RemoveBtn from "@/components/Button/RemoveButton";
// import toast from "react-hot-toast";
// import Image from "next/image";

import CardVertical from "@/components/CardVertical";

const getPsikotes = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/psikotes", {
      cache: "no-store",
    });

    if (!res.ok) {
      toast.error("Failed to get psikotes");
    }
    return res.json();
  } catch (error) {
    console.log("getPsikotes error", error.message);
    toast.error(error);
  }
};

export default async function Psikotes() {
  const { psikotes } = await getPsikotes();

  return (
    <div className="md:flex max-w-screen-xl mt-32 px-8 xl:px-16 mx-auto justify-center gap-8 flex-wrap">
      {psikotes?.map((tes) => (
        <CardVertical tes={tes} />
      ))}
    </div>
  );
}
