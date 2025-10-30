import { motion } from 'framer-motion';
import './StrategicFoundation.css';

const StrategicFoundation = () => {
  const services = [
    {
      icon: '💬',
      title: 'DNA da Marca',
      description: 'Realizaremos sessões de imersão para mapear seus valores, sua visão de mundo, seu tom de voz e os elementos únicos da sua comunicação. O resultado será um Guia de Marca, nosso documento mestre para garantir que toda a comunicação, das legendas aos roteiros, soe 100% como você.'
    },
    {
      icon: '⚙️',
      title: 'Conteúdo',
      description: 'Definiremos juntos de 3 a 5 pilares de conteúdo centrais que irão "treinar" os algoritmos a seu favor, atraindo um público mais qualificado. Criaremos um Framework Temático Flexível, que oferece direção estratégica sem engessar seu processo criativo de "livre demanda".'
    },
    {
      icon: '🎯',
      title: 'Otimização',
      description: 'Faremos uma revisão e otimização completas de seus perfis no Instagram, YouTube e TikTok, ajustando biografias, links e aspectos visuais para transmitir profissionalismo e clareza desde o primeiro contato.'
    }
  ];

  return (
    <section className="strategic-foundation" id="foundation">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-header">
            <div className="vertical-bar"></div>
            <h2 className="section-title">Fundação Estratégica <span className="subtitle">(1º mês)</span></h2>
          </div>

          <div className="foundation-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="foundation-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="card-icon">{service.icon}</div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-description">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StrategicFoundation;
