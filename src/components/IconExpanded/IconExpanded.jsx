
import ReactDom from 'react-dom'
import "./IconExpanded.css"

export default function IconExpanded({expanded, iconRef, onClose}){
    if(!expanded) return null;
    return ReactDom.createPortal(
        <div className="expand-background">
            <div className="expand-content">
                <button className="material-symbols-outlined close" onClick={onClose}>close</button>
                <div className="expand-details">
                    <span className="material-symbols-outlined expand-icon">{iconRef.icon}</span>
                    <h2 className="expand-name">{iconRef.iconName}</h2>
                    <p className="expand-description">{iconRef.iconDesc}</p>
                </div>
            </div>
        </div>,
        document.getElementById('expanded-content')
    );
}