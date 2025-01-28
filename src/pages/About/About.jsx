import "./About.css"
import Header from "../../components/Header/Header"
import ExpandableIcon from "../../components/ExpandableIcon/ExpandableIcon.jsx"

export default function About(){
    return(
        <>
            <Header currentPage={"About"}
                    page1={"Home"}
                    page2={"Consult"}
                    link1={"https://jubilant-doodle-g44xwwqxj7v6396rp-5173.app.github.dev/"}
                    link2={"https://jubilant-doodle-g44xwwqxj7v6396rp-5173.app.github.dev/"}/>

            <h1 className="about-header">Helping businesses strive for greatness</h1>
            <p className="about-description">
                A business's digital presence is a leading contributor of its success. 
                Kingsware aims to not only offer a solution to any software concerns,
                but to provide a service that will ultimately help your business positively 
                develop, scale and thrive.
            </p>
            <h1 className="about-header">How we help</h1>
            <p className="about-description">
                At Kingsware we center our projects around building websites and mobile applications,
                but we do not limit ourselves. Whatever you need done, we will accomplish.
            </p>
            <div className="icons-container">
                <ExpandableIcon icon={"computer"}
                                iconName={"Website"}/>
                <ExpandableIcon icon={"smartphone"}
                                iconName={"Mobile App"}/>
                <ExpandableIcon icon={"extension"}
                                iconName={"Features"}/>
            </div>
        </>
        

        

    )
}