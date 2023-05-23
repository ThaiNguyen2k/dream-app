import { useEffect, useState } from "react";
import styled from "styled-components";
const Button = styled.button
    `background: transparent;
    border-radius: 3px;
    border: 2px solid #BF4F74;
    color: #BF4F74;
    margin: 0 1em;
    padding: 0.25em 1em;`

export function Counter2(props){
    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState("")

    
    useEffect(()=>{
        setTimeout(() => {
            setLoading("loadinggggg")
        }, 2000);
    }, [count, loading])
    function onDecrease(){
        setCount(count - 1)
    }
    function onIncrease(){
        setCount(count + 1)
    }

    return(
        <div>
        {
            loading===""?
            <div>Loading2</div>:
             <>
             <div>
                 <h1>{props.name}</h1>
                 <button onClick = {onDecrease}>-</button>
                 <span>{count}</span>
                 <button onClick = {onIncrease}>+</button>
             </div>
             </>
        }
        </div>
    )
}