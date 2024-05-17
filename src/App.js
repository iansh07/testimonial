import React from "react";
import Bumble from "./components/Bumble";
import reviews from "./data";

const App = () => {
  return( 
           <div className="flex flex-col w-[100vw] h-[100vh]  justify-center  bg-gray-200">
             <div className=" flex flex-col text-center">
              

                <h1 className="  font-bold text-4xl text-black">Sasta Bumble</h1>
                <div className="bg bg-purple-600 h-[4px] w-[150px] mx-auto "></div>
                 <div className="flex justify-center ">
               
                 
              
                <Bumble  reviews={reviews}/>
                </div>
                </div>
              </div>
            
        );
        };

export default App;
