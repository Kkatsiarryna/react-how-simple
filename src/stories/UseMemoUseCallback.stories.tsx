import {memo, useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const Factorial = () => {
    const [a, setA] = useState<number>(3);
    const [b, setB] = useState<number>(5);

    let resultA =1 ;
    let resultB = 1;

    resultA = useMemo( ()=> {
        let tempResultA = 1;
        for ( let i = 1; i <= a; i++){

            let fake = 0;
            while ( fake < 1000 ){
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA *= i;
        }
        return tempResultA;
    }, [a]);


    for ( let i = 1; i <= b; i++){
        resultB *= i;
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)} />
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))} />
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}


const UsersSecret = (props: {users: Array<string>}) => {
    console.log('UsersSecret');
    return <div>{
        props.users.map( (u,i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = memo(UsersSecret);

export const HelpsForReactMemo = () => {
    console.log('HelpsForReactMemo');
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dimych', "Valera", "Artem", "Katya"]);


    const newArray = useMemo( () => {
       const newArray =  users.filter( el => el.indexOf('a') > -1)
        return newArray;
    }, [users])

    const addUser = () => {
        const newUsers = [...users, "Sveta" + new Date().getTime()];
        setUsers(newUsers);
        console.log(newUsers);
    }

    return <>
        <button onClick={ () => {setCounter(counter+1)}}>+</button>
        <button onClick={ () => {addUser()} }>add user</button>
        {counter}
        <Users users = {newArray}/>
    </>
}




export const LikeUseCallback = () => {
    console.log('HelpsForReactMemo');
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['React', "JS", "HTML", "CSS"]);

    const memooizedAddBook = useMemo( () => {
        return () => {
            const newUsers = [...books, "Angular" + new Date().getTime()];
            setBooks(newUsers);
            console.log(newUsers);
        }
    }, [books]);

    const memooizedAddBook2 = useCallback( () => {
        const newUsers = [...books, "Angular" + new Date().getTime()];
        setBooks(newUsers);
        console.log(newUsers);
    }, [books]);

    return <>
        <button onClick={ () => {setCounter(counter+1)}}>+</button>
        {counter}
        <Books  addBook = {memooizedAddBook} />
        <Books  addBook = {memooizedAddBook2} />
    </>
}

type BooksSecretPropsType = {
    addBook: () => void
}

const BooksSecret = (props: BooksSecretPropsType) => {
    console.log('BooksSecret');
    return <div>
        <button onClick={() => {
            props.addBook()
        }}>add user
        </button>
    </div>
}

const Books = memo(BooksSecret);