import { useState } from "react"
import {useDispatch} from "react-redux"
import s from './Card.css'
import {incrementCount, decrementCount, addProduct, removeProduct} from "../../store/productsSlice"




function Card(props) {

    const {name, count, price, id} = props

    const dispatch = useDispatch();
    return (
        <div key={id}
            className="item" 
        >
            <h2>{name}</h2>
            <p>{price}</p>
            <div className="mod">
                <button className="btn" onClick={() => {
                     if(count > 0) {
                        dispatch(decrementCount(id))
                    } else {
                        dispatch(removeProduct(id))
                    }
                }}>-</button>
                <p>{count}</p>
                <button className="btn" onClick={() => dispatch(incrementCount(id))}>+</button>
            </div>
        </div>
    )
}


export default Card