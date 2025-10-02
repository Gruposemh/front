import "../../styles/Footer/style.css";
import LogoFooter from "../../assets/Footer/Logo-footer.svg";
import Instagram from "../../assets/Footer/logo-instagram.svg";
import Facebook from "../../assets/Footer/logo-facebook.svg";
import WhatsApp from "../../assets/Footer/logo-whatsapp.svg";
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-infomacoes">
                    <div className="footer-logo">
                        <img 
                            src={LogoFooter} 
                            alt="Logo dos Voluntários Pro Bem, três bonequinhos, preto cinza e vermelho" 
                            loading="lazy" 
                            title="Logo Voluntários Pro Bem" 
                        />
                        
                    
                        <div className="footer-social">
                            <div className="icon-social">
                                <img 
                                    src={Instagram} 
                                    alt="Logo Instagram branco com círculo branco" 
                                    loading="lazy" 
                                    title="Logo do Instagram" 
                                />
                            </div>

                            <div className="icon-social">
                                <img 
                                    src={Facebook} 
                                    alt="Logo Facebook branco com círculo branco" 
                                    loading="lazy" 
                                    title="Logo do Facebook" 
                                />
                            </div>

                            <div className="icon-social">
                                <img 
                                    src={WhatsApp} 
                                    alt="Logo WhatsApp branco com círculo branco" 
                                    loading="lazy" 
                                    title="Logo do WhatsApp" 
                                />
                            </div>
                        </div>

                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.592385615283!2d-46.50071362378758!3d-23.583078762392123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6798f49c77cd%3A0xaca086453fcbeab6!2sPra%C3%A7a%20Cataguarino%20-%20S%C3%A3o%20Mateus%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003933-060!5e0!3m2!1spt-BR!2sbr!4v1756140515023!5m2!1spt-BR!2sbr" 
                            width="400" 
                            height="300" 
                            style={{ border: "0" }} // Corrigido: estilo agora como um objeto
                            allowFullScreen // Corrigido: propriedade em camelCase
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade" // Corrigido: propriedade em camelCase
                        />
                    </div>

                    <div className="footer-nav">
                        <div className="footer-container">
                            <h3>Sobre</h3>

                            <nav>
                                <ul className="footer-links">
                                    <li><Link to="/home" className="footer-item">Home</Link></li>
                                    <li><Link to="/eventos" className="footer-item">Eventos</Link></li>
                                    <li><Link to="/sobre" className="footer-item">Sobre Nós</Link></li>
                                    <li><Link to="/blog" className="footer-item">Blog</Link></li>
                                    <li><Link to="/como-ajudar" className="footer-item">Como Ajudar</Link></li>
                                </ul>
                            </nav>
                        </div>

                        <div className="footer-container">
                            <h3>Ajuda</h3>

                            <nav>
                                <ul className="footer-links">
                                    <li><Link to="/fale-conosco" className="footer-item">Fale Conosco</Link></li>
                                </ul>
                            </nav>
                        </div>

                        <div className="footer-container">
                            <h3>Termos</h3>

                            <nav>
                                <ul className="footer-links termos">
                                    <li><Link to="/politica-privacidade" className="footer-item">Política de Privacidade</Link></li>
                                    <li><Link to="/termos-servico" className="footer-item">Termos de Serviço</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                  

                </div>
                <div className="copyright">
                    <p>&copy; 2025 Voluntários Torcendo Pro Bem.</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
