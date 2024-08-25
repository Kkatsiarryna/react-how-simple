import {useEffect, useState} from "react";


export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1);

    console.log('SimpleExample');

    // useEffect( () => { //в useEffect передаем коллбэк функцию сайд эффект
    //     //срабатывает каждый раз при перерисвоке компоненты
    //     console.log('useEffect');
    //     document.title = counter.toString();
    //
    //     //сайд эффект - асинхронный
    //     //api.getUsers().then("")
    //     //setInerval
    //     //indexDB
    //     //documnet.getElrmntId
    //     //document.title = "User "
    // }, [counter])


    useEffect( () => {
        console.log('useEffect every render');
        document.title = counter.toString();
    })

    useEffect( () => {
        console.log('useEffect only first render');
        document.title = counter.toString();
    }, [])

    useEffect( () => {
        console.log('useEffect only first render and every counter change');
        document.title = counter.toString();
    }, [counter])

    return <>
        Hello, {counter} {fake}
        <button onClick={ () => setFake(fake + 1) }>Fake +</button>
        <button onClick={ () => setCounter(counter + 1) }>Counter +</button>
    </>
}

export const SetTimeoutExapmle = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1);

    console.log('SimpleExample');

    // useEffect( () => {
    //     console.log('setTimeout')
    //     setTimeout( () => {
    //         document.title = counter.toString();
    //     }, 3000)
    // }, [counter])

    useEffect( () => {
        console.log('setInterval')
        setInterval( () => {
            console.log('tick' + counter)
            setCounter(counter => counter + 1 );
        }, 1000)
    }, [])

    return <>
      Counter: {counter} - Fake: {fake}
        {/*<button onClick={ () => setFake(fake + 1) }>Fake +</button>*/}
        {/*<button onClick={ () => setCounter(counter + 1) }>Counter +</button>*/}
    </>
}

export const Clock = () => {
    let a = new Date();
    const [hour, setHour] = useState(a.getHours())
    const [minute, setMinute] = useState(a.getMinutes())
    const [second, setSecond] = useState(a.getSeconds())

    useEffect(() => { // Код внутри useEffect выполняется после рендеринга компонента
        const interval = setInterval(() => { // Код внутри setInterval выполняется каждые 1000 миллисекунд (1 секунда)
            setSecond(prevSecond => { //Обновляет состояние секунд. prevSecond — это текущее значение секунд
                if (prevSecond === 59) { // Если секунды достигли 59, сбрасываем их на 0 и увеличиваем минуты
                    setMinute(prevMinute => { //Если секунды достигли 59, обновляет состояние минут. prevMinute — это текущее значение минут.
                        if (prevMinute === 59) { // Если минуты достигли 59, сбрасываем их на 0 и увеличиваем часы
                            setHour(prevHour => (prevHour + 1) % 24); //Если минуты достигли 59, обновляет состояние часов. (prevHour + 1) % 24 увеличивает часы на 1 и сбрасывает их на 0, если они достигли 24.
                            return 0; //Сбрасывает минуты на 0.
                        }
                        return prevMinute + 1; //Увеличивает минуты на 1, если они не достигли 59.
                    });
                    return 0; //Сбрасывает секунды на 0.
                }
                return prevSecond + 1; //Увеличивает секунды на 1, если они не достигли 59.
            });
        }, 1000);

        return () => clearInterval(interval); //Очистка интервала
    }, []);

    return <>
    <h2>Clock</h2>
        {hour}:{minute}:{second}
    </>
}