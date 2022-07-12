import { useEffect } from "react";
import { useState } from "react"

const useTShirts = () => {
    const [tShirts, setTshirts] = useState([]);
    useEffect( () => {
        fetch('tshirts.json')
        .then(res => res.json())
        .then(data => setTshirts(data))
    }, [])
    return [tShirts, setTshirts];
}

export default useTShirts;