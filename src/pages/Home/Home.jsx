import Header from "../../components/Header/Header"
import CardInfo from "../../components/CardInfo/CardInfo"
import ExtraCard from "../../components/ExtraCard/ExtraCard"
import atlantic_fitness from '../../assets/atlantic_fitness.png'
import app from '../../assets/app.png'
import './Home.css'

export default function Home(){
    const homeHeader = {currentPage: "Home",
                        page1: {name: "About", link: "/about"},
                        page2: {name: "Consult", link: "/consultation"}}
    return(
        <>
            <Header headerInfo={homeHeader}/>

            <h1 className="section-header">software solutions tailored to your business</h1>
            <div className="cards-container">
                <div className="software-card web-card">
                    <img src={atlantic_fitness} alt="" className="website-pic"/> 
                    <CardInfo cardHeader ={"Fully Responsive Website"}
                            cardDesc={"No matter what your website is being created for, rest assured it will be carefully developed to fit any screen size, have the best SEO and beautiful design."} 
                            buttonName={"Website Consultation"}
                            consultOption={"Website"}/>
                </div>
                <div className="software-card app-card">
                    <CardInfo cardHeader ={"Mobile Application"}
                                cardDesc={"Your mobile app will have a design centered around user friendliness. Easy to use, easy to rely on and easy on the eyes."} 
                                buttonName={"Mobile App Consultation"}
                                consultOption={"Mobile-App"}/>
                    <img src={app} alt="" className="app-pic"/> 
                </div>
            </div>
            
            
            <h1 className="section-header">already have a website or mobile app?</h1>
            <div className="extra-cards">
                <ExtraCard cardIcon={"troubleshoot"}
                           cardHeader={"Web/Mobile App TroubleShooting"}
                           cardDesc={"Having issues with your website or mobile app? Let us fix it for you with our diagnostic test."}
                           cardButton={"Diagnose"} 
                           consultOption={"Troubleshooting"} />

                <ExtraCard cardIcon={"developer_board"}
                           cardHeader={"Feature Development and Intergration"}
                           cardDesc={"Expand your applications horizons by adding new features to make for a better user experience."}
                           cardButton={"Develop a Feature"}
                           consultOption={"Feature Addition"} />
            </div>

        </>
    )
}