import Ichimliklar from './components/Ichimliklar';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';
import Home from './pages/Home';
import useUsers from './hooks/useUsers';

const App = () => {
    const { data: users, error, isLoading } = useUsers();

    if (error) return <p>{error.message}</p>;

    if (isLoading) return <p>Loading...</p>;

    return (
        <>
            <SiteHeader />
            <Ichimliklar/>
            <Home />
            <SiteFooter />
        

            <ul>{users?.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
        </>
    );
};

export default App;
