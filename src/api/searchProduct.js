const searchProduct = (key) => {
    const url = `http://localhost/api/search.php?key=${key}`;
    return fetch(url)
    .then(res => res.json());
};

export default searchProduct;
