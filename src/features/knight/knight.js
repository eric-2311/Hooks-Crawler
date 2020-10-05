import React from 'react';
import knightWalk from './noBKG_KnightRun_strip.png'
import { connect } from 'react-redux';

function Knight(props) {
    return (
        <div
            style={{
                position: 'relative',
                top: props.pos[1],
                left: props.pos[0],
                backgroundImage: `url('${knightWalk}')`,
                backgroundPosition: '0 0',
                width: '100px',
                height: '50px'
            }}
        />
    )
}

function mSTP(state) {
    return {
        ...state.knight
    }
}

export default connect(mSTP)(Knight)