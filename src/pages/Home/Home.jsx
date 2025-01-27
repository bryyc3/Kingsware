import Header from "../../components/Header/Header"
import CardInfo from "../../components/CardInfo/CardInfo"
import ExtraCard from "../../components/ExtraCard/ExtraCard"
import atlantic_fitness from '../../assets/atlantic_fitness.png'
import app from '../../assets/app.png'
import './Home.css'

export default function Home(){
    return(
        <>
            <Header currentPage={"home"}
                    page1={"About"}
                    page2={"Consult"}
                    link1={"https://solid-adventure-7v5w965wr54fw6rp-5173.app.github.dev/about"}
                    link2={"https://solid-adventure-7v5w965wr54fw6rp-5173.app.github.dev/consult"}/>

            <h1 className="section-header">software solutions tailored to your business</h1>
            <div className="software-card web-card">
                <img src={atlantic_fitness} alt="" className="website-pic"/> 
                <CardInfo cardHeader ={"Fully Responsive Website"}
                          cardDesc={"No matter what your website is being created for, rest assured it will be carefully developed to fit any screen size, have the best SEO and beautiful design."} 
                          buttonName={"Website Consultation"}/>
            </div>
            <div className="software-card app-card">
                <CardInfo cardHeader ={"Mobile Application"}
                            cardDesc={"Your mobile app will have a design centered around user friendliness. Easy to use, easy to rely on and easy on the eyes."} 
                            buttonName={"Mobile App Consultation"}/>
                <img src={app} alt="" className="app-pic"/> 
            </div>
            
            <h1 className="section-header">already have a website or mobile app?</h1>
            <div className="extra-cards">
                <ExtraCard cardIcon={"troubleshoot"}
                           cardHeader={"Web/Mobile App TroubleShooting"}
                           cardDesc={"Having issues with your website or mobile app? Let us fix it for you with our diagnostic test."}
                           cardButton={"Troubleshoot my app"} />

                <ExtraCard cardIcon={"developer_board"}
                           cardHeader={"Feature Development and Intergration"}
                           cardDesc={"Expand your applications horizons by adding new features to make for a better user experience."}
                           cardButton={"Develop a Feature"}/>
            </div>

        </>
    )
}