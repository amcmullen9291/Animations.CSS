import React from 'react';

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
            <div>Rotate Area</div><hr/>
            <div>demo area</div>
        </span>
        <div id="navbar">
        <a href={"/"}><button>Home</button></a><br/>
        <button>Page2</button><br/>
        <button>Page3</button><br/>
        <button>Page4</button><br/>
      </div>
      </>

);
}

export default Page1;