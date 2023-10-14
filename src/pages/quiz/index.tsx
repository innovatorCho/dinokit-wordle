import { NextPage } from "next"
import { useState } from "react";

const QuizPage: NextPage = ({quizResultArray, quizArr, findItem }) => {
  
    return(
        <div className=" flex justify-center flex-col items-center p-2 ">
        {
            quizResultArray.map((item, index) => {
            return(
                <div key={item.id} className=" pt-5 bg-slate-300 w-1/4 border-solid border-2 border-black rounded-md flex justify-between">
                    <div id={`${item.id}_1`} 
                      className=" bg-white border-solid border-2 border-black w-1/5 h-16"
                    />
                    <div id={`${item.id}_2`} 
                      className=" bg-white border-solid border-2 border-black w-1/5 h-16"
                    />
                    <div id={`${item.id}_3`} 
                      className=" bg-white border-solid border-2 border-black w-1/5 h-16"
                    />
                    <div id={`${item.id}_4`} 
                      className=" bg-white border-solid border-2 border-black w-1/5 h-16"
                    />
                    <div id={`${item.id}_5`} 
                      className=" bg-white border-solid border-2 border-black w-1/5 h-16"
                    />
                </div>
            )
            })
        }
        
      <div className=" pt-5 bg-slate-300 w-1/4 border-solid border-2 border-black rounded-md flex justify-between">
        {
          quizArr.map((item, index) => {
            console.log("--------------------------->>")
            let divTag = <div className=" bg-red-300 border-solid border-2 border-black w-1/5 h-16"></div>; 
            findItem.map(data => {
              
              if(data.index === index) {
                console.log(`${index} >> data ${data.value}, ${data.index}`);
                divTag = (<div className=" bg-red-300 border-solid border-2 border-black w-1/5 h-16">{data.value}</div>);
              }
            })
            return divTag;
            console.log("---------------------------<<")
          })
        }
      </div>
        </div>
    )
}

export default QuizPage;