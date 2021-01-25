import * as types from '../constant/constant'
import rootReducer from './reducer'

test('returns default initial state when no action is passed', () => {  
    const initialState = {orders: [],loading: false};
    const newState = rootReducer(initialState, {});
    expect(newState).toEqual(initialState);
});

test('returns loading is true when receiving an action of type `ORDER_REQUEST`', () => {  
    const initialState = {orders: [],loading: false};
    const newState = rootReducer(initialState, {type: types.ORDER_REQUEST});
    expect(newState).toEqual({...initialState, loading: true});
});

test('returns loading is false and orders is an empty array [] when receiving an action of type `ORDER_REQUEST_FAIL`', () => {  
    const initialState = {orders: [],loading: false};
    const newState = rootReducer(initialState, {type: types.ORDER_REQUEST_FAIL});
    expect(newState).toEqual({...initialState, loading: false});
});

test('returns orders not is an empty array [] when receiving an action of type `ORDER_REQUEST_SUCCESS`', () => {  
    const initialState = {orders: [],loading: false};
    const newState = rootReducer(initialState, {type: types.ORDER_REQUEST_SUCCESS});
    const orders = newState.orders;
    expect(orders).not.toEqual([])
});
