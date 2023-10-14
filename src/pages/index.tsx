import { useEffect, useState } from "react";
import QuizPage from "./quiz";

interface RESULT_STATUS = {
  id: string;
  result: string[];
  status: string;
}

const HomePage = () => {
  const [quizResultCount, setQuizResultCount] = useState<number>(5);
  const [quizResultArray, setQuizResultArray] = useState<string[]>([]);

  const [quiz, setQuiz] = useState<stirng>("apple");
  const [answer, setAnswer] = useState<string>(null);
  const [findItem, setFindItem] = useState<string[]>([]);
  const [quizArr, setQuizArr] = useState<string[]>([]);

  let itemData:string[] = ['a','b'];
  const resultArray = [
    {"id": "qr001", "result": [],"status": "NONE"},
    {"id": "qr002", "result": [],"status": "NONE"},
    {"id": "qr003", "result": [],"status": "NONE"},
    {"id": "qr004", "result": [],"status": "NONE"},
    {"id": "qr005", "result": [],"status": "NONE"},
    {"id": "qr006", "result": [],"status": "NONE"}
  ];
  

  const handleForAnwser = (e) => {
    setAnswer(e.target.value);
  }

  const validEnterEvent = (e) => {
    if(e.key === "Enter") handleForClick();
  }

  const handleForClick = () => {
    try{

      console.log("==========================================================");
      checkedResult();
      return;

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

  /**
   * 초기화
   * 사용자가 입력한 데이터를 초기화 한다.
   */
  const resetToResult = () => {
    setQuizResultArray(resultArray);
    alert(`퀴즈 초기화 완료`);
  }



  /**
   * 퀴즈의 정답 리스트 만들기
   */
  const checkedResult = () => {
    console.log(answer);
    console.log(quizResultArray);

    for(let i = 0 ; i < quizResultArray.length ; i++) {
      const item = quizResultArray[i];
      if(item.status === "NONE") {
        item.status = "SUCCESS";
        console.log(item.result.length)
        console.log(item);
        break;
      }
    }
  }

  const splitString = (inputText: string) => {
    return inputText.split('');
  }

  useEffect(() => {
    resetToResult();
  }, [])

  return(
    <div >
      <div className=" mb-8">Dino__kit Wordle</div>
      <QuizPage quizResultArray={quizResultArray} quizArr={quizArr} findItem={findItem}/>

      <div className=" bg-orange-200 h-full w-full">
        <input type="text" onChange={handleForAnwser} onKeyDown={validEnterEvent}></input>
        <button onClick={handleForClick}>확인</button>
        <button onClick={resetToResult}>초기화</button>
      </div>
    </div>
  )
}

export default HomePage;