import {useState} from "react";


export default {
    title: 'useState demo'
}

function generateData() {
    return 41564654
}

export const Example1 = () => {
    console.log('Example1');

   // const initialValue = generateData();
    //const initValue = useMemo(generateData, []);

    const [counter, setCounter] = useState(generateData); //useState вызовет функцию один раз

    const changer = (state: number) => state +1;

    return (
        <div>
        {/*<button onClick={ () => {setCounter(counter+1)}}>+</button>*/}
        <button onClick={ () => {setCounter(changer) } }>+</button>
        {counter}
        </div>
    )
}