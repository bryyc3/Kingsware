import Header from "../../components/Header/Header"
import "./Consultation.css"

export default function Consultation(){
    return(
        <>
            <Header currentPage={"Consultation"}
                                page1={"Home"}
                                page2={"About"}
                                link1={"https://fictional-barnacle-q77vggqvjx9934774-5173.app.github.dev/"}
                                link2={"https://fictional-barnacle-q77vggqvjx9934774-5173.app.github.dev/About"}/>
            
            <p className="consult-message">For a free consultation provide your business/personal name, email and details about the consultation</p>
            <form action="">
                <li>Name</li>
                <li>Name</li>
                <li>Name</li>
                <li>Name</li>
            </form>
        </>
    )
}