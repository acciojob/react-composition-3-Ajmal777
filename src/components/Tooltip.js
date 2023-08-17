import React , {useState} from "react";

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
                <div className="tooltiptext">{hover == 'h2' && 'This is a tooltip'}</div>
            </h2>
            <p 
                className="tooltip"
                onMouseEnter={() => setHover('p')}
                onMouseLeave={() => setHover('')}
            >
                Hover over me to see another tooltip
                <div className="tooltiptext">{hover === 'p' && 'This is another tooltip'}</div>
            </p>
        </div>
    )
}

export default Tooltip;