import React from 'react';

const HelloWorld = ({show}) => {

    let title = React.createElement("div",null, null);

    if(show){
        title = React.createElement("h1",{ style: { color: "crimson", textAlign: "center"} },`Hello World`);
    }

    return (React.createElement('div', null, title));
}


export default HelloWorld;