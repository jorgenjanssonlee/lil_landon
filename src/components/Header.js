import React, { useState, useEffect } from 'react';
// import menuLinksData from './data/menu_links.json';

const Header = () => {
  const [menuLinksData, setMenuLinksData] = useState([]);

  const loadMenuLinksData = async () => {
    // query API
    const resp = await fetch('https://4v52zuihx2.execute-api.ap-southeast-2.amazonaws.com/Production/menulinks');
    let jsonData = await resp.json();

    // set state variable (menuLinksData) with the response
    setMenuLinksData(jsonData);
    
  };
  
    useEffect(() => {
    // Fetch the menu links data from the API gateway
    loadMenuLinksData();
  }, []);



    return (
        <header id="intro">
          <article className="fullheight">
            <div className="hgroup">
              <h1>Landon Hotel</h1>
              <h2>West London</h2>
              <p><a href="#welcome"><img src="https://landonhotel.com/images/misc/arrow.png" alt="down arrow" /></a></p>
            </div>
          </article>

          <nav id="nav">
            <div className="navbar">
              <div className="brand"><a href="#welcome">Landon <span>Hotel</span></a></div>
              <ul>
                {
                  menuLinksData.map((link) => 
                    <li><a className={`icon ${link.class}`} href={link.href}><span>{link.text}</span></a></li>
                  )
                }
              </ul>
            </div>
          </nav>
        </header>
    );
}

export default Header;