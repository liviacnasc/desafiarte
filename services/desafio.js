import { useState } from "react";

export default function desafioServices() {
    const [desafio, setDesafio] = useState([]);
    const [historico, setHistorico] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loadingHistorico, setLoadingHistorico] = useState(false);
    const [refetchDesafio, setRefetchDesafio] = useState(true);
    
    const serverUrl = process.env.NEXT_PUBLIC_BASEURL;

    const insertDesafioDiario = async () => {
        
        await fetch(`${serverUrl}/daily/set-desafio`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "*"
            },
        })
        .then(async (response) => await response.json())
        .then((result) => {
            console.log(result.body)
        })
        .finally(() => {
            setRefetchDesafio(false);
        })
    }

    const getDesafioDiario = async () => {
        setLoading(true);

        await fetch(`${serverUrl}/daily/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "*"
            },
        })
        .then(async (response) => await response.json())
        .then((result) => {
            if(result.success) {
                setDesafio(result.body)
            }
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false);
            setRefetchDesafio(false);
        })
    }

    const getHistorico = async () => {
        setLoading(true);

        await fetch(`${serverUrl}/daily/historico`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "*"
            },
        })
        .then(async (response) => await response.json())
        .then((result) => {
            if(result.success) {
                setHistorico(result.body)
            }
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false);
            setRefetchDesafio(false);
        })
    }

    return {getDesafioDiario, insertDesafioDiario, getHistorico, historico, loadingHistorico, desafio, refetchDesafio, loading}
}