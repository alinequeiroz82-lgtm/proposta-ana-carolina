import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="vertical-bar"></div>
            <h2 className="about-title">Dra. Ana Carolina,</h2>
            <p className="about-description">
              Compreendemos profundamente <strong>seu receio com o "marketing" tradicional</strong> e sua busca por uma comunicação que seja uma extensão genuína de quem você é.
            </p>
            <p className="about-description">
              Nossa filosofia de trabalho parte do mesmo princípio: a estratégia digital mais poderosa não é sobre criar uma persona, mas <strong>sobre codificar e amplificar a sua voz autêntica para conectar-se</strong> com o público que realmente "fala a sua língua".
            </p>
          </motion.div>
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src="/images/002.webp" alt="Dra. Ana Carolina" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
