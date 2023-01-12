'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hook';
import { useSelector } from 'react-redux';
import { increment, decrement, fetchPokemo, selectCount } from 'store/counterSlice';
import { pokemonApi, useGetPokemonByNameQuery } from 'store/pokemoApi';
import styles from './styles.module.scss';

export function Counter() {
    const dispatch = useAppDispatch();
    const count = useAppSelector((state) => state.counter.value);
    const a = useSelector(selectCount);
    console.log(a, 'a');
    const data = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur');
    // or const { data, isLoading, error } = useGetPokemonByNameQuery('bulbasaur');
    console.log(data, 'data');

    useEffect(() => {
        (async () => {
            const pokemoData = await dispatch(fetchPokemo());
            console.log(pokemoData, 'pokemoData');
        })();
    }, []);

    return (
        <div className={styles.root}>
            <h1>Counter page</h1>
            <h2>{count}</h2>
            <div className={styles.buttons}>
                <button
                    onClick={() => {
                        dispatch(increment());
                    }}
                >
                    increment
                </button>
                <button
                    onClick={() => {
                        dispatch(decrement());
                    }}
                >
                    decrement
                </button>
            </div>
        </div>
    );
}

export default Counter;
