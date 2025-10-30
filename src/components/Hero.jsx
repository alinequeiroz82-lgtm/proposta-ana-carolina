import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-logo">
            <h3>threes: | Marketing Digital</h3>
          </div>
          <h1 className="hero-title">
            Da Autenticidade à<br />
            Autoridade Amplificada
          </h1>
          <p className="hero-subtitle">Proposta comercial</p>
          <div className="hero-footer">
            <p>Proposta Comercial - Dra. Ana Carolina</p>
            <p>2025</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
