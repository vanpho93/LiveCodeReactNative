const initData = () => (
    fetch('http://localhost/api/')// eslint-disable-line
    .then(res => res.json())
);

export default initData;
