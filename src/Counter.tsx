import React from 'react'; // Подключение react.
import { useState } from 'react';
import Button from './Button';

interface CounterProps {
    start: number;
    step: number;
}

var Counter = (props: CounterProps) => {
    var [ count, setCount ] = useState(props.start); // И используем. Значение по умолчанию - 0.
    var handleIncrease = () => {
        setCount(count - props.step);
    };
    return (
        <div>
        <div>Количество людей на болоте шрека: {count}.</div>
        <Button onClick={handleIncrease} text={"Рык огра"}/>
    </div>
    );
};
export default Counter;