import React from 'react';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import Footer from '../Pages/Home/Home/Shared/Footer/Footer';
import Navbar from '../Pages/Home/Home/Shared/Navbar/Navbar';
import Bocking from '../Pages/ProductPage/Bocking';

const Main = () => {
    const { openSideModal } = useContext(AuthContext);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-end">
                <input id="bocking_modal_drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
                {
                    openSideModal &&
                    <div className="drawer-side">
                        <label htmlFor="bocking_modal_drawer" className="drawer-overlay"></label>
                        <div className='p-4 w-80 bg-base-100 text-base-content'>
                            <Bocking />
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Main;