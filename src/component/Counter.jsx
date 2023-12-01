import React, { useState } from 'react'
import './counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);

    function dechandler() {
        setCount(count - 1);
    }

    function inchandler() {
        setCount(count + 1);
    }

    function resethandler() {
        setCount(0);
    }
    return (
        <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-6'>
            <div className='text-[#0398d4] font-medium text-2xl'>Increment & Decrement</div>
            <div className='bg-white flex justify-center items-center gap-12 py-2 rounded-sm text-[27px] text-[#344151]'>
                <button onClick={dechandler} className='border-r-2 text-center w-20 border-[#bfbfbf] text-5xl'>-</button>
                <div className='font-bold gap-12 text-4xl'>
                    {count}
                </div>
                <button onClick={inchandler} className='border-l-2 text-center w-20 border-[#bfbfbf] text-5xl'>+</button>
            </div>

            <button className='bg-[#0398d4] text-white px-5 py-2 text-lg rounded-sm' onClick={resethandler}>Reset</button>

        </div>
    )
}

export default Counter