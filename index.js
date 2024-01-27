const {createStore} = require("redux")

//defining constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_USER = "ADD_USER";


//state
const initialCounterState = {
    count: 0,
    users: '',
};
const initialUsersState = {
    users:[{name: "roman sarker"}]
};

// action is a onject with type and payload(for data transfar)
//Increment Counter
const incrementCounter = () => {
    return{
        type: INCREMENT,
    };
};
//Decrement Counter
const decrementCounter = () => {
    return{
        type: DECREMENT,
    };
};
 
// const addUser = () =>{
//     return{
//         type: ADD_USER,
//         payload: {name: 'shakil'}
//     };
// };

//create reducer for counter its a pure function getting input and giving output must

const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return{
                ...state,
                count: state.count - 1
            }
    
        default:
            state;
    }
}

//store having 3 function getState(), dispatch(), subscribe()


//create store

const store = createStore(counterReducer);

store.subscribe(()=>{
    console.log(store.getState());
})

//dispatch action
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(decrementCounter())