import React, {useState} from 'react';
import './scss/app.scss';
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound/NotFound";
import {Route, Routes} from "react-router-dom";
import Cart from "./pages/Cart";


function App() {
    const [search, setSearch] = useState('');
    console.log(search);

    // useEffect(()=>{
    //     axios.get('https://662b97cbde35f91de158cbb7.mockapi.io/items')
    //         .then((res) => setArray(res.data))
    // },[])

    return (
        <div className="wrapper">
            <Header search={search} setSearch={setSearch} />
            <div className="content">
                    <Routes>
                        <Route path="/" element={<Home search={search} />}/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>

                </div>
            </div>
    );
}

export default App;
