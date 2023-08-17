import React , {useState} from "react";

const Tooltip = ({children, text}) =>{
    const [hover, setHover] = useState(false);

    return (
        <h2 
            className="tooltip"
            onMouseEnter={()=>setHover(true)}
            onMouseLeave={()=>setHover(false)}
        >
            {children}
            { hover && (<div className="tooltiptext"> {text} </div>) }
        </h2>
    )
}

export default Tooltip;