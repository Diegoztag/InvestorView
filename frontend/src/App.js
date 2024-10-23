import React, { useEffect, useState } from 'react';
import { getMessage } from './api';

function App() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  const fetchMessage = async () => {
    try {
      const data = await getMessage();
      setMessage(data.message);
    } catch (error) {
      setError('Error al obtener el mensaje del servidor');
    }
  };

  useEffect(() => {
    fetchMessage();
  }, [])

  return (
    <div>
      <h1>Mensaje del Backend</h1>
      {error ? <p>{error}</p> : <p>{message}</p>}
    </div>
  );
}

export default App;