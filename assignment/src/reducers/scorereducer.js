const scorereducer = function scorereducer(state = null, action) {

    switch (action.type) {
        case "SCORE_BUTTON_CLICKED":
            return action.payload;
        default:
            break;
    }
    return state
}



export default scorereducer