import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({setLoggedIn, children}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    const handleChange = (setState) => (e) => {
        setState(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/auth/login', { email, password });
            const { access_token } = response.data
            console.log(response.data);
            setToken(access_token)
            setLoggedIn(true)
        } catch (error) {
            // Manejar el error de autenticación
            console.error(error);
            setLoggedIn(false)
        }
    };
    
    console.log(token);

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Correo electrónico:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleChange(setEmail)}
                />
            </div>
            <div>
                <label htmlFor="password">Contraseña:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handleChange(setPassword)}
                />
            </div>
            <button type="submit">Iniciar sesión</button>
        </form>
    );
};

export default LoginForm;
