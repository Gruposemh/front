import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function OAuth2Callback() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Extrair tokens da URL
    const token = searchParams.get('token');
    const refreshToken = searchParams.get('refreshToken');
    const email = searchParams.get('email');
    const role = searchParams.get('role');
    const nome = searchParams.get('nome');

    if (token && refreshToken) {
      // Salvar tokens no localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('refreshToken', refreshToken);
      
      if (email) localStorage.setItem('email', email);
      if (role) localStorage.setItem('role', role);
      if (nome) localStorage.setItem('nome', nome);

      // Redirecionar para a home
      navigate('/', { replace: true });
    } else {
      // Se não houver tokens, redirecionar para login
      navigate('/login', { replace: true });
    }
  }, [navigate, searchParams]);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'Inter, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ color: '#B20000', marginBottom: '1rem' }}>
          Processando login...
        </h2>
        <p style={{ color: '#808080' }}>
          Aguarde enquanto redirecionamos você.
        </p>
      </div>
    </div>
  );
}
