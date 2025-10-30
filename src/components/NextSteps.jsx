import { motion } from 'framer-motion';
import './NextSteps.css';

const NextSteps = () => {
  return (
    <section className="next-steps" id="next-steps">
      <div className="container">
        <motion.div
          className="next-steps-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="vertical-bar"></div>
          <h2 className="next-steps-title">
            Próximos Passos: <span className="subtitle">COMO COMEÇAMOS HOJE MESMO?</span>
          </h2>

          <div className="next-steps-text">
            <p>
              Acreditamos que esta parceria tem o potencial de <strong>levar sua comunicação para o próximo nível</strong> de impacto e satisfação profissional.
            </p>
            <p>
              Aguardamos sua avaliação e, com a sua aprovação, <strong>podemos agendar nossa primeira sessão de imersão para dar início à Fase 1</strong>.
            </p>
            <p>
              Estamos à disposição para esclarecer qualquer ponto desta proposta.
            </p>
          </div>

          <div className="mockup-image">
            <img src="/images/013.webp" alt="Mockup do site" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NextSteps;
