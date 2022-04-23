import React from 'react'
import Typed from 'react-typed'

const Header = () => {
    return(
        <div className="header-wrapper">
         <div className="main-info">
             <h1>Architecture & Interior Design</h1>
             <Typed
             className="typed-text"
                strings={[
                    'yui komori',
                    'Search for categories',
                    'Search for brands']}
                    typeSpeed={40}
                    backSpeed={50}
                  
                    loop >
                    
                </Typed>
             <a href="" className="downloandcv" downloadcv>Dowload CV</a>
        </div>   
        
        </div>
    )
}

export default Header 