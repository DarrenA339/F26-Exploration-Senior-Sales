type CategorySidebarProps = {
  activeItem: string;
};

const categories = [
  "Browse Everything",
  "Furniture",
  "Electronics",
  "Home & Kitchen",
  "Books",
  "Clothing",
  "Free Items",
];

const mySpace = ["My Listings", "Create Listing", "Saved", "Settings", "Help"];

export default function CategorySidebar({ activeItem }: CategorySidebarProps) {
  return (
    <aside>
      {/* TOP: Categories section */}
      <div>
        {/* "Categories" heading */}

        {/* Use .map() on categories to display a button for each one */}
        {/* Use conditional rendering so the activeItem button is red with white text */}
      </div>

      {/* Divider line */}

      {/* BOTTOM: My Space section */}
      <div>
        {/* "My Space" heading */}

        {/* Use .map() on mySpace to display a button for each one (same styling as above) */}
      </div>
    </aside>
  );
}
