import { useState } from "react";

const HomePage = () => {
  const [quiz, setQuiz] = useState<stirng>("apple");
  const [answer, setAnswer] = useState<string>(null);
  const [findItem, setFindItem] = useState<string[]>([]);
  const [quizArr, setQuizArr] = useState<string[]>([]);
  let itemData:string[] = ['a','b'];

  const handleForAnwser = (e) => {
    setAnswer(e.target.value);
  }

  const validEnterEvent = (e) => {
    if(e.key === "Enter") handleForClick();
  }

  const handleForClick = () => {
    try{

      console.log("==========================================================");
      const quizArray = splitString(quiz);
      const answerArray = splitString(answer);

      setQuizArr(quizArray);

      for(let i = 0; i < answerArray.length; i++) {
        const aData = quizArray.filter((data, index) => i === index && answerArray[i] === data);
        if(aData.length > 0) {
          console.log(`### task : ${aData} , len ${aData.length}`);
        } else {
          console.log(`## failed item ${answerArray[i]}`);
        }        
      }

      itemData  = answerArray.map((item, index) => {
        if(quizArray.includes(item)) {
          return {value: item, index};
        }
      }).filter(Boolean);

      setFindItem(itemData);
      console.log(itemData);
      
      console.log("==========================================================");
    }
    catch(error) {
      console.error(`## insert answer error`);
    }
  }

  const splitString = (inputText: string) => {
    return inputText.split('');
  }


  return(
    <div className=" flex justify-center flex-col items-center p-2 ">
      <div className=" mb-8">Dino__kit Wordle</div>
      <div className=" pt-5 bg-slate-300 w-1/4 border-solid border-2 border-black rounded-md flex justify-between">
          <div className=" bg-red-300 border-solid border-2 border-black w-1/5 h-16">asd</div>
          <div className=" bg-red-300 border-solid border-2 border-black w-1/5 h-16">asd</div>
          <div className=" bg-red-300 border-solid border-2 border-black w-1/5 h-16">asd</div>
          <div className=" bg-red-300 border-solid border-2 border-black w-1/5 h-16">asd</div>
          <div className=" bg-red-300 border-solid border-2 border-black w-1/5 h-16">asd</div>
      </div>
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
      <div className=" pt-5 bg-slate-300 w-1/4 border-solid border-2 border-black rounded-md flex justify-between">
      {
        itemData.map((item, index) => (
          <div className=" bg-red-300 border-solid border-2 border-black w-1/5 h-16" key={index}>{item}</div>
        ))
      }
      </div>
      <div className=" bg-orange-200 h-full w-full">
        <input type="text" onChange={handleForAnwser} onKeyDown={validEnterEvent}></input>
        <button onClick={handleForClick}>확인</button>
      </div>
    </div>
  )
}

export default HomePage;