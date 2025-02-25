import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Header.css'

export default function Header({headerInfo}){
    const [sidebar, setSidebar] = useState(false);

   

    function showMenu(){
        setSidebar(!sidebar);
    }

    useEffect(() =>{
        const sidebarElement = document.getElementById('sidebarElement');
    
        if(sidebar){
            sidebarElement.style.display = 'block';
        }
        else{
            sidebarElement.style.display = 'none';
        }
    })

    if(headerInfo.currentPage === "About" || headerInfo.currentPage === "Consultation"){
        return(
            <>
                <button className="material-symbols-outlined menu" onClick={ showMenu }>menu</button>
                <div className="header">
                    <Link to={headerInfo.page1.link} className="side-page-link">{headerInfo.page1.name}</Link>
                    <h1 className="main-title">{headerInfo.currentPage}</h1>
                    <Link to={headerInfo.page2.link} className="side-page-link">{headerInfo.page2.name}</Link>
                </div>

                <div className="sidebar" id='sidebarElement'>
                    <button className='material-symbols-outlined close-menu' onClick={ showMenu }>arrow_back</button>
                    <div className="sidebar-links">
                        <Link to={"/"} className="sidebar-link">Home</Link>
                        <Link to={"/about"} className="sidebar-link">About</Link>
                        <Link to={'/consultation'} className="sidebar-link">Consultation</Link>
                    </div>
                </div>
            </>
            
        )
    }

    else{
        return(
            <>
                <button className='material-symbols-outlined menu' onClick={ showMenu }>menu</button>
                <div className="header">
                    <Link to={headerInfo.page1.link} className="page-link">About</Link>
                    <div className="titles-cont">
                        <h1 className="title">Kingsware</h1>
                        <h2 className="subtitle">Establish your online presence</h2>
                    </div>
                    <Link to={headerInfo.page2.link} className="page-link">Consultation</Link>
                    
                </div>

                <div className="sidebar" id='sidebarElement'>
                    <button className='material-symbols-outlined close-menu' onClick={ showMenu }>arrow_back</button>
                    <div className="sidebar-links">
                        <Link to={"/"} className="sidebar-link">Home</Link>
                        <Link to={"/about"} className="sidebar-link">About</Link>
                        <Link to={'/consultation'} className="sidebar-link">Consultation</Link>
                    </div>
                </div>
            </>
            
        )
    }
    
}

