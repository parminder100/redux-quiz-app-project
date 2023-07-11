import {createStore} from "redux";

const selectedanswer = "selectedanswer";

export const setSelectedAnswer = (selected) =>(
    {
        type: selectedanswer,
        selected,
    }
);

const initialState = {
    questionIndex: 0,
};

const quizReducer = (state=initialState, action) =>{
    if(action.type === selectedanswer){
        return{
            ...state, questionIndex: state.questionIndex + 1,
        }
    }
    return state;
}

const Store = createStore(quizReducer);
export default Store;