import React from 'react';

function Welcome(props) {
    return (
        <>
        <div id="container">
            <div id="box"></div>
        </div>
        <div id="navbar">
        <a href={"/page1"}><button>Page1</button></a><br/>
        <button>Page2</button><br/>
        <button>Page3</button><br/>
        <button>Page4</button><br/>
      </div>
      </>
    );
}

export default Welcome;