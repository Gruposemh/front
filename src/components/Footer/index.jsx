import "./style.css";
import LogoFooter from "../../assets/logo-footer.svg"
import Instagram from "../../assets/logo-instagram.svg"
import Facebook from "../../assets/logo-facebook.svg"
import WhatsApp from "../../assets/logo-whatsapp.svg"

const Footer = () => {
    return(
        <>
            <Footer>
                <div className="footer-infomacoes">
                    <div className="footer-logo">
                        <img src={LogoFooter} alt="Logo dos Voluntarios Pro Bem, três bonequinhos, preto cinza e vermelho " loading="lazy" title="Logo Voluntários Pro Bem"/>
                        <h2>voluntários pro bem </h2>

                        <div className="footer-social">

                            <div className="icon-social">
                                <img src={Instagram} alt="Logo Instagram branco com circulo branco" loading="lazy" title="Logo do Instagram" />
                            </div>

                            <div className="icon-social">
                                <img src={Facebook} alt="Logo Facebook branco com circulo branco" loading="lazy" title="Logo do Facebook" />
                            </div>

                            <div className="icon-social">
                                <img src={WhatsApp} alt="Logo WhatsApp branco com circulo branco" loading="lazy" title="Logo do WhatsApp" />
                            </div>
                            
                        </div>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.592385615283!2d-46.50071362378758!3d-23.583078762392123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6798f49c77cd%3A0xaca086453fcbeab6!2sPra%C3%A7a%20Cataguarino%20-%20S%C3%A3o%20Mateus%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003933-060!5e0!3m2!1spt-BR!2sbr!4v1756140515023!5m2!1spt-BR!2sbr" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className="footer-nav">
                        <div className="footer-container">
                            <h3>Sobre</h3>

                            <nav>
                                <ul className="footer-links">
                                    <li><a>Eventos</a></li>
                                    <li><a>Sobre Nós</a></li>
                                    <li><a>Blog</a></li>
                                    <li><a>Como ajudar</a></li>
                                </ul>
                            </nav>
                        </div>

                        <div className="footer-container">
                            <h3>Ajuda</h3>

                            <nav>
                                <ul className="footer-links">
                                    <li><a>Fale Conosco</a></li>
                                </ul>
                            </nav>
                        </div>

                        <div className="footer-container">
                            <h3>Termos</h3>

                            <nav>
                                <ul className="footer-links">
                                    <li><a>Política de Privacidade</a></li>
                                    <li><a>Termos de Serviço</a></li>
                                </ul>
                            </nav>

                        </div>

                    </div>

                    <div className="copyright">
                        <p>&copy 2025 Voluntários Torcendo Pro Bem.</p>
                    </div>

                </div>
            </Footer>
        </>
    )
}
export default Footer