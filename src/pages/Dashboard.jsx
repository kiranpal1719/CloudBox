import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { FiMoreVertical } from "react-icons/fi";
import { FaRegFileAlt } from "react-icons/fa";

function Dashboard() {

  const navigate = useNavigate();
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const storedFiles =
      JSON.parse(localStorage.getItem("myFiles")) || [];

    setFiles(storedFiles);
  }, []);


  return (

    <div className="flex min-h-screen bg-[#111111]">

      {/* Sidebar */}
      <Sidebar />


      {/* Main Content */}
<main 
  className="
  flex-1
  w-full
  min-w-0
  overflow-x-hidden
  "
>


        {/* Top Heading */}
        <div className="px-4 sm:px-6 lg:px-10 py-5">

          <h1 className="text-white text-lg font-semibold">
            Dashboard
          </h1>

        </div>



        {/* Content */}

        <div className="
          px-4 
          sm:px-6 
          lg:px-10 
          pb-10
        ">


          <h2 className="
            text-white 
            text-2xl 
            sm:text-3xl 
            font-bold
          ">
            Welcome to CloudVault
          </h2>



          {/* Files Grid */}

          <div 
className="
grid 
grid-cols-1 
md:grid-cols-2 
xl:grid-cols-3
gap-6
mt-8
w-full
"
>


          {
            files.length === 0 ? (

              <div className="col-span-full w-full max-w-5xl mx-auto">


                <div 
                className="
                bg-[#1d1d1d]
                border
                border-gray-700
                rounded-xl
                min-h-[280px]
                flex
                flex-col
                justify-center
                items-center
                px-5
                text-center
                "
                >


                  <FaRegFileAlt
                    size={65}
                    className="text-gray-500"
                  />


                  <h3 
                  className="
                  text-white 
                  text-xl 
                  sm:text-2xl 
                  font-semibold 
                  mt-5
                  "
                  >
                    No Files Uploaded
                  </h3>


                  <p className="text-gray-400 mt-2">
                    Upload your first file to see it here.
                  </p>


                  <button
                  onClick={() => navigate("/upload")}
                  className="
                  mt-6
                  bg-blue-600
                  hover:bg-blue-700
                  px-6
                  py-3
                  rounded-lg
                  text-white
                  transition
                  "
                  >
                    Upload File
                  </button>


                </div>


              </div>


            ) : (


              files
              .slice()
              .reverse()
              .map((file)=>(


                <div
                key={file.id}
                className="
                bg-[#1d1d1d]
                border
                border-gray-700
                rounded-xl
                hover:border-blue-500
                transition
                overflow-hidden
                "
                >


                  {/* Header */}

                  <div 
                  className="
                  flex
                  justify-between
                  items-center
                  p-4
                  "
                  >


                    <h3 
                    className="
                    text-white
                    text-sm
                    font-medium
                    truncate
                    max-w-[80%]
                    "
                    >
                      {file.name}
                    </h3>


                    <FiMoreVertical 
                    className="
                    text-gray-400
                    hover:text-white
                    "
                    />

                  </div>



                  {/* Icon Area */}

                  <div 
                  className="
                  h-44
                  sm:h-48
                  bg-[#262626]
                  flex
                  flex-col
                  justify-center
                  items-center
                  "
                  >


                    <FaRegFileAlt
                    size={65}
                    className="text-blue-500"
                    />


                    <p className="text-gray-300 mt-3 text-sm">
                      File
                    </p>


                  </div>




                  {/* Footer */}

                  <div 
                  className="
                  border-t
                  border-gray-700
                  p-4
                  "
                  >

                    <p className="text-xs text-gray-500">
                      Last Updated
                    </p>


                    <p className="text-sm text-gray-300 mt-1">
                      {file.uploadedAt || "Today"}
                    </p>


                    <p className="text-xs text-blue-400 mt-2">
                      {file.size}
                    </p>


                  </div>


                </div>


              ))


            )
          }


          </div>


        </div>


      </main>


    </div>

  );
}


export default Dashboard;