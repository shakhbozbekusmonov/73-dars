import APIClient from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';

interface User {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    username: string;
}

const apiClient = new APIClient<User>('/users/profile/');

const useProfile = () => {
    return useQuery<User, Error>({
        queryKey: ['profile'],
        queryFn: () => apiClient.getAll(),
    });
};

export default useProfile;
