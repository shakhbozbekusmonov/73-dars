<<<<<<< HEAD
import Ichimliklar from './components/Ichimliklar';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';
import Home from './pages/Home';
import useUsers from './hooks/useUsers';
=======
import SiteHeader from './components/SiteHeader';
>>>>>>> fa2fd532045c210ff134eed5d42c45f5798cc870

const App = () => {
    return (
        <>
            <SiteHeader />
<<<<<<< HEAD
            <Ichimliklar/>
            <Home />
            <SiteFooter />
        

            <ul>{users?.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
=======
>>>>>>> fa2fd532045c210ff134eed5d42c45f5798cc870
        </>
    );
};

export default App;
