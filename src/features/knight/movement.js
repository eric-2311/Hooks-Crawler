import store from '../../config/store';

export default function handleMovement(knight) {
    function getNewPos(dir) {
        const oldPos = store.getState().knight.pos

        switch(dir) {
            case 'LEFT':
                return [oldPos[0] - 100, oldPos[1]];
            case 'RIGHT':
                return [oldPos[0] + 100, oldPos[1]];
            case 'UP':
                return [oldPos[0], oldPos[1] - 50];
            case 'DOWN':
                return [oldPos[0], oldPos[1] + 50];
        }
    }
    
    function moveDir(dir) {
        store.dispatch({
            type: 'MOVE_KNIGHT',
            payload: {
                pos: getNewPos(dir)
            }
        })
    }
    
    function handleKeyDown(e) {
        e.preventDefault();

        switch(e.keyCode) {
            case 37:
                return moveDir('LEFT');
            case 38:
                return moveDir('UP');
            case 39:
                return moveDir('RIGHT');
            case 40:
                return moveDir('DOWN')
        }
    }
    
    window.addEventListener('keydown', e => {
        handleKeyDown(e)
    })

    return knight
}