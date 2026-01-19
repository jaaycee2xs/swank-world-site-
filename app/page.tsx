export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Swanks World
        </h1>

        <p className="mt-6 text-lg text-gray-300">
          Streetwear. Culture. Built from the ground up.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
            Shop Drop
          </button>

          <button className="px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
            Lookbook
          </button>
        </div>
      </div>
    </main>
  );
}
