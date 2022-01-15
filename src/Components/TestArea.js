import React from 'react';
import { Link } from 'react-router-dom';
import './AdditionalCSS/MoreStyling.css';

function TestArea(props) {
    return (
        <>
        <div>
            <center><Link to={"/"} className="homeLink"></Link></center>
        </div>
        <br/>
        <div id="oneSideGradient">"A One sided conic gradient border"</div>
        <hr/>
        <div id="hoppingtext">
            <div className="hop">
                <span>H</span>
                <span>E</span>
                <span>L</span>
                <span>L</span>
                <span>O</span>
                <span>.</span>
            </div>
        </div>
        </>        
    );
}

export default TestArea;