import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-grid">
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="vertical-bar"></div>
          <div className="logo-section">
            <h2 className="logo-text">threes:</h2>
            <p className="logo-subtitle">Marketing Digital</p>
          </div>
          <h3 className="contact-slogan">
            Amplifique sua voz.<br />
            Construa autoridade com<br />
            <em>Autenticidade</em>
          </h3>
        </motion.div>

        <motion.div
          className="contact-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="contact-title">
            A nova era da comunicação médica começa com propósito
          </h3>
          <p className="contact-description">
            Se você busca uma <strong>presença digital que reflita sua essência e valor</strong>, e deseja transformar o conteúdo que já produz em um <u>ecossistema estratégico</u>, podemos começar imediatamente.
          </p>

          <div className="contact-info">
            <h4 className="contact-info-title">Entre em Contato</h4>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <a href="tel:+5511941730801">(11) 94173-0801</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <a href="mailto:aline.queiroz@threesmarketingdigital.com.br">
                aline.queiroz@threesmarketingdigital.com.br
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
