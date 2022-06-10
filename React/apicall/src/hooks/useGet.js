//Cuando el componente se monte, este custom hook va a realizar una request HTTP a un endpoint variable y retornará: 1/la info de esa petición, 2/si la petición está en progreso (loading...spinner, etc) 3/si hubo un error.
//Esto es un servicio base que devuelve info. Entonces, luego cada componente debe manejar esa info de acuerdo a lo que necesite renderizar.

import { useEffect, useState } from "react";
import { API } from "../API";

export const useGet = (endpoint) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const getData = async (endpoint) => {
        try {
            const { data } = await API.get(endpoint)
            setData(data.results)
            setTimeout(() => setLoading(false), 2000)
        } catch (error) {
            setError(true)
        }
    };

    useEffect(() => {
        getData(endpoint)
    }, [endpoint])

    return [data, loading, error];
};

