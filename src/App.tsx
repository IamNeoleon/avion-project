import { Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from "react"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './scss/index.scss'

const Home = lazy(() => import('./pages/Home'))
const Products = lazy(() => import('./pages/Products'))
const Product = lazy(() => import('./pages/Product'))
const Cart = lazy(() => import('./pages/Cart'))
const Checkout = lazy(() => import('./pages/Checkout'))
const NotFound = lazy(() => import('./pages/NotFound/NotFound'))

function App() {

    return (
        <>
            <div className="wrapper">
                <Header />
                <div className="content">
                    <Suspense fallback={<div className="loading-screen">Loading...</div>}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/products/:id" element={<Product />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/checkout" element={<Checkout />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Suspense>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default App
