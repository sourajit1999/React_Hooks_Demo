import React from 'react'

const Header = ({name}) => {
    return (
        <>
            <h1>Child header Component</h1>
            <p>Prop is {name}</p>
        </>
    )
}

export default Header
