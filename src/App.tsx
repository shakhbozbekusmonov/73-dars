import Ichimliklar from './components/Ichimliklar';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';
import Home from './pages/Home';

const App = () => {
    return (
        <>
            <SiteHeader />
            <Ichimliklar/>
            <Home />
            <SiteFooter />
        </>
    );
};

export default App;
