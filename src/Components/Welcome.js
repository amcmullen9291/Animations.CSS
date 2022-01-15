import React from 'react';

function Welcome(props) {
    return (
        <>
        <div class="topnav">
            <span class="active"></span>
            <a href="/testArea"></a>
            <a href="/testArea2"></a>
            <a href="/testArea3"></a><br/>
        </div>
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