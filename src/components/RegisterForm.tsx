import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Context as AccountContext } from '@/context/account.provider';
import axios from 'axios';
import { useContext } from 'react';

const formSchema = z.object({
    username: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
    }),
    email: z
        .string()
        .min(1, { message: 'Email is required.' })
        .email({ message: 'Invalid email address.' }),
    password: z
        .string()
        .min(1, { message: 'Password is required.' })
        .min(8, { message: 'Password must be at least 8 characters.' }),
    confirm_password: z
        .string()
        .min(1, { message: 'Confirm password is required.' })
        .min(8, { message: 'Password must be at least 8 characters.' }),
});

type FormValues = z.infer<typeof formSchema>;

const RegisterForm = () => {
    const { changeRegister } = useContext(AccountContext);
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    });

    async function onSubmit(values: FormValues) {
        try {
            const res = await axios.post(
                'http://127.0.0.1:8000/api/v1/users/signup/',
                values,
            );

            console.log(res.data);

            if (res.status === 201) {
                changeRegister();

                window.localStorage.setItem('access', res.data.access);

                window.localStorage.setItem('refresh', res.data.refresh);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="confirm_password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                                <Input type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit">Register</Button>
            </form>
        </Form>
    );
};

export default RegisterForm;
