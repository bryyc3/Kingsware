import "./ExpandableIcon.css"

export default function ExpandableIcon({icon, iconName}){
    return(
        <div className="expandable-icon">
            <span className="material-symbols-outlined expand">expand_content</span>
            <div className="icon-container">
                <span className="material-symbols-outlined icon ">{icon}</span>
            </div>
            <h2 className="icon-name">{iconName}</h2>
        </div>
    )
}