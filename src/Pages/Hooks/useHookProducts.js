import { useEffect, useState } from "react";

const useHookProducts = () => {
    const [hookProducts, setHookProducts] = useState([]);
    const [spinner, setSpinner] = useState(false);


    useEffect(() => {
        setSpinner(true);
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            setHookProducts(data);
            setSpinner(false);
        });
    }, []);
    
    return [hookProducts, spinner];
};

export default useHookProducts;