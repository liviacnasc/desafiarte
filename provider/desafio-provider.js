"use client"

import React from 'react';
import { DesafioProvider } from '../context/desafio-context';


export default function Provider({children}) {
    return (
        <DesafioProvider>
            {children}
        </DesafioProvider>
    )
}