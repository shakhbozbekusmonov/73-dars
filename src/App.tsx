import useSWR from 'swr';

interface User {
    id: number;
    name: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const App = () => {
    const {
        data: users,
        error,
        isLoading,
    } = useSWR('https://jsonplaceholder.typicode.com/users', fetcher);

    if (error) return <p>{error.message}</p>;

    if (isLoading) return <p>Loading...</p>;

    return (
        <>
            <ul>
                {users.map((user: User) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    );
};

export default App;
