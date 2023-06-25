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
            <a href="">Marketplace</a>
            <a href="">Resource</a>
            <a href="">About</a>
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
          <button>Upload</button>
          <button>Connect Wallet</button>
        </div>
      </div>
    </nav>
  );
}
