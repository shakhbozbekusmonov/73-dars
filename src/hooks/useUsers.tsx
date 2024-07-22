import { useQuery } from '@tanstack/react-query';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

const useUsers = () =>
    useQuery<User[], Error>({
        queryKey: ['users'],
        queryFn: () =>
            fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
                res.json(),
            ),
    });

export default useUsers;
