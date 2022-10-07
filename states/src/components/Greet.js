import React from 'react'

// const Greet = (props,{name,heroName}) => {
    const Greet = (props) => {
        const{name,heroName} = props
  return (
    <div>
    <h1>hi {name} a.k.a {heroName}</h1>
    {props.children}
</div>
  )
}

export default Greet