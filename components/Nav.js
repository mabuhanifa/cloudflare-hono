export default function Nav() {
  return (
    <nav className="my-5">
      <div className="flex items-center justify-around">
        <div className="flex items-center justify-center gap-x-10">
          <p className="uppercase font-extrabold text-[#3D00B7] text-2xl">NFters</p>
          <a href="">Marketplace</a>
          <a href="">Resource</a>
          <a href="">About</a>
        </div>
        <div className="flex items-center justify-center gap-x-10">
          <form>
            <input type="text" className="px-5 py-3 border rounded-full"/>
          </form>
          <button>Upload</button>
          <button>Connect Wallet</button>
        </div>
      </div>
    </nav>
  );
}
