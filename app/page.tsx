import Sidebar from "@/components/sidebar";
import ListingCard from "@/components/listingCard";

export default function Home() {
  return (


    
    <div className="flex h-screen">

 <main>
      <ListingCard
        name="Circular Mirror"
        imageSrc="/mirror_screenshot.png"
        price={100}
        location="Harvard Hall"
      />
    </main>

      {/* <Sidebar/>

        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          <h1 className="text-5xl">Lets Noodle</h1>
          <div className="flex w-full max-w-2xl flex-col bg-gray-100">
            <textarea className="bg-gray-200" placeholder="type"></textarea>
            <div className="flex items-center gap-2">
              <button>+</button>
              <button>Chat</button>
              <button>Cowork</button>
              
              <div className= "flex justify-end ml-auto gap-2">
              <button>opus</button>
              <button>mic</button>
              </div>

            </div>
          </div>
      </div> */}
    </div>
  );
}