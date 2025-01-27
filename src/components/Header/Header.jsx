import './Header.css'

export default function Header({currentPage, page1, page2, link1, link2}){
    if(currentPage === "About" || currentPage === "Consult"){
        return(
            <div className="header">
                <a href={link1} className="side-page-link">{page1}</a>
                <h1 className="main-title">{currentPage}</h1>
                <a href={link2} className="side-page-link">{page2}</a>
            </div>
        )
    }

    else{
        return(
            <div className="header">
                <a href={link1} className="page-link">About</a>
                <div className="titles-cont">
                    <h1 className="title">Kingsware</h1>
                    <h2 className="subtitle">Establish your online presence</h2>
                </div>
                <a href={link2} className="page-link">Consultation</a>
            </div>
        )
    }
    
}

