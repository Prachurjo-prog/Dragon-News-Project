import BreakingNews from '@/Components/Shared/BreakingNews';
import Header from '@/Components/Shared/Header';
import Navbar from '@/Components/Shared/Navbar';








const MainLayout = ({children}) => {
    return (
        <div>
            <Header/>
            <BreakingNews/>
            <Navbar/>
            
            {children}
        </div>
    );
};

export default MainLayout;