const initData = () => (
    fetch('http://10.0.0.13/api/')// eslint-disable-line
    .then(res => res.json())
);

export default initData;
