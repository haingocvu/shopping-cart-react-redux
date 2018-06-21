import * as Message from "./../constants/Message";
import * as ActionType from "./../constants/ActionType";

let initialState = Message.MSG_WELCOME;
const message = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.CHANGE_MESSAGE:
            return action.message;
        default:
            return state;
    }
}

export default message;