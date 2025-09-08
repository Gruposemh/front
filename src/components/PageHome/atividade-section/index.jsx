import "../../../styles/Home/Atividades-section/style.css"
import kickbox from "../../../assets/Home/kickbox.png"
import { useState, useEffect } from "react";   
import { useNavigate } from "react-router-dom";


const AtividadeSection = () => {
    const [atividades, setAtividades] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const fetchAtividades = async () => {
            try {
                const response = await eventoService.getAll();
                // Limitando a 3 atividades para exibição
                setAtividades(response.data.slice(0, 3));
            } catch (error) {
                console.error('Erro ao buscar atividades:', error);
                setError('Não foi possível carregar as atividades. Tente novamente mais tarde.');
            } finally {
                setLoading(false);
            }
        };

        fetchAtividades();
    }, []);

   
    return(
        <section className="atividades">
            <h1>Conheça nossas atividades</h1>
            <div className='linha'></div>
            {loading ? (
                <p className="loading-message">Carregando atividades...</p>
            ) : error ? (
                <p className="error-message">{error}</p>
            ) : (
                <div className='atividades-container'>
                    {atividades.length > 0 ? (
                        atividades.map((atividade, index) => (
                            <div className='card' key={atividade.id || index}>
                                <img src={kickbox} alt={atividade.titulo || 'Imagem da atividade'} />
                                <h3>{atividade.titulo || 'Nome da atividade'}</h3>
                            </div>
                        ))
                    ) : (
                        <>
                            <div className='card'>
                                <img src={kickbox} alt="Imagem da atividade" />
                                <h3>Nome da atividade</h3>
                            </div>
                            <div className='card'>
                                <img src={kickbox} alt="Imagem da atividade" />
                                <h3>Nome da atividade</h3>
                            </div>
                            <div className='card'>
                                <img src={kickbox} alt="Imagem da atividade" />
                                <h3>Nome da atividade</h3>
                            </div>
                        </>
                    )}
                </div>
            )}
        </section>
    )
}

export default AtividadeSection;
