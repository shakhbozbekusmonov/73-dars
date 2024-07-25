import LoginForm from '@/components/LoginForm';
import RegisterForm from '@/components/RegisterForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { buttonVariants } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import UserProfile from '@/components/UserProfile';
import VerifyOTPForm from '@/components/VerifyOTPForm';
import { Context as AccountContext } from '@/context/account.provider';
import useProfile from '@/hooks/useProfile';
import { cn } from '@/lib/utils';
import { User } from 'lucide-react';
import { useContext } from 'react';

const Account = () => {
    const { data: user } = useProfile();
    const { isRegister } = useContext(AccountContext);

    if (user) return <UserProfile />;

    return (
        <Dialog>
            <DialogTrigger className={cn(buttonVariants({ size: 'icon' }))}>
                <User />
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Account</DialogTitle>
                    <DialogDescription>
                        Sign in to your account to continue.
                    </DialogDescription>
                </DialogHeader>

                {isRegister ? (
                    <VerifyOTPForm />
                ) : (
                    <Tabs defaultValue="register">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="register">Register</TabsTrigger>
                            <TabsTrigger value="login">Login</TabsTrigger>
                        </TabsList>
                        <TabsContent value="register">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Register</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <RegisterForm />
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="login">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Login</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <LoginForm />
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default Account;
