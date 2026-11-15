
const categories = [
  { name: "Browse Everything", icon: "grip.svg" },
  { name: "Furniture", icon: "armchair.svg" },
  { name: "Electronics", icon: "monitor.svg" },
  { name: "Home & Kitchen", icon: "cooking-pot.svg" },
  { name: "Books", icon: "book-open.svg" },
  { name: "Clothing", icon: "shirt.svg" },
  { name: "Free Items", icon: "gift.svg" },
];

const mySpace = [
  { name: "My Listings", icon: "tag.svg" },
  { name: "Create Listing", icon: "shopping-cart.svg" },
  { name: "Saved", icon: "heart.svg" },
  
  { name: "Settings", icon: "settings.svg" },
  { name: "Help", icon: "circle-help.svg" },
];

export default function CategorySidebar({
  activeItem,
}: {
  activeItem: string;
}) {
  return (
    <div className="flex flex-col w-60 p-4 border-r border-gray-300 bg-white text-black">

      <h2 className="font-bold text-xl mb-2">
        Categories
      </h2>

      <div className="flex flex-col gap-3">
        {categories.map((item) => (
          <button
            key={item.name}
            className={`flex items-center gap-3 rounded-full py-2 px-4 text-left shadow-md ${
              activeItem === item.name
                ? "bg-[#881d32] text-white"
                : "bg-gray-300 text-black"
            }`}
          >
            <img
              src={`/icons/${item.icon}`}
              alt=""
              className="w-4 h-4"
            />
            {item.name}
          </button>
        ))}
      </div>

      <hr className="my-4 border-gray-300" />

      <h2 className="font-bold text-xl mb-2">
        My Space
      </h2>

      <div className="flex flex-col gap-3">
        {mySpace.map((item) => (
          <button
            key={item.name}
            className={`flex items-center gap-3 rounded-full py-2 px-4 text-left shadow-md ${
              activeItem === item.name
                ? "bg-[#881d32] text-white"
                : "bg-gray-300 text-black"
            }`}
          >
            <img
              src={`/icons/${item.icon}`}
              alt=""
              className="w-4 h-4"
            />
            {item.name}
          </button>
        ))}
      </div>

    </div>
  );
}
