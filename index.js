// create INCREMENT and DECREMENT 
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_USER = 'ADD_USER';

// state
const initialCountState = {
    count: 0
}
const intialUsersState = {
    users: [{ name: "rakib" }]
}

// Action ===> object-type,payload 
const incrementCounter = () => {
    return { type: INCREMENT }
}
const decrementCounter = () => {
    return { type: DECREMENT }
}
const addUser = () => {
return {
    type:ADD_USER,
    payload:{name:"rakib Mia"}
}
}