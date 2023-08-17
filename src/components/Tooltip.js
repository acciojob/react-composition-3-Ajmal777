import React , {useState} from "react";

const Tooltip = () =>{
    const [hover, setHover] = useState(false);

    return (
        <div>
            <h2 className="tooltip" >
                <div onMouseEnter={()=> setHover('h2')} onMouseLeave={()=> setHover('')}>
                    {hover === 'h2' && <div className="tooltiptext">This is a tooltip</div>}
                    Hover over me
                </div>
            </h2>
            <p className="tooltip" >
                <div onMouseEnter={() => setHover('p')} onMouseLeave={() => setHover('')}>
                    {hover === 'p' && <div className="tooltiptext">This is another tooltip</div>}
                    Hover over me to see another tooltip
                </div>
            </p>
        </div>
    )
}

export default Tooltip;