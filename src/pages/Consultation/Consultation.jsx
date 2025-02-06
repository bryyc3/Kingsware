import Header from "../../components/Header/Header"
import ConsultForm from "../../components/ConsultForm/ConsultForm"
import "./Consultation.css"

export default function Consultation(){
    const consultHeader = {currentPage: "Consultation",
                           page1: {name: "Home", link: "/"},
                           page2: {name: "About", link: "/about"}}
    
    return(
        <>
            <Header headerInfo={consultHeader}/>
            
            <p className="consult-message">provide your business or personal name, email and details about the consultation</p>
            <ConsultForm />
        </>
    )
}