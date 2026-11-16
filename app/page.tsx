export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col p-4 w-60 bg-gray-500">
          <div className="flex">
            <button className="flex-1">Home</button>
            <button className="flex-1">Code</button>
          </div>
          <div className="flex flex-col gap-4">
            <p>New</p>
            <p>New</p>
            <p>New</p>
            <p>New</p>
            <p>New</p>
            <p>New</p>
          </div>

          <div>
            <p>Pinned^</p>
          </div>

           <div>
            <p>Chat history^</p>
          </div>

          <div className="flex flex-1 items-end">
            <p>Sophia</p>
          </div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-2">
          <h1 className="text-5xl">Lets Noodle</h1>
          <div className="flex w-full max-w-2xl flex-col bg-gray-100">
            <textarea className="bg-gray-200" placeholder="type"></textarea>
            <div className="flex items-center gap-2">
              < button>+</button>
              <button>Chat</button>
              <button>Cowork</button>

              <div className="flex justify-end ml-auto gap-2">
                <button>opus</button>
                <button>mic</button>
              </div>
              
            </div>


          </div>
      </div>
    </div>
  );
}
