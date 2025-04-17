import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './navbar.jsx'
import Publicity from './publicity.jsx'
import Head1 from './flashsales.jsx'
import Flashsalesproducts from './fsproducts.jsx'
import Head2 from './Head2.jsx'
import Products1 from './ourproduct.jsx'
import Head3 from './Head3.jsx'
import Best from './best.jsx'
import CategorySection from './Browsebycategory/Browsebycategory.jsx'
import NewArrival from './Newarrival/Newarrival.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Publicity />
    <Head1 />
    <Flashsalesproducts />
    <CategorySection />
    <Head3 />
    <Best />
    <Head2 />
    <Products1 />
    <NewArrival />
  </StrictMode>,
)
