
import { Route, Routes } from 'react-router-dom'
import Products from './pages/Products'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import MainComp from './components/MainComp/MainComp'
import Product from './pages/Product'
import Cart from './pages/Cart'


import './scss/index.scss'


function App() {

    return (
        <>
            <div className="wrapper">
                <Header />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<MainComp />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/products/:id" element={<Product />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </div>
                <Footer />
            </div>

        </>
    )
}

export default App
