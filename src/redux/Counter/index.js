import {Component} from 'react'
import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { Decresaction, Increseaction, resetaction } from '../actions';

function Counter(){
    const data = useSelector(state => state);

    const dispach = useDispatch();
    console.log(data)

    return(
        <div className='count-card'>
          <h1>Google Counter Card</h1>
          <h2>Count is <span>{data.count}</span></h2>
          <div>
             <button onClick={() => dispach(Increseaction(1))}>Increase Count</button> 
             <button onClick={() => dispach(Decresaction(1))}>Decrease Count</button> 
             <button onClick={() => dispach(resetaction())}>Reset Count</button> 
          </div>
        </div>  
      )  
}

{/*class Counter extends Component{
     data = useSelector((state) => {
        return state;
    })
    

  render(){
    const a = this.data()
    return(
      <div className='count-card'>
        <h1>Google Counter Card</h1>
        <h2>Count is <span>0</span></h2>
        <div>
           <button>Increase Count</button> 
           <button>Decrease Count</button> 
           <button>Reset Count</button> 
        </div>
      </div>  
    )
  }  
}*/}

export default Counter;