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
        <div class="dot"></div>
 <div class="loadingBar" id="loadingBar1">
     <span></span>
</div><br/>
 <div class="loadingBar" id="loadingBar2"></div><br/>
 <div class="loadingBar" id="loadingBar3"></div>
 <div class="stage">
    <div class="box bounce-1"></div>
    <div class="box bounce-2"></div>
    <div class="box bounce-3"></div>
    <div class="box bounce-4"></div>
    <div class="box bounce-5"></div>
</div>
        </>
    );
}

export default TestArea2;