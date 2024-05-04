import React, {useEffect, useState} from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock, {PizzaBlockType} from "../components/PizzaBlock";
import {LoadingBlock} from "../components/LoadingBlock";
import axios from "axios";
import ReactPaginate from "react-paginate";
import {Pagination} from "../components/Pagination/Pagination";

type HomeProps = {
    search: string
}

const Home = ({search}: HomeProps) => {
    const [array, setArray] = useState<PizzaBlockType[]>([]);
    const [isLoading, setLoading] = useState(false);
    const [categoryId, setCategoryId] = useState(0)
    const [sortType, setSortType] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    console.log(currentPage)

    useEffect(() => {
        setLoading(false);
        axios.get<PizzaBlockType[]>(`https://662b97cbde35f91de158cbb7.mockapi.io/items?page=${currentPage}&limit=4&${categoryId > 0 ? `category=${categoryId}` : ''}`)
            .then((res) => {
                setArray(res.data);
                setLoading(true)
            });
        window.scroll(0, 0)
    }, [categoryId, currentPage]);
    const pizzas = array
        .filter(item => item.title.toLowerCase().includes(search))
        .map(el => (
            <PizzaBlock
                key={el.id}
                id={el.id}
                title={el.title}
                price={el.price}
                sizes={el.sizes}
                types={el.types}
                imageUrl={el.imageUrl}
                category={el.category}
                rating={el.rating}
            />
        ));
    const skeleton = new Array(8).fill(0).map((_, i) => <LoadingBlock key={i}/>)
    return (
        <>
            <div className="container">
                <div className="content__top">
                    <Categories value={categoryId} onClickCategory={(id: number) => setCategoryId(id)}/>
                    <Sort value={sortType} onClickSortType={(id: number) => setSortType(id)}/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {isLoading
                        ? pizzas
                        : skeleton}
                </div>
                <Pagination currentPage={currentPage}
                            onChangePage={(e) => setCurrentPage(e)}
                />
            </div>
        </>
    );
};

export default Home;