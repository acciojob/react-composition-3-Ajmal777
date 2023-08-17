import React , {useState} from "react";

const Tooltip = () =>{
    const [hover, setHover] = useState(false);

    return (
        <div>
            <h2 className="tooltip" onMouseEnter={()=> setHover('h2')} onMouseLeave={()=> setHover('')}>
                {hover === 'h2' && <div className="tooltiptext">This is a tooltip</div>}
                Hover over me
            </h2>
            <p className="tooltip" onMouseEnter={() => setHover('p')} onMouseLeave={() => setHover('')}>
                {hover === 'p' && <div className="tooltiptext">This is another tooltip</div>}
                Hover over me to see another tooltip
            </p>
        </div>
    )
}

export default Tooltip;