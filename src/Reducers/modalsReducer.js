const initialState = {
    showLogin: false,
    showSignUp: false
}

export default function modalsReducer(state = initialState, action){

    switch(action.type){
        case "TOGGLEIN":
            if(state.showLogin){
                return {
                    ...state,
                    showLogin: false,
                    showSignUp: false
                };
            } else {
                return {
                    ...state,
                    showLogin: true,
                    showSignUp: false
                };
            }
        case "TOGGLEUP":
            if(state.showSignUp){
                return {
                    ...state,
                    showLogin: false,
                    showSignUp: false,
                };
            } else {
                return {
                    ...state,
                    showLogin: false,
                    showSignUp: true,
                };
            }
        case "CLOSEMODAL":
            return {
                ...state,
                showLogin: false,
                showSignUp: false,
            } 
        default:
            return state;   
    }
}