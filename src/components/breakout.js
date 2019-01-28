import React, {Component} from 'react';



class breakOut extends Component {
    render() { 
        return (  
            <React.Fragment>
                <div className="Breakout">
                    <div className="BreakoutText">
                        <h2>Breakout Area</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices nulla purus, nec eleifend augue elementum in. Mauris eu aliquam neque, ac varius lectus. Quisque eget dictum tellus. Quisque metus tellus, interdum in vulputate a, auctor eu lacus. Suspendisse at tellus nec arcu mattis luctus.</p>
                    </div>
                    <div>
                        <img className= "BreakoutImg" src = "https://picsum.photos/600/400"/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default breakOut;