import './ConsultForm.css'

export default function ConsultForm(){
    return(
        <form action="" className="consult-form">
            <div className="labels-container">
                <div>
                    <label htmlFor="Name" className="form-label">Name</label>
                    <input type="text" className="form-input normal-input"/>
                </div>
                <div>
                    <label htmlFor="Email" className="form-label">Email</label>
                    <input type="email" className="form-input normal-input"/>
                </div>
                <div>
                    <label htmlFor="Category" className="form-label">Category</label>
                    <input type="text" className="form-input normal-input"/>
                </div>
            </div>
            <div>
                <label htmlFor="Description" className="form-label">Description</label>
                <input type="text" className="form-input large-input"/>
            </div>
            <div className="submit-form-cont">
                <input className="submit-form" type="submit" value="Submit"/>
            </div>
        </form>
    )
}