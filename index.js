const  {createStore, combineReducers, applyMiddleware}= require('redux');
const {default:logger}=require('redux-logger')


// redux 
// 1. state
// 2.dispatch action
// reducer
// store ==> getState(),dispatch(),subscribe()

// create require store 


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
// store.dispatch(incrementCounterAction("Rakib"))
// store.dispatch(incrementCounterAction("Mia"))



// multiple reducer add 

// constant declare 
const PRODUCT_GET_MANAGEMENT="PRODUCT_GET_MANAGEMENT"
const PRODUCT_ADD_MANAGEMENT="PRODUCT_ADD_MANAGEMENT"
const CART_GET_MANAGEMENT="CART_GET_MANAGEMENT"
const CART_ADD_MANAGEMENT="CART_ADD_MANAGEMENT"


// state declare 
const initialProduct={
    products:['Mango','Banana'],
    count:2
}
const initialCart={
    products:['Wedding'],
    count:1
}

// create action 
const getProduct=()=>{
    return {
        type:PRODUCT_GET_MANAGEMENT
    }

}
const addProduct=(product)=>{
    return{
        type:PRODUCT_ADD_MANAGEMENT,
        payload:product
    }
}

const getCart=()=>{
    return {
        type:CART_GET_MANAGEMENT
    }

}
const addCart=(product)=>{
    return{
        type:CART_ADD_MANAGEMENT,
        payload:product
    }
}


// create reducer 
const productReducer =(state=initialProduct,action)=>{
    switch (action.type) {
        case PRODUCT_GET_MANAGEMENT:
            return {
                ...state
            }
        case PRODUCT_ADD_MANAGEMENT:
            return {
                products:[...state.products,action.payload],
                count:state.count + 1
            }
            
        
    
        default:
          return  state
    }
}
const CartReducer =(state=initialCart,action)=>{
    switch (action.type) {
        case CART_GET_MANAGEMENT:
            return {
                ...state
            }
        case CART_ADD_MANAGEMENT:
            return {
                products:[...state.products,action.payload],
                count:state.count + 1
            }
            
        
    
        default:
          return  state
    }
}

const rootReducer =combineReducers({productReducer,CartReducer})

// store create 
const store1=createStore(rootReducer);

store1.subscribe(()=>{
    console.log(store1.getState())
})

// store1.dispatch(getCart())
// store1.dispatch(addCart("Birthday"))
// store1.dispatch(addProduct("jackfruits"))


// 
// 
// apply middleware 
// 
// 

// constant declare 
const PRODUCT_GET_MANAGEMENT1="PRODUCT_GET_MANAGEMENT1"
const PRODUCT_ADD_MANAGEMENT1="PRODUCT_ADD_MANAGEMENT1"



// state declare 
const initialProduct1={
    products:['Mango','Banana'],
    count:2
}


// create action 
const getProduct1=()=>{
    return {
        type:PRODUCT_GET_MANAGEMENT1
    }

}
const addProduct1=(product)=>{
    return{
        type:PRODUCT_ADD_MANAGEMENT1,
        payload:product
    }
}




// create reducer 
const productReducer1 =(state=initialProduct1,action)=>{
    switch (action.type) {
        case PRODUCT_GET_MANAGEMENT1:
            return {
                ...state
            }
        case PRODUCT_ADD_MANAGEMENT1:
            return {
                products:[...state.products,action.payload],
                count:state.count + 1
            }
            
        
    
        default:
          return  state
    }
}




// store create 
const store2=createStore(productReducer1,applyMiddleware(logger));

store2.subscribe(()=>{
    console.log(store2.getState())
})



store2.dispatch(getProduct1())
store2.dispatch(addProduct1("jackfruits"))