import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import './ConsultForm.css';


export default function ConsultForm(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);


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
       const emailRequest = await fetch('https://kingsware.dev/api/email',
        {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify(emailInfo),
            credentials: 'include'
        });

        const response = (await emailRequest.json());
        console.log(response)
        if (response.emailSent){
            setSuccess(!success);
        }
        else{
           setError(!error);
        }
    }

    function SendEmail(e){
        e.preventDefault();
        const emailDetails = {name, email, category, description};
        SendRequest(emailDetails);
    }//send email data to API

    function ClearForm(){
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('select-menu').value = '';
        document.getElementById('description').value = '';
        setSuccess(!success);
    }
    function CloseError(){
        setError(!error);
    }

    useEffect(() =>{
        if(state != null){
            const selectOption = document.getElementById("select-menu");
            selectOption.value = state //automatically fill category if redirected from home page button
        }
    })
    

    return(
        <>
            {success && 
                <div className="popup-background">
                    <div className="popup-message">
                        <h1 className="popup-header success">Email Successfully Sent!</h1>
                        <p className="popup-description">Expect a response shortly!</p>
                        <button className="popup-button" onClick={ ClearForm }>OK</button>
                    </div>
                </div>
                
            }
            {error &&
                <div className="popup-background">
                    <div className="popup-message">
                        <h1 className="popup-header error">Uh-Oh!</h1>
                        <p className="popup-description">We've encountered an error trying to send your info. <br /> Please try again or contact us at: kingswaredev@gmail.com </p>
                        <button className="popup-button" onClick={ CloseError }>OK</button>
                    </div>
                </div>
                
            }
            <form action="" className="consult-form" onSubmit={ SendEmail }>
                <div className="labels-container">
                    <div>
                        <label htmlFor="Name" className="form-label">Name</label>
                        <input 
                            type="text" 
                            className="form-input normal-input" 
                            id="name"
                            placeholder="Business/Personal Name"
                            onBlur={ NameEntered } required/>
                    </div>
                    <div>
                        <label htmlFor="Email" className="form-label">Email</label>
                        <input 
                            type="email" 
                            className="form-input normal-input"
                            id="email"
                            placeholder="Enter your email"
                            onBlur={ EmailEntered } required/>
                    </div>
                    <div>
                        <label htmlFor="Category" className="form-label">Category</label>
                        <select type="text" className="form-input normal-input select-menu" id="select-menu" onBlur={ CategoryEntered } required>
                            <option value="" className="choose-option">Choose Category</option>
                            <option value="Website">Website</option>
                            <option value="Mobile-App">Mobile Application</option>
                            <option value="Feature Addition">Web/Mobile Feature</option>
                            <option value="Troubleshooting">Troubleshooting</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label htmlFor="Description" className="form-label">Description</label>
                    <textarea 
                        type="text" 
                        className="form-input text-area"
                        id="description"
                        placeholder="Enter Your Business or Personal Name"
                        onBlur={ DescriptionEntered } required/>
                </div>
                <div className="submit-cont">
                    <button  className="submit-form" type="submit">Submit</button>
                </div>
            </form>
        </>
        
    )
}