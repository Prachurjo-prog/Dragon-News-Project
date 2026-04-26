import BreakingNews from '@/Components/Shared/BreakingNews';
import Header from '@/Components/Shared/Header';








const MainLayout = ({children}) => {
    return (
        <div>
            <Header/>
            <BreakingNews/>
            
            {children}
        </div>
    );
};

export default MainLayout;