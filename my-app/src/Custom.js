import {useState} from 'react';


// Custom hooks
function useCustomCounter(){
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1)
    };
    return {
        count,
        handleIncrement
    };
}

export default useCustomCounter;
