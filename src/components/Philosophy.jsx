import { motion } from 'framer-motion';
import './Philosophy.css';

const Philosophy = () => {
  return (
    <section className="philosophy" id="philosophy">
      <div className="container">
        <motion.div
          className="philosophy-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="vertical-bar"></div>
          <h2 className="philosophy-title">
            Não é sobre<br />
            <span className="highlight">"fazer marketing"</span>
          </h2>
          <p className="philosophy-text">
            É sobre <em>construir uma parceria estratégica</em> para transformar o <strong>conteúdo valioso que você já cria com tanto prazer</strong> em um ecossistema digital coeso e de alto impacto. O objetivo é simples: <strong>otimizar e aproveitar ao máximo seu trabalho</strong>, para que sua mensagem chegue mais longe e sua autoridade seja consolidada, <u>sem que o processo deixe de ser uma fonte de satisfação e desenvolvimento profissional para você</u>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
