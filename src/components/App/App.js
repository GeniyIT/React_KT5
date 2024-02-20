// import { useState } from "react"
import BlockCard from '../CardList/CardList'
import AddItem from '../AddItem/AddItem'
import { useState } from 'react'
import {useDispatch} from "react-redux"
import {addProduct} from "../../store/productsSlice"
function App() {

    const dispatch = useDispatch()



    function newItem() {
        let product = prompt()
        let count = prompt()
        let products = product.split(' ')
        let newProduct = {
            id: Date.now(),
            name: products[0],
            count: count
        }
        console.log(newProduct)

        dispatch(addProduct(newProduct))
    }



    return (
        
        <div>
            <AddItem newItem={newItem}/>
            <BlockCard/>
        </div>
    )
}

export default App


