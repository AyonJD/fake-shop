import { useState } from "react";

const useHookProducts = () => {
    const [hookProducts, setHookProducts] = useState([]);

    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            setHookProducts(data);
        });
    
    return [hookProducts];
};

export default useHookProducts;