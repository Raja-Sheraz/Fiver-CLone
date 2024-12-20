import { store } from '../store.js'
import { ADD_ORDER, SET_ORDERS, UPDATE_ORDER } from "./order.reducer.js";
import { orderService } from "../../services/order.service.js";
import { socketService, SOCKET_EVENT_ORDER_ADDED } from '../../services/socket.service.js';

export function getActionAddOrder(order) {
    return {
        type: ADD_ORDER,
        order
    }
}
export function getActionUpdateOrder(order) {
    return {
        type: UPDATE_ORDER,
        order
    }
}

export async function loadOrders(userId) {
    try {
        const orders = await orderService.query(userId)
        store.dispatch({
            type: SET_ORDERS,
            orders
        })
    } catch (err) {
        console.log('Cannot load orders', err)
        throw err
    }
}

export async function addOrder(order) {
    try {
        const savedOrder = await orderService.save(order)
        socketService.emit(SOCKET_EVENT_ORDER_ADDED, order)
        store.dispatch(getActionAddOrder(savedOrder))
        return savedOrder
    } catch (err) {
        console.log('Cannot add order', err)
        throw err
    }
}

export function updateOrder(order) {
    return orderService.save(order)
        .then(savedOrder => {
            console.log('Updated order:', savedOrder)
            store.dispatch(getActionUpdateOrder(savedOrder))
            return savedOrder
        })
        .catch(err => {
            console.log('Cannot save order', err)
            throw err
        })
}