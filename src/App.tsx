import useUsers from './hooks/useUsers';

const App = () => {
    const { data: users, error, isLoading } = useUsers();

    if (error) return <p>{error.message}</p>;

    if (isLoading) return <p>Loading...</p>;

    return (
        <>
            <ul>{users?.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
        </>
    );
};

export default App;
