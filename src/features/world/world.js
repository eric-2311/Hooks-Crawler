import React from 'react';
import Knight from '../knight/knight';
import Map from '../map/map'

function World(props) {
    return (
        <div
        style={{
            position: 'relative',
            width: '1000px',
            height: '700px',
            margin: '20px auto'
        }}>
            <Map/>
            <Knight/>
        </div>
    )
}

export default World;