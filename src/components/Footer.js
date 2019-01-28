import React, { Component } from 'react';


class Foooter extends Component {
   
    render() { 
        return (  
            <React.Fragment>
                <div className="footerheader">
                <h1 className="Heading">MORE PROJECTS</h1>
                <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className="projects">
                <div className="projectTile">
                    <img src = "https://picsum.photos/200/100"/>
                    <h5 className="caption">PROJECT NAME</h5>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className="projectTile">
                    <img src = "https://picsum.photos/200/100"/>
                    <h5 className="caption">PROJECT NAME</h5>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className="projectTile">
                    <img src = "https://picsum.photos/200/100"/>
                    <h5 className="caption">PROJECT NAME</h5>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className="projectTile">
                    <img src = "https://picsum.photos/200/100"/>
                    <h5 className="caption">PROJECT NAME</h5>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Foooter;