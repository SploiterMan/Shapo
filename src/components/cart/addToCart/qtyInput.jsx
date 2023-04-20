import { useState } from "react";
import Btn from "../../btn";

const QtyInput = ({ currentQty = 1, disabled }) => {
    const [qty, setQty] = useState(currentQty);
    const changeQty = mode => {
        if (mode === 'plus' && qty < 20) setQty(qty + 1);
        else if (mode === 'minus' && qty > 1) setQty(qty - 1);
    }

    return (
        <div className='border relative flex'>
            <Btn onClick={() => changeQty('minus')} disabled={disabled}>–</Btn>
            <input
                type='number'
                className='p-0 bg-transparent border-none w-10 text-center'
                value={qty}
                readOnly
                max='20'
                min='1'
                disabled={disabled}
            />
            <Btn onClick={() => changeQty('plus')} disabled={disabled}>+</Btn>
        </div>
    );
}
export default QtyInput; 