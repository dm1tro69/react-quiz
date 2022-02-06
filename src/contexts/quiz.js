import {createContext, useReducer} from "react";

const initialState = {
    currentQuestionIndex: 0,
    questions: []
}
const reducer = (state, action) => {
    console.log(state)
    switch (action.type) {
        case 'NEXT_QUESTION':
            return {...state, currentQuestionIndex: state.currentQuestionIndex+1}
        default:
            return state
    }

}

export const QuizContext = createContext()

export const QuizProvider = ({children}) => {
    const value = useReducer(reducer, initialState)

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}