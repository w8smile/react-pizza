import React, {useEffect, useState} from 'react';
import './scss/app.scss';
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock, {PizzaBlockType} from "./components/PizzaBlock";
import axios from "axios";


function App() {
    const [array, setArray] = useState<PizzaBlockType[]>([]);

    useEffect(()=>{
        axios.get<PizzaBlockType[]>('https://662b97cbde35f91de158cbb7.mockapi.io/items')
            .then((res)=>setArray(res.data))
    },[])
    // useEffect(()=>{
    //     axios.get('https://662b97cbde35f91de158cbb7.mockapi.io/items')
    //         .then((res) => setArray(res.data))
    // },[])


    console.log(array)
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories/>
                        <Sort/>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        {array.map((el) => {
                            return (
                                <PizzaBlock
                                    id={el.id}
                                    key={el.id}
                                    name={el.name}
                                    price={el.price}
                                    sizes={el.sizes}
                                    types={el.types}
                                    imageUrl={el.imageUrl}
                                    category={el.category}
                                    rating={el.rating}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
