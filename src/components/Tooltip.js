import React , {useState} from "react";
import Tip from "./Tip";

const Tooltip = () =>{
    const [hover, setHover] = useState(false);

    return (
        <div>
            <h2 
                className="tooltip"
                onMouseEnter={()=> setHover('h2')}
                onMouseLeave={()=> setHover('')}
            >
                Hover over me
                {hover === 'h2' && <Tip text='This is a tooltip'/>}
            </h2>
            <p 
                className="tooltip"
                onMouseEnter={() => setHover('p')}
                onMouseLeave={() => setHover('')}
            >
                Hover over me to see another tooltip
                {hover === 'p' && <Tip text = 'This is another tooltip'/>}
            </p>
        </div>
    )
}

export default Tooltip;