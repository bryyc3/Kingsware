import Header from "../../components/Header/Header"
import ExpandableIcon from "../../components/ExpandableIcon/ExpandableIcon.jsx"
import "./About.css"

export default function About(){
    let expandDisplay = false;
    let expandedIcon;

    const aboutHeader = {currentPage: "About",
                         page1: {name: "Home", link: "/"},
                         page2: {name: "Consultation", link: "/consultation"}}

    const webIcon = {icon: "computer", iconName: "Website",
                     iconDesc: "Websites support all devices and a great way to get business in motion. No matter how simple or complicated your needs, a website can cover all grounds."};
    const mobileIcon = {icon: "smartphone", iconName: "Mobile App",
                        iconDesc: "An application specifically geared toward mobile users could be the way to go. Easy to access once downloaded on a user's device, but cannot be accessed through a PC."};
    const featureIcon = {icon: "extension", iconName: "Features", 
                         iconDesc: "Software that has already been deployed may need some modifications or updating. Kingsware can turn ideas for a feature into a reality, no matter how complex."};

    function expandIcon(iconObj){
        expandedIcon = iconObj;
        expandDisplay != expandDisplay;
    }

    return(
        <>
            <Header headerInfo={aboutHeader}/>

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
                <ExpandableIcon icon={webIcon} />
                <ExpandableIcon icon={mobileIcon} />
                <ExpandableIcon icon={featureIcon} />
            </div>
            <div id='expanded-content'></div>
        </>
        

        

    )
}