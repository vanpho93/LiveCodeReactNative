const searchProduct = (key) => {
    const url = `http://10.0.0.13/api/search.php?key=${key}`;
    return fetch(url)
    .then(res => res.json());
};

export default searchProduct;
