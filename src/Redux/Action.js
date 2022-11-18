import { CHANGEINP, DECREMENT, HANDLESHOW, INCREMENT } from "./ActionTypes"

export const increment=()=>{
    return(
        {
            type : INCREMENT
        }
    )
}

export const decrement=()=>{
    return(
        {
            type : DECREMENT
        }
    )
}

export const changeInp=(payload)=>{
    return(
        {
            type : CHANGEINP,
            payload 
        }
    )
}

export const handleShow=()=>{
    return(
        {
            type:HANDLESHOW
        }
    )
}