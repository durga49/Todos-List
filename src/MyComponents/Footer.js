import React from 'react'

export const Footer = () => {
    let footerStyle ={
        position: "relative",
        top: "100vh",
        width: "100%"
    }
    return (
        <footer className="bg-dark text-light py=2 text-center" style={footerStyle}>
            <p className="text-center">
                Copyright &copy; TodoList.com
            </p>
        </footer>
    )
}
