import React from 'react';


export const Greetname =(props) => {

    console.log(props)
    return (
<div>
    <h1>hi {props.name} a.k.a {props.heroName}</h1>
    {props.children}
</div>

    )
};

