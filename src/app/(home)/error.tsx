"use client"

import { useEffect } from "react";

interface ErrorPorps {
    error: Error;
    reset: () => void;
}

export default function HomeError({error, reset}: ErrorPorps) {

    useEffect(() => {
        console.error(error);
    }, []);

    return (
        <div style={{ padding: '10rem' }}>
            <h1>:(</h1>

            <p>Ha ocurrido un error</p>

            <button onClick={reset}>Intentar de nuevo</button>
        </div>
        
    )
}