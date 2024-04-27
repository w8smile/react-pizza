import React, {useState} from 'react';

export type PizzaBlockType = {
    id: number,
    name: string,
    price: number,
    sizes: number[],
    types: number[],
    imageUrl: string,
    category: number,
    rating: number
}

export const PizzaBlock = ({name, price, sizes, types,imageUrl}: PizzaBlockType) => {
    const [count, setCount] = useState(0)
    const [activeType, setActiveType] = useState<number>(0)
    const [activeSize, setActiveSize] = useState<number>(0)
    const typesArr = ['традиционное', 'тонкое']
    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {types && types.map((el)=><li key={el} className={activeType===el ? 'active' : ''} onClick={()=>setActiveType(el)}>{typesArr[el]}</li>)}
                </ul>
                <ul>
                    {sizes && sizes.map((el, i)=><li key={i} className={activeSize===i ? 'active' : ''} onClick={()=>setActiveSize(i)}>{el}</li>)}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <div onClick={() => setCount(count + 1)} className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    <i>{count}</i>
                </div>
            </div>
        </div>
    );
};

export default PizzaBlock;