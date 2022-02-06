import React, {useContext} from 'react';
import Question from "./Question";
import {QuizContext} from "../contexts/quiz";



const Quiz = () => {

    const [quizState, dispatch] = useContext(QuizContext)


    // const [questions, setQuestions] = useState([])
    // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

    return (
        <div className={'quiz'}>
            <div>
                <div className={'score'}>
                    Question 1/8
                </div>
                <Question/>
                <div
                    className={'next-button'}
                    onClick={()=> dispatch({type: 'NEXT_QUESTION'})}
                >
                    Next question
                </div>
            </div>

        </div>
    );
};

export default Quiz;
