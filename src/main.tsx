import React from 'react';


class GridLayout extends React.Component {
    constructor(props:any) {
        super(props);
    }
    render() {
        return(
            <div id="wrapper">

                <NavBar />


            </div>

            

            
        )
    }
}



class NavBar extends React.Component {
    constructor(props:any) {
        super(props);
    }
    render() {
        return(   
                  <ul> 
                    <li><a><img src={"./img/LogoMakr-4Ocmnm.png"} ></img></a></li>
                    <li><button type="submit" value="hostroom"></button></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                  
        );
      }
  }

