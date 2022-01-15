import React from 'react';
import '../index.css';

function Page1(props) {

    function removeText(e){
        e.preventDefault();
        document.getElementById("transitions").innerHTML = " ";
    }

    function putTextBack(e){
        e.preventDefault();
        setTimeout(() => {
            document.getElementById("transitions").innerHTML = "Hover over me!";
            document.getElementById("transitions").style.textAlign = "center";
        }, 2000);
    }


    return (
        <>
        <div id="container">
            <div id="transitions" onMouseEnter={(e) => {removeText(e)}} onMouseLeave={(e) => {putTextBack(e)}}><center>Hover over me!</center></div>
        </div>
        <button id="rotate">Lets rotate!</button>
        <span id="rotateArea">
            <div id="titleArea">3D Area</div><hr/>
            <br/>
            <div id="rotatingSquare">
                <center><a href={"/Page2"}>Enter</a></center>
            </div>
            <span class="spinner rotate"><center></center></span>
        </span>
        <div id="navbar">
        <a href={"/"}><button>Home</button></a><br/>
        <a href={"/Page2"}><button>Page2</button></a><br/>
        <button>Page3</button><br/>
        <button>Page4</button><br/>
      </div>
      </>

);
}

export default Page1;