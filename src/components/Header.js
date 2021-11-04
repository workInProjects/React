import React from "react"
import './Header.css'

function Header() {
    return (
        <div className="header">
         
            <img
              className="header__logo"
              src="https://lizasenglish.ru/wp-content/uploads/2016/09/Tests.png"
            />
          <div className="header__search">
           
           
            <h1 className="header__searchIcon" />
          </div>
    
          <div className="header__nav">
           
              <div className="header__option">
                <span className="header__optionLineOne">Hello</span>
                <span className="header__optionLineTwo">Sing In</span>
              </div>
           
              <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
              </div>
           
    
            <div className="header__option">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTwo">Prime</span>
            </div>
    
           
              <div className="header__optionBasket">
               
                <span className="header__optionLineTwo header__basketCount">
                 
                </span>
              </div>
            
          </div>
        </div>
      );
    }

export default Header;