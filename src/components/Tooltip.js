import React , {useState} from "react";

const Tooltip = ({children, text}) =>{
    const [hover, setHover] = useState(false);

    return (
        <div 
            className="tooltip"
            onMouseEnter={()=>setHover(true)}
            onMouseLeave={()=>setHover(false)}
        >
            {children}
            { hover && (<div className="tooltiptext"> {text} </div>) }
        </div>
    )
}

export default Tooltip;