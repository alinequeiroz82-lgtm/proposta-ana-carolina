import { motion } from 'framer-motion';
import './ServicesDetail.css';

const ServicesDetail = () => {
  const services = [
    {
      number: '1',
      title: 'Gestão Estratégica',
      includes: [
        'Planejamento do calendário editorial',
        'Criação de todas as legendas (captions) alinhadas ao seu DNA',
        'Agendamento de posts',
        'Orientação para interação com a comunidade'
      ],
      solves: 'A sensação de estagnação e a falta de métricas e objetivos claros para o projeto'
    },
    {
      number: '2',
      title: 'Amplificação de Conteúdo',
      includes: [
        'Edição profissional do áudio e vídeo do podcast',
        '3 a 5 vídeos curtos (Reels/Shorts) com os melhores "recortes" e insights para Instagram e TikTok',
        '1 a 2 Carrosséis informativos para o Instagram, resumindo os pontos-chave',
        'Criação de outros ativos visuais (citações, stories) para manter o engajamento'
      ],
      solves: 'A sensação de estagnação e a falta de métricas e objetivos claros para o projeto',
      note: 'A partir de cada episódio quinzenal do podcast, iremos produzir um ecossistema completo de conteúdo derivado:'
    },
    {
      number: '3',
      title: 'Gestão do Canal do YouTube',
      includes: [
        'Edição do vídeo longo',
        'Criação de títulos e thumbnails (miniaturas) profissionais para aumentar a taxa de cliques',
        'Otimização de SEO (descrições e tags) para melhorar a descoberta dos vídeos'
      ],
      solves: 'O problema das "visualizações tão baixas", transformando o YouTube em um ativo estratégico de construção de autoridade'
    },
    {
      number: '4',
      title: 'Desenvolvimento do Hub Digital',
      includes: [
        'Transformação de cada episódio do podcast em um artigo de blog otimizado para SEO, publicado em seu site',
        'Isso posicionará você no Google, capturando um público que busca ativamente por seus temas'
      ],
      solves: 'A vulnerabilidade de depender apenas de redes sociais, construindo seu "terreno próprio" e uma fonte de tráfego passivo e qualificado'
    },
    {
      number: '5',
      title: 'Análise e Relatórios',
      includes: [
        'Envio de um relatório de desempenho mensal consolidado',
        'Traduzindo os dados em insights claros sobre o crescimento e o que está funcionando',
        'Para que você sempre saiba para onde estamos indo'
      ],
      solves: null
    }
  ];

  return (
    <section className="services-detail" id="services-detail">
      <div className="container">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-detail-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h3 className="service-number-title">{service.number}. {service.title}</h3>
            
            <div className="service-content-grid">
              <div className="service-box">
                <div className="box-header">
                  <span className="check-icon">✓</span>
                  <h4>O que inclui?</h4>
                </div>
                {service.note && <p className="service-note">{service.note}</p>}
                <ul className="service-list">
                  {service.includes.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {service.solves && (
                <div className="service-box">
                  <div className="box-header">
                    <span className="check-icon">✓</span>
                    <h4>O que resolve?</h4>
                  </div>
                  <p className="service-solves">{service.solves}</p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesDetail;
