import React from 'react';

function Welcome(props) {
    return (
        <>
        <div id="container">
                <div id="box"></div>
                <div id="navbar">
                    <a href={"/page1"}><button>Page1</button></a><br/>
                    <a href={"/page2"}><button>Page2</button></a><br/>
                    <a href={"/page3"}><button>Page3</button></a><br/>
                    <a href={"/page4"}><button>Page4</button></a><br/>
                </div>
        </div>
      </>
    );
}

export default Welcome;