import SiteHeader from '@/components/SiteHeader';
import { Button } from '@/components/ui/button';
import { Context as CounterContext } from '@/context/counter.provider';
import style from '@/styles/App.module.css';
import { useContext } from 'react';

const App = () => {
    const { count, incrementNumber, decrementNumber } =
        useContext(CounterContext);

    return (
        <>
            <SiteHeader />

            <h1>{count}</h1>

            <Button onClick={incrementNumber}>+</Button>
            <Button onClick={decrementNumber}>-</Button>

            <h1 className={style.title}>Hello World!</h1>
        </>
    );
};

export default App;
