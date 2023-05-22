import { useEffect, useState } from "react";

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
            loading==""?
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