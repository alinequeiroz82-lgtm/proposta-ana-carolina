import { motion } from 'framer-motion';
import './ServicesOverview.css';

const ServicesOverview = () => {
  return (
    <section className="services-overview" id="services">
      <div className="container">
        <div className="services-grid">
          <motion.div
            className="services-intro"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="vertical-bar"></div>
            <h2 className="services-title">Serviços</h2>
            <p className="services-description">
              Nosso trabalho é dividido em duas fases: a <strong>fundação estratégica</strong>, para garantir o alinhamento total, e a <strong>gestão contínua</strong>, para execução e crescimento consistentes.
            </p>
          </motion.div>

          <motion.div
            className="services-cards"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="service-card">
              <div className="service-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" fill="white" stroke="#f4b942" strokeWidth="2"/>
                  <path d="M20 12L20 28M12 20L28 20" stroke="#1e2952" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="service-card-title">Fundação Estratégica (Mês 1)</h3>
              <p className="service-card-text">
                O primeiro mês será dedicado a construir a base sólida para toda a nossa parceria.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect x="2" y="2" width="36" height="36" rx="4" fill="white" stroke="#f4b942" strokeWidth="2"/>
                  <text x="20" y="26" textAnchor="middle" fill="#1e2952" fontSize="16" fontWeight="bold">31</text>
                </svg>
              </div>
              <h3 className="service-card-title">Gestão Contínua e Amplificação</h3>
              <p className="service-card-text">
                Com a estratégia definida, iniciaremos a execução mensal.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
