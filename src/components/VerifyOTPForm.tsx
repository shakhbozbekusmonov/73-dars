import { Button } from '@/components/ui/button';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from '@/components/ui/input-otp';
import { Label } from '@/components/ui/label';
import { Context as AccountContext } from '@/context/account.provider';
import { useContext, useEffect, useState } from 'react';

const VerifyOTPForm = () => {
    const { changeRegister } = useContext(AccountContext);
    const [value, setValue] = useState('');
    const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(timer); // Cleanup timer on component unmount
    }, []);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    const isDisabled = value.length < 5;

    const resendOTP = async () => {
        try {
            const res = await fetch(
                'http://127.0.0.1:8000/api/v1/users/verify/',
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('access')}`,
                    },
                },
            );
            console.log(res);

            setTimeLeft(120);
        } catch (error) {
            console.log(error);
        }
    };

    const onSubmit = async () => {
        try {
            const res = await fetch(
                'http://127.0.0.1:8000/api/v1/users/verify/',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('access')}`,
                    },
                    body: JSON.stringify({
                        code: value,
                    }),
                },
            );

            if (res.ok) {
                console.log('OTP verified successfully');
                changeRegister();
            } else {
                console.log('Failed to verify OTP');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex flex-col space-y-3 items-center">
            <Label>Tasdiqlash kodi</Label>
            <InputOTP maxLength={5} onChange={(value) => setValue(value)}>
                <InputOTPGroup>
                    <InputOTPSlot index={0} />
                </InputOTPGroup>
                <InputOTPGroup>
                    <InputOTPSlot index={1} />
                </InputOTPGroup>
                <InputOTPGroup>
                    <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPGroup>
                    <InputOTPSlot index={3} />
                </InputOTPGroup>
                <InputOTPGroup>
                    <InputOTPSlot index={4} />
                </InputOTPGroup>
            </InputOTP>

            <div>
                {timeLeft > 0 ? (
                    <p className="text-red-500">{formatTime(timeLeft)}</p>
                ) : (
                    <Button
                        variant="link"
                        className="text-violet-900"
                        onClick={resendOTP}
                    >
                        Qayta yuborish
                    </Button>
                )}
            </div>

            <Button onClick={onSubmit} disabled={isDisabled}>
                Tasdiqlash
            </Button>
        </div>
    );
};

export default VerifyOTPForm;
