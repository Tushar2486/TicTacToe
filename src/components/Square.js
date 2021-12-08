import React from 'react'
import "../App.css";

function Square(props) {
    return (
        <div className="square" onClick={props.chooseSquare}>
            {props.val}
        </div>
    )
}

export default Square
