import Link from "next/link";
import ButtonPrimary from "@/components/Button/ButtonPrimary";
import Image from "next/image";

function CardVertical({ tes }) {
  return (
    <div
      key={tes._id}
      className="w-72 rounded overflow-hidden shadow-lg bg-white relative"
    >
      <div>
        <Image src={tes?.imageUrl} alt="psikotes" width={300} height={300} />
      </div>

      <div className="px-4 py-4 items-center mb-16">
        <p className="text-sm text-gray-600 flex text-center items-center">
          <svg
            className="fill-current text-gray-500 w-3 h-3 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
          </svg>
          {tes?.subTitle}
        </p>
        <div className="text-gray-900 font-bold text-xl mb-2">{tes?.title}</div>

        <p className="text-gray-700 text-base">{tes?.description}</p>
      </div>
      <div className="w-full px-4 pt-4 pb-2 absolute bottom-0">
        <Link href={`/psikotes/${tes?.pathName}`}>
          <ButtonPrimary addClass="w-full">Mulai</ButtonPrimary>
        </Link>
      </div>
    </div>
  );
}

export default CardVertical;
