import RemoveBtn from "@/components/Button/RemoveButton";
import toast from "react-hot-toast";

const getUsers = async () => {
  try {
    const res = await fetch(`${process.env.PATH_URL}api/user`, {
      cache: "no-store",
    });

    if (!res.ok) {
      toast.error("Failed to get user");
    }
    return res.json();
  } catch (error) {
    console.log("getUsers error", error.message);
    toast.error(error);
  }
};

export default async function Dashboard() {
  const { users } = await getUsers();

  return (
    <div className="md:flex flex-col max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto justify-center">
      {users?.map((user) => (
        <div
          key={user._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{user.username}</h2>
            <div>{user.email}</div>
            <div>{user._id}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={user._id} />
          </div>
        </div>
      ))}
    </div>
  );
}
