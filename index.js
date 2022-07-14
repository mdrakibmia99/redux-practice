
// redux 
// 1. state
// 2.dispatch action
// reducer
// store ==> getState(),dispatch(),subscribe()

// create require store 
const  {createStore}= require('redux');

// const declare 
const INCREMENT = "INCREMENT";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const DECREMENT = "DECREMENT";
const RESET ="RESET";

// state declare 

const initialCounter ={
    user:["Md"],
    count:0
}


// action declare  
const incrementCounterAction =(value)=>{
    return{
        type:INCREMENT,
        payload:value
    }
}
const incrementCounterByValue =(value)=>{
    return{
        type:INCREMENT_BY_VALUE,
        payload:value
    }
}
const decrementCounterAction =()=>{
    return{
        type:DECREMENT
    }
}
const resetCounterAction =()=>{
    return{
        type:RESET
    }
}

// reducer create 
  const counterReducer =(state=initialCounter,action)=>{
    switch (action.type) {
        case INCREMENT:
            return{
                user:[...state.user,action.payload],
                count:state.count + 1
            }
        case INCREMENT_BY_VALUE:
            return{

                count:state.count + action.payload
            }
        case DECREMENT:
            return{
                count:state.count - 1
            }
        case RESET:
            return{
                count:0
            }
    
        default:
           state
    }

  } 

//   create store 
const store =createStore(counterReducer);

// for printf result 
store.subscribe(()=>{
    console.log(store.getState())
})

// dispatch action 

// store.dispatch(incrementCounterAction())
// store.dispatch(decrementCounterAction())
// store.dispatch(resetCounterAction())
store.dispatch(incrementCounterAction("Rakib"))
store.dispatch(incrementCounterAction("Mia"))
store.dispatch(incrementCounterAction("Mia"))
store.dispatch(incrementCounterAction("Mia"))
store.dispatch(incrementCounterAction("Mia"))


