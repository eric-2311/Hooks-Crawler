const defaultState = {
    pos: [0, 0]
}

const knightReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'MOVE_KNIGHT':
            return {...action.payload};
        default:
            return state
    }
}

export default knightReducer;