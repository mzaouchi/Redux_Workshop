import {useSelector, useDispatch} from 'react-redux'
import { changeInp, decrement, increment } from '../Redux/Action'
const Counter=()=>{
    const count = useSelector(state=>state.count)
    const textP = useSelector(state=>state.textP)
    const dispatch = useDispatch()
    return(
        <div>
            <h2>Counter Component</h2>
            <button onClick={()=> dispatch(decrement())}>-</button>
            <span>{count}</span>
            <button onClick={()=> dispatch(increment())}>+</button>
            <br/>
            <br/>
            <input type='text' onChange={(e)=> dispatch(changeInp(e.target.value))}/>
            <h2>{textP}</h2>

        </div>
    )
}

export default Counter