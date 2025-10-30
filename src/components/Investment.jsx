import { motion } from 'framer-motion';
import './Investment.css';

const Investment = () => {
  return (
    <section className="investment" id="investment">
      <div className="container">
        <motion.div
          className="investment-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="vertical-bar"></div>
          <div className="investment-header">
            <h2 className="investment-title">Investimento:</h2>
            <p className="investment-subtitle">TRANSPARÊNCIA TOTAL NOS VALORES</p>
          </div>

          <p className="investment-description">
            Para a execução completa de todos os serviços detalhados acima — da estratégia à produção e análise
          </p>

          <div className="price-card">
            <div className="price-icon">💰</div>
            <div className="price-content">
              <p className="price-label">Mensal</p>
              <p className="price-value">R$ 3.900,00*</p>
            </div>
          </div>

          <p className="price-note">*Sem os Serviços de Edição e Design</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Investment;
