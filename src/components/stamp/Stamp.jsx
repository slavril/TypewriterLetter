import React, { useState, useEffect, useContext } from 'react';
import './Stamp.scss';

export const stamp_type = {
    red: 1,
    green: 2,
    black: 3,
    grey: 0
}

function Stamp(props) {
    useEffect(() => {
    }, [])

    const stampClassName = () => {
        switch (props.children.type) {
            case stamp_type.red:
                return "stamp is-nope"
            case stamp_type.green:
                return "stamp is-approved"
            case stamp_type.black:
                return "stamp"
            default:
                return "stamp is-draft"
        }
    }

    const text = () => {
        return props.children.text || 'NONE'
    }

    return (
        <div className="body-all">
            <span className={stampClassName()}>{text()}</span>
        </div>
    )
}

Stamp.propTypes = {

}

export default Stamp