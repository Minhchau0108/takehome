import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as types from '../constant/constant'
import {getOrders} from './action';
import fetchMock from 'fetch-mock'
import expect from 'expect'
import transformData from '../../utils/transformData'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
    afterEach(() => {
      fetchMock.restore()
    })
    
    const mockResult = [
      {products:
        [
          {
              name: 'WATER CHESTNUT  SLICED CANNED', 
              category: 'DAIRY', 
              product_id: 7,
              order_count: 2,
              vendor_price: {
                  value: 111, 
                  scale: 2
          }}
      ]}
    ]
    
  
    it('dispatch ORDER_REQUEST_SUCCESS when fetching data success',  () =>  {
      fetchMock.getOnce('http://localhost:3001/PurchaseOrders', mockResult)
      
      const expectedActions = [
        { type: types.ORDER_REQUEST, payload: null},
        { type: types.ORDER_REQUEST_SUCCESS, payload: transformData(mockResult)}
      ]
      const store = mockStore({ orders: [], loading: false })
   
      return store.dispatch(getOrders()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
    
  })