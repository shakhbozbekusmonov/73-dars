import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import useProfile from '@/hooks/useProfile';
import { cn } from '@/lib/utils';
import { axiosInstance } from '@/services/api-client';
import { buttonVariants } from './ui/button';

const UserProfile = () => {
    const { data: user, isLoading, error } = useProfile();

    async function logout() {
        try {
            const refreshToken = localStorage.getItem('refresh');
            if (!refreshToken) {
                throw new Error('No refresh token found');
            }

            const res = await axiosInstance.post('/users/logout/', {
                refresh: refreshToken,
            });

            if (res.status === 205) {
                window.localStorage.removeItem('access');
                window.localStorage.removeItem('refresh');
            }
        } catch (error) {
            console.log(error);
        }
    }

    if (isLoading) return <p>Loading...</p>;

    if (error) return <p>Error</p>;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                className={cn(
                    buttonVariants({
                        variant: 'outline',
                    }),
                    'bg-transparent text-white',
                )}
            >
                {(user && user.username) || 'Login'}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserProfile;
