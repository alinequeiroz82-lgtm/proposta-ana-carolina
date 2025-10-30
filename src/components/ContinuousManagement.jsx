import { motion } from 'framer-motion';
import './ContinuousManagement.css';

const ContinuousManagement = () => {
  return (
    <section className="continuous-management" id="continuous">
      <div className="container">
        <motion.div
          className="management-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="vertical-bar"></div>
          <h2 className="management-title">
            Gestão Contínua<br />
            e Amplificação
          </h2>
          <p className="management-text">
            Com a estratégia definida, <strong>iniciaremos a execução mensal</strong>, focada em transformar seu conteúdo principal em um motor de crescimento multicanal.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContinuousManagement;
