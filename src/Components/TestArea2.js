import React from 'react';
import '../Components/AdditionalCSS/Loader.css';
import { Link } from 'react-router-dom';

function TestArea2(props) {

    return (
        <>
        
<div class="loader" id="loader1"></div>
 <div class="loader" id="loader2"></div>
 <div class="loader" id="loader3"></div>
 <div class="loader" id="loader4"></div> 
        <div>
            <center><Link to={"/"} className="homeLink" id="page4Home"></Link></center>
        </div>
        <br/>
 <div class="loadingBar" id="loadingBar1"></div><br/>
 <div class="loadingBar" id="loadingBar2"></div><br/>
 <div class="loadingBar" id="loadingBar3"></div>
        </>
    );
}

export default TestArea2;