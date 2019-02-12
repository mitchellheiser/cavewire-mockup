import React, { Component } from 'react';

class pageLayout2 extends Component {
    render() { 
        return ( 
            <React.Fragment>
            <div className="Header2">
                <h1 className="Heading">MORE LAYOUTS</h1>
            </div>
            <div>
                <img className="Image1" src="https://picsum.photos/800/350"/>
            </div>
            <div className="blurb">
                <h3 className="subHeading">Blurb</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus convallis diam, sit amet tristique purus feugiat in. Mauris tellus dui, efficitur tempor orci ac, eleifend laoreet odio. Vivamus vel urna eu massa viverra scelerisque sed eu elit. Sed non commodo nibh, eu posuere risus.</p>

            </div>
            <div className="imageGrid2">
                <div><img  className="img4"  src = "https://picsum.photos/650/340"/></div>
                <div>
                    <h3 className="caption">Image Caption</h3>
                    <p className="imgText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
                <div><img className="img5"   src="https://picsum.photos/320/400"/></div>
                <div>
                    <h3 className="caption">Image Caption</h3>
                    <p className="imgText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                <div><img className="img6"   src="https://picsum.photos/320/400"/></div>
                <div>
                    <h3 className="caption">Image Caption</h3>
                    <p className="imgText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
            </div>
            </React.Fragment>
         );
    }
}
 
export default pageLayout2;