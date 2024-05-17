import React from "react";
import{FaQuoteLeft,FaQuoteRight,} from "react-icons/fa"


  const Cards=(props)=>{
 let review=props.review;
    return(
        <div className="flex flex-col justify-center" >
            
             <div className="grid justify-center ">
                  <img className=" rounded-3xl w-[150px] h-[150px] shadow-violet-600 shadow-lg " src={review.image}/>
                 
            </div>
             <div>
             <p className=" text-black font-bold text-2xl">{review.name}</p>
             </div>
             <div>
                 <p className=" text-violet-400">{review.job}</p>
             </div>
             <div className="text-violet-700 text-lg flex justify-center ">
                <FaQuoteLeft className/>
             </div>
            
            
             <div className="grid justify-center">
                <p className="font-serif  ">{review.text}</p>
             </div>
             <div className="text-violet-700 text-lg flex justify-center ">
                <FaQuoteRight/>

             </div>
            

        </div>
    )
  }
  export default Cards;
