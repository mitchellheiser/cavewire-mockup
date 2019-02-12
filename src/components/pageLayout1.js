import React, {Component} from 'react';

class section1 extends Component {

    render() { 
        return (<React.Fragment>

            <div className="catch">
                <h1 className="Heading">PROJECT NAME</h1>
                <h5>SERVICE OFFERING <span className= "cursive">FOR</span> CLIENT NAME</h5>
                <p className= "description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla elementum erat sit amet erat tincidunt, et imperdiet ipsum volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam pellentesque tellus eros, sollicitudin suscipit lacus lacinia eu. Quisque accumsan dapibus libero, a faucibus ligula convallis nec. Nullam vehicula velit in fermentum tempus. Donec sollicitudin quam et velit suscipit suscipit. Etiam sit amet lacus pellentesque, porta nulla vitae, vestibulum metus.</p>
                <a className="cwLink" href='http://www.cavewire.com/about-us.php'>Vist Link</a>
            </div>
            <div>
                <img className="Image1" src="https://picsum.photos/800/350"/>
            </div>
            <div className="blurb">
                <h3 className="subHeading">Blurb</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus convallis diam, sit amet tristique purus feugiat in. Mauris tellus dui, efficitur tempor orci ac, eleifend laoreet odio. Vivamus vel urna eu massa viverra scelerisque sed eu elit. Sed non commodo nibh, eu posuere risus.</p>

            </div>
            <div className="imageGrid">
                <div><img  className= "img1" src = "https://picsum.photos/800/365"/></div>
                <div><img  className= "img2" src="https://picsum.photos/395/500"/></div>
                <div><img  className= "img3" src="https://picsum.photos/395/500"/></div>
            </div>
            </React.Fragment>
         );
    }
}
 
export default section1 ;

