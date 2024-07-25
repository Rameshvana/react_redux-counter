import { createStore } from "redux";
const data = {count: 0 }

const initialState = {
  balance: 0, fullName: '', mobile : null 
}

function accountRedure(state = data, action){
   switch (action.type) {
      case "countIncrease":
         return {...state,count: state.count + action.payload}
      case "countDecrese":
         return {...state,count: state.count - action.payload}
      case 'reset':
         return data;   
      default:
         return state;
   }
}


const countStore = createStore(accountRedure);
export default countStore;
