import React from 'react'

function Head({val, subVal}) {
    return (
        <div>
            <h4>{val}</h4>
            <p style={{fontSize:'12px'}}>{subVal}</p>
        </div>
    )
}

export default Head
