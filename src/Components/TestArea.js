import React from 'react';
import { Link } from 'react-router-dom';

function TestArea(props) {
    return (
        <>
        <div>
            <center><Link to={"/"} className="homeLink"></Link></center>
        </div>
        <br/>
        <div id="oneSideGradient">"A One sided conic gradient border"</div>
        </>        
    );
}

export default TestArea;