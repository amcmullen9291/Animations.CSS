import React from 'react';

function Page3(props) {
    return (
        <>
        <br/>
        <div id="oneSideGradient">"A One sided conic gradient border"</div>
        <br/>
        <div id="navbar">
            <a href={"/Page1"}><button>Page1</button></a><br/>
            <a href={"/Page2"}><button>Page2</button></a><br/>
            <a href={"/"}><button>Home</button></a><br/>
            <a href={"/Page4"}><button>Page4</button></a><br/>        
        </div>
        </>
    );
}

export default Page3;