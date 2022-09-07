import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FeaturedProducts } from './components/FeaturedProducts';
import { Navbar } from './components/Navbar';
import { NewProducts } from './components/NewProducts';
import { NotFound } from './components/NotFound';
import { Order } from './components/Order';
import { Search } from './components/Search';
import { AuthProvider } from './utils/auth';
// import { About } from './pages/About';
import { Home } from './pages/Home';
import { User } from './components/User'
import { UserDetail } from './components/UserDetail';
import { Profile } from './components/Profile';
import { Login } from './components/Login';
import { RequireAuth } from './components/RequireAuth';
const LazyAbout = React.lazy(() => import('./pages/About'))

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={
            <React.Suspense fallback='Loading......'>
              <LazyAbout />
            </ React.Suspense >
          } />
          <Route path='order-confirmed' element={<Order />} />
          <Route path='products' element={<Search />}>
            {/* Which component to show by default */}
            <Route index element={<FeaturedProducts />} />
            <Route path='featured' element={<FeaturedProducts />} />
            <Route path='new' element={<NewProducts />} />
          </Route>
          <Route path='users' element={<User />}>
            <Route path=':userId' element={<UserDetail />} />
          </Route>
          <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>} />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>


      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
