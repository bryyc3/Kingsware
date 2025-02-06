
import ReactDom from 'react-dom'
import "./IconExpanded.css"

export default function IconExpanded({expanded, iconRef, onClose}){
    if(!expanded) return null;
    return ReactDom.createPortal(
        <div className="expand-background">
            <button className="material-symbols-outlined close" onClick={onClose}>close</button>
            <span className="material-symbols-outlined expand-icon">{iconRef.icon}</span>
            <h2 className="expand-name">{iconRef.iconName}</h2>
            <p className="expand-description">{iconRef.iconDesc}</p>
        </div>,
        document.getElementById('expanded-content')
    );
}