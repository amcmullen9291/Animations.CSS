import React from 'react';

function Page1(props) {
    return (
        <>
        <div id="container">
            <div id="placeholder"></div>
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