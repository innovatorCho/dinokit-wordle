import { useState } from "react";

const HomePage = () => {
  const [quiz, setQuiz] = useState<stirng>("apple");
  const [answer, setAnswer] = useState<string>(null);

  const handleForAnwser = (e) => {
    setAnswer(e.target.value);
  }

  const validEnterEvent = (e) => {
    if(e.key === "Enter") handleForClick();
  }

  const handleForClick = () => {
    
    console.log("==========================================================");
    const quizArray = splitString(quiz);
    const answerArray = splitString(answer);

    for(let i = 0; i < answerArray.length; i++) {
      const aData = quizArray.filter((data, index) => i === index && answerArray[i] === data);
      console.log(aData);
    }
    
    console.log("==========================================================");
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
          <div className=" bg-red-300 border-solid border-2 border-black w-1/5 h-16">asd</div>
          <div className=" bg-red-300 border-solid border-2 border-black w-1/5 h-16">asd</div>
          <div className=" bg-red-300 border-solid border-2 border-black w-1/5 h-16">asd</div>
          <div className=" bg-red-300 border-solid border-2 border-black w-1/5 h-16">asd</div>
          <div className=" bg-red-300 border-solid border-2 border-black w-1/5 h-16">asd</div>
      </div>
      <div className=" bg-orange-200 h-full w-full">
        <input type="text" onChange={handleForAnwser} onKeyDown={validEnterEvent}></input>
        <button onClick={handleForClick}>확인</button>
      </div>
    </div>
  )
}

export default HomePage;