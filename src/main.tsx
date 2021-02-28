import React from 'react';

import './main.css';

export class GridLayout extends React.Component {
    constructor(props:any) {
        super(props);
    }
    render() {
        return(
            <div id="wrapper">

                <NavBar />
                <Main date={date()}/>


            </div>

            

            
        )
    }
}

let date = () => {
    return Date();
}


class NavBar extends React.Component {
    constructor(props:any) {
        super(props);
    }
    render() {
        return(   
                  <nav>
                    <div className="logo"><a href="#"><img id="logo" src={"./img/LogoMakr-4Ocmnm1.png"} ></img></a></div>
                    <div className="div2"><button className="hostroom" type="submit" value="hostroom">Host Room</button></div>
                    <div className="div3"><button className="joinroom" type="submit" value="joinroom">Join Room</button></div>
                    <div className="div4"><button id="newnote" className="newnote" type="submit" value="newnote">New Note</button></div>
                  </nav>
                  
        );
      }
  }



 
  const Main = (props: any) => {

        


        return(
            <main>
                <div id="colours">
                    <a href="1"><div id="circle1"></div></a>
                    <a href="2"><div id="circle2"></div></a>
                    <a href="3"><div id="circle3"></div></a>
                    <a href="4"><div id="circle4"></div></a>
                    <a href="5"><div id="circle5"></div></a>
                    <a href="6"><div id="circle6"></div></a>
                    <a href="7"><div id="circle7"></div></a>
                </div>
                <div id="notes">
                    <div id="note">
                        <h6>{props.date}</h6>
                        <p id="content">the start of your note would go here to remind you what you wrote...</p>
                        <div id="butt">
                            <a href="#"><button type="button" value="edit">edit</button></a>
                            <a href="/*"><button type="button" value="delete">delete</button></a>
                        </div>
                    </div>
                </div>
            </main>
            );
    
  }
