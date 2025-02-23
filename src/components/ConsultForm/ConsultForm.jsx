import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import './ConsultForm.css'


export default function ConsultForm(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const location = useLocation();
    const state = location.state;//get category 
    
    function NameEntered(e){
        const nameInput = e.target.value;
        setName(nameInput);
    }
    function EmailEntered(e){
        const emailInput = e.target.value;
        setEmail(emailInput);
    }
    function CategoryEntered(e){
        const categoryInput = e.target.value;
        setCategory(categoryInput);
    }
    function DescriptionEntered(e){
        const descriptionInput = e.target.value;
        setDescription(descriptionInput);
    }

    async function SendRequest(emailInfo){
       const emailRequest = await fetch('https://refactored-garbanzo-4jjq997q597jhjjqw-5000.app.github.dev/',
        {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify(emailInfo)
        });

        const response = (await emailRequest.json());

        if (response.emailSent){
            //clear input values
            //let user know I was notified
        }
        else{
            //display error
        }
    }

    function SendEmail(e){
        e.preventDefault();
        const emailDetails = {name, email, category, description}
        SendRequest(emailDetails);
    }//send email data to API

    useEffect(() =>{
        if(state != null){
            const selectOption = document.getElementById("select-menu");
            selectOption.value = state //automatically fill category if redirected from home page button
        }
    })
    

    return(
        <form action="" className="consult-form" onSubmit={ SendEmail }>
            <div className="labels-container">
                <div>
                    <label htmlFor="Name" className="form-label">Name</label>
                    <input 
                        type="text" 
                        className="form-input normal-input" 
                        placeholder="Business/Personal Name"
                        onBlur={ NameEntered } required/>
                </div>
                <div>
                    <label htmlFor="Email" className="form-label">Email</label>
                    <input 
                        type="email" 
                        className="form-input normal-input"
                        placeholder="Enter your email"
                        onBlur={ EmailEntered } required/>
                </div>
                <div>
                    <label htmlFor="Category" className="form-label">Category</label>
                    <select type="text" className="form-input normal-input select-menu" id="select-menu" onBlur={ CategoryEntered } required>
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
                <textarea 
                    type="text" 
                    className="form-input text-area" 
                    placeholder="Enter Your Business or Personal Name"
                    onBlur={ DescriptionEntered } required/>
            </div>
            <div className="submit-cont">
                <button  className="submit-form" type="submit">Submit</button>
            </div>
        </form>
    )
}