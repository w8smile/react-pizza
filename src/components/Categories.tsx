import React, {useState} from 'react';


type CategoriesProps = {
    value: number;
    onClickCategory: (id: number) => void;
}

export const Categories = ({value, onClickCategory}: CategoriesProps) => {

    const arr = ['Все', "Мясные", 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']
    return (
        <div className="categories">
            <ul>
                {arr.map((el,i)=>{
                    return(
                        <li key={i} onClick={()=>onClickCategory(i)} className={value===i ? 'active' : ''}>{el}</li>
                    )
                })}
            </ul>

            {/*<ul>*/}
            {/*    <li onClick={()=>setActiveIndex(0)} className={activeIndex===0 ? 'active' : ''}>Все</li>*/}
            {/*    <li onClick={()=>setActiveIndex(1)} className={activeIndex===1 ? 'active' : ''}>Мясные</li>*/}
            {/*    <li onClick={()=>setActiveIndex(2)} className={activeIndex===2 ? 'active' : ''}>Вегетарианская</li>*/}
            {/*    <li onClick={()=>setActiveIndex(3)} className={activeIndex===3 ? 'active' : ''}>Гриль</li>*/}
            {/*    <li onClick={()=>setActiveIndex(4)} className={activeIndex===4 ? 'active' : ''}>Острые</li>*/}
            {/*    <li onClick={()=>setActiveIndex(5)} className={activeIndex===5 ? 'active' : ''}>Закрытые</li>*/}
            {/*</ul>*/}
        </div>
    );
};

export default Categories;