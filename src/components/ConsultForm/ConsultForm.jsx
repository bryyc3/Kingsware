import { useLocation } from "react-router-dom";
import './ConsultForm.css'
import { useEffect } from "react";

export default function ConsultForm(){
    const location = useLocation();
    const state = location.state;
    console.log(state);
    
    useEffect(() =>{
        if(state != null){
            const selectOption = document.getElementById("select-menu");
            selectOption.value = state
        }
    })
    

    return(
        <form action="" className="consult-form">
            <div className="labels-container">
                <div>
                    <label htmlFor="Name" className="form-label">Name</label>
                    <input type="text" className="form-input normal-input" required/>
                </div>
                <div>
                    <label htmlFor="Email" className="form-label">Email</label>
                    <input type="email" className="form-input normal-input" required />
                </div>
                <div>
                    <label htmlFor="Category" className="form-label">Category</label>
                    <select type="text" className="form-input normal-input select-menu" id="select-menu" required>
                        <option value="" className="choose-option">Choose Category</option>
                        <option value="website">Website</option>
                        <option value="app">Mobile Application</option>
                        <option value="feature">Web/Mobile Feature</option>
                        <option value="troubleshooting">Troubleshooting</option>
                    </select>
                </div>
            </div>
            <div>
                <label htmlFor="Description" className="form-label">Description</label>
                <textarea type="text" className="form-input text-area" required/>
            </div>
            <div className="submit-form-cont">
                <input className="submit-form" type="submit" value="Submit"/>
            </div>
        </form>
    )
}