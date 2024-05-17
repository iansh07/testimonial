import React, { useState } from "react";
import Cards from "./Cards";

import{ FiChevronLeft,FiChevronRight} from "react-icons/fi"

const Bumble=(props)=>{
    let reviews=props.reviews;
    const[index,setIndex]=useState(0);
    function left(){
        if(index-1<0){
            setIndex(reviews.length -1);
        }
        else{
            setIndex(index-1);
        }

    }
    function right(){
        if(index+1>=reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }

    }
    function surprise(){
        setIndex(Math.floor(Math.random()*reviews.length));

    }
        


return(
        <div className="flex flex-col w-[85vw] md:w-[700px] mt-10 p-10 bg-white items-center pl-4 pr-4
         hover:shadow-xl  shadow-black ">
            <Cards review={reviews[index]}/>

           
             
             <div className="flex justify-center text-3xl mt-5 gap-3 text-violet-400 font-bold">
                <button 
                onClick={left}
                className=" cursor-pointer hover:text-violet-700 ">
                    <FiChevronLeft/>
                </button>
                <button 
                onClick={right}
                className=" cursor-pointer hover:text-violet-700 ">
                    <FiChevronRight/>
                </button>
                

             </div>
             <div>
                    <button
                     onClick={surprise}
                     className=" bg-violet-500 px-2  rounded-sm text-white font-serif cursor-pointer hover:bg-violet-800  ">
                        surprise me

                    </button>
                </div>

        </div>
        

)}
export default Bumble;