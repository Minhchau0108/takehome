import * as types from '../constant/constant'
import transformData from '../../utils/transformData'


export const getOrders = () => async (dispatch)=>{
    dispatch({type: types.ORDER_REQUEST, payload: null});
    try{
        let response = await fetch(`http://localhost:3001/PurchaseOrders`);
        let data = await response.json();
        console.log('data', data)
        data = transformData(data)
        dispatch({type: types.ORDER_REQUEST_SUCCESS, payload: data})
    }
    catch(error){
        dispatch({type: types.ORDER_REQUEST_FAIL, payload: error})
    }
}

