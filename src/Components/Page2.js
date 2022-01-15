import React from 'react';

function Page2(props) {
    return (
        <>
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