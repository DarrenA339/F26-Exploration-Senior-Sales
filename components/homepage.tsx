
import ListingCard from "@/components/listingCard";

export default function Home() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

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
    <div className="flex min-h-screen flex-col">

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

        <button className="rounded-xl bg-red-900 px-5 py-3 text-xl font-bold text-white cursor-pointer">
          Login
        </button>

        <button className="cursor-pointer">
          Signup
        </button>
      </header>

      <div className="flex flex-1">

        <aside className="flex w-60 shrink-0 flex-col border-r bg-white p-3">
          <h2 className="mb-3 text-2xl font-bold">Categories</h2>

          <div className="flex flex-col gap-3">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`rounded-full p-3 text-left cursor-pointer ${
                  index === 0
                    ? "bg-red-900 text-white"
                    : "bg-gray-300 text-black"
                }`}
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
                className="rounded-full bg-gray-300 p-3 text-left cursor-pointer"
              >
                {item}
              </button>
            ))}
          </div>
        </aside>

        <main className="flex-1 bg-[#c9a3ad] p-7">
          <h2 className="mb-3 text-2xl font-bold">
            Recommended
          </h2>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {items.map((item) => (
              <ListingCard
                key={item}
                name="Product Name"
                imageSrc="/mirror_screenshot.png"
                price={300}
                location="Location"
              />
            ))}
          </div>
        </main>

      </div>
    </div>
  );
}
