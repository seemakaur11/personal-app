import React from 'react'

function Std(props) {
    const handleClick = () => {
            console.log(" data ============>",props.data)
    }
    return (
        <div>
            <button onClick={() => !!props.data ? <h1> {props.data.name}</h1> : ""}> CLICK ME</button>
            
            {/* <div> {props.data} </div> */}
            {/* <h3>std id:   {id}</h3>
            <h3>std sub:  {sub}</h3>
            <h3>std phone: {phone}</h3> */}
        </div>
    )
}

export default Std;
