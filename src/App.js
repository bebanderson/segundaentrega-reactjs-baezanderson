import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from './Contexts/CartContext';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemList/ItemListContainer';
import HomeSection from './Components/Pages/HomeSection';
import ContactSection from './Components/Pages/ContactSection';
import SuccessOrder from './Components/Pages/SuccessOrder';
import Cart from './Components/Cart';
import NotFound from './Components/Pages/NotFound';
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';
import ProductsContextProvider from './Contexts/ProductsContext';
import FavoriteContextProvider from './Contexts/FavoriteContext';
import CategoryContextProvider from './Contexts/CategoryContext';
import AdminSectionContainer from './Components/Pages/AdminSection/AdminSectionContainer';
import Footer from './Components/Footer';


function App() {

  return (
    <ProductsContextProvider>
      <CategoryContextProvider>
        <CartContextProvider className="App">
          <FavoriteContextProvider>
              <BrowserRouter>
                <NavBar />  
                <div className='sectionContainer' style={{minHeight:"80vh"}}>  
                  <Routes>
                    <Route exact path='/' element={<HomeSection />} />
                    <Route exact path='/productos' element={<ItemListContainer/>} />
                    <Route exact path='/categoria/:idCategory' element={<ItemListContainer/>} />
                    <Route exact path='/producto/:idItem' element={<ItemDetailContainer/>} />
                    <Route exact path='/contacto' element={<ContactSection />} />
                    <Route exact path='/cart' element={<Cart />} />
                    <Route exact path='/admin' element={<AdminSectionContainer />} />
                    <Route exact path='/success/:idOrder' element={<SuccessOrder />} />
                    <Route path="*" element={<NotFound/>} />
                  </Routes>
                </div>
                <Footer/>
              </BrowserRouter>
          </FavoriteContextProvider>
        </CartContextProvider>
      </CategoryContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
