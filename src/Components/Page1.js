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
        }, 2000);
    }


    return (
        <>
        <div id="container">
            <div id="transitions" onMouseEnter={(e) => {removeText(e)}} onMouseLeave={(e) => {putTextBack(e)}}><center>Hover over me!</center></div>
        </div>
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