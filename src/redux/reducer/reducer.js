import * as types from '../constant/constant'

const initialState = {
	orders: [],
	loading: false
};
const rootReducer = (state= initialState, action) =>{
    const { type, payload } = action;
    switch (type) {
		case types.ORDER_REQUEST:
            return { ...state, loading: true };

        case types.ORDER_REQUEST_SUCCESS:
            return { ...state, orders: payload, loading: false};

        case types.ORDER_REQUEST_FAIL:
            return { ...state, loading: false };
            
        default:
            return state;
    }
}
export default rootReducer;