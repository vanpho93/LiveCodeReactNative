import saveToken from './saveToken';

const refreshToken = (token) => {
    fetch('http://localhost/api/refresh_token.php',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ token })
    })
    .then(res => res.text())
    .then(tokenToSave => saveToken(tokenToSave));
};

export default refreshToken;
