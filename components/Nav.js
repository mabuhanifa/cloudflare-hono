import { CiSearch } from "react-icons/ci";

export default function Nav() {
  return (
    <nav className="my-5">
      <div className="flex items-center justify-around">
        <div className="flex items-center justify-center gap-x-12">
          <p className="uppercase font-extrabold text-[#3D00B7] text-2xl">
            NFters
          </p>
          <div className="flex items-center justify-center gap-x-10">
            <a href="" className="font-[500]">Marketplace</a>
            <a href="" className="font-[500]">Resource</a>
            <a href="" className="font-[500]">About</a>
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-10">
          <form className="relative">
            <CiSearch
              size={25}
              className="absolute top-1/2 right-5 -translate-y-1/2 text-gray-500"
            />
            <input
              type="text"
              className="px-7 py-3 border rounded-full w-[300px]"
            />
          </form>
          <button className="bg-[#3D00B7] text-white px-7 py-3 rounded-full">Upload</button>
          <button className="border-2 border-[#3D00B7] text-[#3D00B7] bg-white px-7 py-3 rounded-full font-semibold">Connect Wallet</button>
        </div>
      </div>
    </nav>
  );
}
