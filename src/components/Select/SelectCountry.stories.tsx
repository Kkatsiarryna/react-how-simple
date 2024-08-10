import {Select} from "./Select";
import {memo, useMemo, useState} from "react";
/* eslint-disable */

export default {
    title: 'Select Country'
}

type CitiesType ={
    value: number
    title: string
    idCountry? : number
    population: number
}
type CountriesType = {
    id: number
    title: string
}

export const CountrySelect = () =>{

    let countries: Array<CountriesType> = [
        {id: 1, title: 'Belarus'},
        {id: 2, title: 'Russia'},
        {id: 3, title: 'Poland'},
    ]

    const citiesBefore: Array<CitiesType> = [
        {value: 1, title: 'Minsk', idCountry: countries[0].id, population: 1000000},
        {value: 2, title: 'Mogilev', idCountry: countries[0].id, population: 600000},
        {value: 3, title: 'Vitebsk', idCountry: countries[0].id, population: 600000},
        {value: 4, title: 'Moscow', idCountry: countries[1].id, population: 5000000},
        {value: 5, title: 'St. Petersburg', idCountry: countries[1].id, population: 2000000},
        {value: 6, title: 'Ekaterinburg', idCountry: countries[1].id, population: 900000},
        {value: 7, title: 'Warsaw', idCountry: countries[1].id, population: 1500000},
        {value: 8, title: 'Poznań', idCountry: countries[1].id, population: 800000},
        {value: 9, title: 'Wroclaw', idCountry: countries[1].id, population: 400000},
    ]

    const [value1, setValue1] = useState(null);
    const [value2, setValue2] = useState(null);
    const [value3, setValue3] = useState(null);

    const [cities, setCities] = useState(citiesBefore);


    let citiesWithLetter = useMemo( ()=> {
        console.log('call citiesWithLetter')
        return cities.filter( el => el.title.indexOf('o') > -1)
        }, [cities])

    let citiesByContry = useMemo( () => {
        console.log('call citiesByContry')
        return cities.filter(el => el.idCountry === 1)
        }, [cities]
    )

    let bigCities = useMemo(() => {
        console.log('call bigCities')
        return cities.filter( el => el.population > 999999)
    }, [cities])

    const addNewCity = () => {
        let newCity = {value: 10, title: 'Grodno', idCountry: countries[0].id, population: 800000};
        setCities( [...cities, newCity])
    }

    const [count, setCount] = useState(0);
    const refreshCount = () => {
        setCount(count=> count+1);
    }

    return (
        <div style={{display: 'flex', padding: '10px', gap: '1em'}}>

            <div style={{display: 'flex', flexDirection: 'column'}}>
                <span>cities With Letter 'O'</span>
                <Select
                    onChange={setValue1}
                    value={value1}
                    items={citiesWithLetter}
                />
            </div>

            <div style={{display: 'flex', flexDirection: 'column'}}>
                <span>cities from Belarus</span>
                <Select
                    onChange={setValue2}
                    value={value2}
                    items={citiesByContry}
                />
            </div>

            <div style={{display: 'flex', flexDirection: 'column'}}>
                <span>big Cities</span>
                <Select
                    onChange={setValue3}
                    value={value3}
                    items={bigCities}
                />
            </div>

            <button onClick={addNewCity}>Add new City</button>

            <span onClick={refreshCount}>{count}</span>

        </div>
    )

}