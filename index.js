// redux has 4 step 
// 1. state
// 2.dispatch action
// reducer
// store ==> getState(),dispatch(),subscribe()

// require redux store 
const {createStore} = require('redux'); 

// create INCREMENT and DECREMENT 
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_USER = 'ADD_USER';

// 1.state
const initialCountState = {
    count: 0,
    users: [{ name: "rakib" }]
}
const intialUsersState = {
    users: [{ name: "rakib" }]
}

//2. Action ===> object-type,payload 
const incrementCounter = () => {
    return { type: INCREMENT }
}
const decrementCounter = () => {
    return { type: DECREMENT }
}
const addUser = () => {
    return {
        type: ADD_USER,
        payload: { name: "rakib Mia" }
    }
}
// reducer create 
const counterReducer = (state = initialCountState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }

        default:
            state
    }
}

// create store 
const store = createStore(counterReducer);
