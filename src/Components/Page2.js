import React from 'react';
import './AdditionalCSS/MoreStyling.css';

function Page2(props) {
    return (
        <>
        <div id="hoppingtext">
          <div className="hop">
              <span>H</span>
              <span>E</span>
              <span>L</span>
              <span>L</span>
              <span>O</span>
              <span>.</span>
          </div>
        </div>
        <div id="wavytext">
          <div className="wavy">
              <span>H</span>
              <span>E</span>
              <span>L</span>
              <span>L</span>
              <span>O</span>
              <span>.</span>
              <span>.</span>
              <span>.</span>
          </div>
        </div>
        <div id="navbar">
        <a href={"/Page1"}><button>Page1</button></a><br/>
        <a href={"/"}><button>Home</button></a><br/>
        <a href={"/Page3"}><button>Page3</button></a><br/>
        <a href={"/Page4"}><button>Page4</button></a><br/>
      </div>
        </>
    );
}

export default Page2;