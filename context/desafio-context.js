'use client'

import React, { createContext, useContext, useEffect } from 'react';
import desafioServices from '../services/desafio';

const DesafioContext = createContext();

export const DesafioProvider = ({children}) => {

    const {insertDesafioDiario, getDesafioDiario, getHistorico, historico, refetchDesafio, loading, desafio} = desafioServices();

    useEffect(() => {
        getDesafioDiario();
        getHistorico();
        if(desafio.length == 0) {
            insertDesafioDiario();
        }

        console.log(desafio)
        console.log(historico)
    }, [refetchDesafio])

    return( 
    <DesafioContext.Provider value={{ desafio, loading, historico }}>
        {children}
    </DesafioContext.Provider>)
};

export const useDesafio = () => {
    return useContext(DesafioContext);
}