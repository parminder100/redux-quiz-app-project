import {useDispatch, useSelector} from "react-redux";
import { setSelectedAnswer } from "../Store/Store";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../Quiz/Quiz.css";

const Quiz = () =>{
    const dispatch = useDispatch();
    const result = useSelector((state)=>state.questionIndex);
    const quizQuestions = [
        {
          question: "What is the capital of France?",
          answers: ['New York', 'London', 'Paris', 'Dublin'],
          correctAnswer: "Paris",
        },
        {
          question: "Which planet is known as red planet?",
          answers: ['Venus', 'Mars', 'Jupiter', 'Mercury'],
          correctAnswer: "Mars",
        },
      ]

      const [quizData, setQuizData] = useState(quizQuestions[result]);
      const [correctedAnswer, setCorrectedAnswer] = useState(0);
      
      const quizCompleted = result >= quizQuestions.length;

      const handleanswer = (selectedAnswer) =>{
        if(selectedAnswer === quizData.correctAnswer){
            dispatch(setSelectedAnswer(selectedAnswer));
            setCorrectedAnswer(correctedAnswer + 1);
            if(!quizCompleted){
                setQuizData(quizQuestions[result + 1])
            }
        }
      }
    return(
        <>
            <section>
                <h1 className="text-center">Redux Quiz App Project</h1>
                <div className="container quiz-content">
                    <div className="row">
                        {quizCompleted ? (
                            <div className="col-sm-6">
                                <p>You answered {correctedAnswer} question(s) correctly.</p>
                            </div>
                            ):
                            (
                            <>
                                <div className="col-sm-6">
                                    <p>{quizData.question}</p>
                                    
                                </div>
                                <div className="col-sm-6 quiz-answers">
                                    {
                                        quizData.answers.map((answer,index)=>(
                                            <button key={index} onClick={()=>handleanswer(answer)}>{answer}</button>
                                        ))
                                    }
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Quiz;