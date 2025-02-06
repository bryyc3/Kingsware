import { useState } from "react"
import IconExpanded from "../../components/IconExpanded/IconExpanded.jsx"
import "./ExpandableIcon.css"

export default function ExpandableIcon({icon}){
    const[expand, setExpand] = useState(false);
    function expandContent(){
        setExpand(!expand);
    }
    return(
        <>
            <div className="expandable-icon">
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