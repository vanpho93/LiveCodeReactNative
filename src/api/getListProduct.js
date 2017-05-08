const getListProduct = (idType, page) => {
    const url = `http://localhost/api/product_by_type.php?id_type=${idType}&page=${page}`;
    return fetch(url)
    .then(res => res.json());
};

export default getListProduct;
