import { useState } from "react"
import IconExpanded from "../../components/IconExpanded/IconExpanded.jsx"
import "./ExpandableIcon.css"

export default function ExpandableIcon({icon}){
    const[expand, setExpand] = useState(false);
    
    function expandContent(){
        document.getElementById(icon.icon).classList.add("shrink")
        setExpand(!expand);
        if(expand){
            document.getElementById(icon.icon).classList.remove("shrink")
        }
    }
    return(
        <>
            <div className="expandable-icon" id={icon.icon}>
                <button className="material-symbols-outlined expand" onClick={expandContent}>expand_content</button>
                <div className="icon-container">
                    <span className="material-symbols-outlined icon ">{icon.icon}</span>
                </div>
                <h2 className="icon-name">{icon.iconName}</h2>
            </div>
            <IconExpanded iconRef={icon} expanded={expand} onClose={expandContent}/>
        </>
        
    )
}