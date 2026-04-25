import Header from '@/Components/Shared/Header';
import Navbar from '@/Components/Shared/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <div>
            <Header/>
            
            {children}
        </div>
    );
};

export default MainLayout;