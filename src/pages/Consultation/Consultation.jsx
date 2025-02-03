import Header from "../../components/Header/Header"
import ConsultForm from "../../components/ConsultForm/ConsultForm"
import "./Consultation.css"

export default function Consultation(){
    return(
        <>
            <Header currentPage={"Consultation"}
                                page1={"Home"}
                                page2={"About"}
                                link1={"http://localhost:5173/"}
                                link2={"http://localhost:5173/About"}/>
            
            <p className="consult-message">provide your business/personal name, email and details about the consultation</p>
            <ConsultForm />
        </>
    )
}