import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {productListReducer, 
    productDetailsReducer, 
    productDeleteReducer, 
    productCreateReducer, 
    productUpdateReducer,
    productReviewCreateReducer,
    productTopRatedReducer,

} from './reducers/productReducers'
import {cartReducer} from './reducers/cartReducers'
import { userLoginReducer, 
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    userListReducer,
    deleteUserReducer,
    userUpdateReducer,

    } from './reducers/userReducers'
import { orderCreateReducer, 
    orderDetailsReducer, 
    orderPayReducer, 
    orderListMyReducer, 
    orderListReducer,
    orderDeliverReducer,

} from './reducers/orderReducers'

const reducer = combineReducers({
    productList:productListReducer,
    productDetails: productDetailsReducer,
    productDelete : productDeleteReducer,
    productCreate :productCreateReducer,
    productUpdate:productUpdateReducer,
    productReviewCreate:productReviewCreateReducer,
    productTopRated: productTopRatedReducer,

    cart : cartReducer,
    userLogin :userLoginReducer,
    userRegister : userRegisterReducer,
    userDetails : userDetailsReducer,
    userUpdateProfile : userUpdateProfileReducer,
    userList : userListReducer,
    userDelete : deleteUserReducer,
    userUpdate : userUpdateReducer,

    orderCreate: orderCreateReducer,
    orderDetails : orderDetailsReducer,
    orderPay : orderPayReducer,
    orderListMy : orderListMyReducer,
    orderList : orderListReducer,        
    orderDeliver : orderDeliverReducer,
    
})

const cartItemFromStorage = localStorage.getItem('cartItems') ? 
    JSON.parse(localStorage.getItem('cartItems')) : []

    //get the user information from storage, so it saves to their local storage
const userInfoFromStorage = localStorage.getItem('userInfo') ? 
    JSON.parse(localStorage.getItem('userInfo')) : null //in case cannot find user

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? 
    JSON.parse(localStorage.getItem('shippingAddress')) : {}

//pass it into initial state
const initialState = {
     cart: { 
        cartItems: cartItemFromStorage,
        shippingAddress : shippingAddressFromStorage,
    },
     userLogin: { userInfo: userInfoFromStorage },
     
}

const middleware = [thunk]

const store = createStore(reducer,initialState, 
    composeWithDevTools(applyMiddleware(...middleware)))

export default store