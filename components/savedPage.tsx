
import Image from "next/image";

export default function Saved() {
  const categories = [
    "Browse Everything",
    "Furniture",
    "Electronics",
    "Home & Kitchen",
    "Books",
    "Clothing",
    "Free Items",
  ];

  const mySpace = [
    "My Listings",
    "Create Listing",
    "Saved",
    "Settings",
    "Help",
  ];

  return (
    <div className="flex min-h-screen w-screen flex-col">

      <header className="flex items-center gap-6 border-b bg-white p-4">
        <h1 className="text-3xl font-bold whitespace-nowrap">
          🛍️ Senior <span className="text-red-800">Sales</span>
        </h1>

        <input
          type="text"
          placeholder="Search for items (eg. furniture, electronics, books...)"
          className="flex-1 rounded-full border p-3"
        />

        <div className="flex items-center gap-6 text-2xl">
        </div>

        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-gray-300"></div>
          <p className="whitespace-nowrap">My Account</p>
        </div>
      </header>

      <div className="flex flex-1">

        <aside className="flex w-60 shrink-0 flex-col border-r bg-white p-3">
          <h2 className="mb-3 text-2xl font-bold">Categories</h2>

          <div className="flex flex-col gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="rounded-full bg-gray-300 p-3 text-left cursor-pointer"
              >
                {category}
              </button>
            ))}
          </div>

          <hr className="my-6" />

          <h2 className="mb-3 text-2xl font-bold">My Space</h2>

          <div className="flex flex-col gap-3">
            {mySpace.map((item) => (
              <button
                key={item}
                className={`rounded-full p-3 text-left cursor-pointer ${
                  item === "Saved"
                    ? "bg-red-900 text-white"
                    : "bg-gray-300"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </aside>

        <main className="flex-1 bg-[#c9a3ad] p-4">

          <div className="mb-3 flex items-center justify-between rounded-xl bg-white p-2">
            <h1 className="text-2xl font-bold">♡ Saved</h1>

            <input
              type="text"
              placeholder="Search your Saved"
              className="w-1/2 rounded-full bg-gray-300 px-3 py-1"
            />
          </div>

          <div className="flex gap-5 rounded-2xl bg-white p-5">
            <Image
              src="/mirror_screenshot.png"
              alt="Circular Mirror"
              width={180}
              height={180}
              className="h-44 w-44 rounded-xl object-cover"
            />

            <div className="flex flex-1 flex-col">
              <h2 className="text-3xl font-bold">
                Circular Mirror
              </h2>

              <p className="text-xl">$100</p>
              <p className="text-xl">Active Listing</p>
              <p className="text-xl">Harvard Hall</p>

              <div className="mt-auto flex gap-2">
                <button className="flex-1 rounded-xl bg-red-900 p-3 font-bold text-white cursor-pointer">
                  Make Offer
                </button>

                <button className="flex-1 rounded-xl bg-gray-300 p-3 font-bold cursor-pointer">
                  Delete
                </button>

                <button className="flex-1 rounded-xl bg-gray-300 p-3 font-bold cursor-pointer">
                  Share
                </button>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
