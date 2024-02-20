import Card from "../Card/Card"
import { useSelector, useDispatch } from 'react-redux';
import { incrementCount, decrementCount, addProduct, removeProduct } from '../../store/counter';




function CardList() {
    
    const products = useSelector((state) => state.products);

    console.log(products)
    const productsCards = () => {
        const productsContent = []
        for(let i in products){
            console.log(products[i])
            if(products[i].id)
                productsContent.push(
                    <Card
                        key={products[i].id}
                        id={products[i].id}
                        name={products[i].title}
                        price={products[i].price}
                        count={products[i].count}
                    />
                )
        }
        return productsContent
    }

    return (
        <div className="block" >
            {productsCards()}
        </div>
    )
}


export default CardList