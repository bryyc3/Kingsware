import { Link } from 'react-router-dom'
import './Header.css'

export default function Header({headerInfo}){
    if(headerInfo.currentPage === "About" || headerInfo.currentPage === "Consultation"){
        return(
            <>
                <button className='material--outlined menu'>menu</button>
                <div className="header">
                    <Link to={headerInfo.page1.link} className="side-page-link">{headerInfo.page1.name}</Link>
                    <h1 className="main-title">{headerInfo.currentPage}</h1>
                    <Link to={headerInfo.page2.link} className="side-page-link">{headerInfo.page2.name}</Link>
                </div>

                <div className="sidebar">
                    <Link to={headerInfo.page1.link} className="side-page-link">{headerInfo.page1.name}</Link>
                    <h1 className="main-title">{headerInfo.currentPage}</h1>
                    <Link to={headerInfo.page2.link} className="side-page-link">{headerInfo.page2.name}</Link>
                </div>
            </>
            
        )
    }

    else{
        return(
            <>
                <button className='material-symbols-outlined menu'>menu</button>
                <div className="header">
                    <Link to={headerInfo.page1.link} className="page-link">About</Link>
                    <div className="titles-cont">
                        <h1 className="title">Kingsware</h1>
                        <h2 className="subtitle">Establish your online presence</h2>
                    </div>
                    <Link to={headerInfo.page2.link} className="page-link">Consultation</Link>
                    
                </div>

                <div className="sidebar">
                    <Link to={headerInfo.page1.link} className="side-page-link">{headerInfo.page1.name}</Link>
                    <h1 className="main-title">{headerInfo.currentPage}</h1>
                    <Link to={headerInfo.page2.link} className="side-page-link">{headerInfo.page2.name}</Link>
                </div>
            </>
            
        )
    }
    
}

