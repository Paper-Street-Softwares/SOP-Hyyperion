import { motion } from 'framer-motion'
import {
  ArrowRight,
  Menu,
  CheckCircle2,
  TrendingUp,
  Shield,
  Search,
  Users,
  Database,
  Lock,
  BarChart3,
  Globe,
  Award,
  Zap,
  Check,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEffect, useRef, useState } from 'react'
import forestBg from '@assets/generated_images/realistic_misty_forest_with_natural_light.png'
import sequoiaUp from '@assets/generated_images/low_angle_view_of_giant_sequoias_looking_up.png'
import dataBg from '@assets/generated_images/abstract_digital_data_stream_in_dark_gold_and_green.png'
import { Link } from 'react-scroll'
import { getWhatsappLink } from '@/utils/whatsapp'
import imgLogo from '../assets/hero/logo.webp'
import img1 from '../assets/logos/logo1.png'
import img2 from '../assets/logos/logo2.png'
import img3 from '../assets/logos/logo3.png'
import img4 from '../assets/logos/logo4.png'
import img5 from '../assets/logos/logo5.png'
import img6 from '../assets/logos/logo6.png'
import img7 from '../assets/logos/logo7.png'
import img8 from '../assets/logos/logo8.png'

export default function Home() {
  const [active, setActive] = useState()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState()
  const containerRef = useRef(null)

  const ids = ['servicos', 'diferenciais', 'targetsmart']
  const links = ['Serviços', 'Diferenciais', 'TargetSmart']
  const ctaWpp = getWhatsappLink({
    phone: '11965763714',
    message: 'Olá! Vim através do site e gostaria de tirar umas dúvidas.',
  })

  const imagesLogo = [img1, img2, img3, img4, img5, img6, img7, img8]

  return (
    <div
      ref={containerRef}
      className="min-h-screen m-auto bg-background text-foreground bg-grain overflow-x-hidden selection:bg-primary selection:text-primary-foreground font-sans"
    >
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 m-auto flex justify-between items-center px-6 py-6 md:px-12 transition-all duration-300 bg-background/80 hover:bg-background/90 backdrop-blur-sm">
        <div className="flex justify-between max-w-[1215px] w-full m-auto">
          <div className="flex items-center gap-3">
            <div className="w-2 h-8 bg-primary rounded-full"></div>
            {/* <span className="font-serif text-xl tracking-tight text-white">
              Hyyperion
            </span> */}
            <img
              src={imgLogo}
              className="max-w-[100px] lg:max-w-[200px]"
              alt=""
            />
          </div>

          <div className="hidden md:flex text-[12px] 2xl:text-[16px] items-center gap-8 bg-black/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/5">
            {links.map((item, index) => (
              <Link
                to={ids[index]}
                smooth={true}
                duration={500}
                offset={-90}
                className="cursor-pointer cursor-pointer bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat bg-left-bottom transition-[background-size] duration-300 hover:bg-[length:100%_2px]"
              >
                {item}
              </Link>
            ))}
            <span className="w-px h-4 bg-white/20"></span>
            <a
              href={ctaWpp}
              target="_blank"
              className="text-sm text-primary hover:text-primary/80 transition-colors"
            >
              Fale Conosco
            </a>
          </div>

          <button
            className="lg:hidden p-2 z-50 md:hidden relative text-foreground "
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="text-primary" />
            ) : (
              <Menu width={30} height={30} className="text-primary" />
            )}
          </button>
        </div>
      </nav>
      {/* Sidebar Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 pt-24 px-6 z-40 w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed inset-0 pt-24 px-6 z-40 w-full"
          >
            <div className="flex flex-col gap-6 bg-black/90 max-w-[500px] text-center items-center p-4 text-lg mx-auto font-secondFont font-medium border-l border-r border-b border-primary/20 rounded-md">
              {links.map((item, index) => (
                <Link
                  to={ids[index]}
                  smooth={true}
                  duration={500}
                  offset={-90}
                  onClick={() => setActive(index)}
                  className={`cursor-pointer transition-all w-full ${
                    active === index ? 'text-primary' : 'text-textPadrao'
                  }`}
                >
                  {item}
                  {/* <hr className=" w-full" /> */}
                </Link>
              ))}
            </div>
          </motion.div>
          <div className="absolute z-0 inset-0 bg-black/70 h-screen"></div>
        </div>
      )}
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex flex-col justify-center px-6 md:px-12 pt-24 pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/40 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
          <img
            src={forestBg}
            alt="Forest"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 m-auto w-full max-w-[1215px]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-8 bg-primary"></span>
            <span className="text-primary text-sm uppercase tracking-widest font-medium">
              Consultoria Multidisciplinar
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.95] text-white mb-8"
          >
            Cresça como <br />
            uma <span className="italic text-primary/90">Sequoia.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-2xl text-white/80 font-light leading-relaxed max-w-xl mb-12 border-l border-white/20 pl-6"
          >
            Assessoria empresarial que combina expertise jurídica, gestão
            estratégica e desenvolvimento humano para construir empresas que
            prosperam por gerações.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 items-start sm:items-center"
          >
            <Button
              buttonLink={ctaWpp}
              className="bg-primary cursor-pointer text-background scale-105 hover:scale-100 hover:duration-500 hover:bg-white hover:text-black transition-all h-14 px-8 rounded-full text-lg"
            >
              Diagnóstico Gratuito
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <div className="flex gap-8 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <div className="text-xl font-serif text-white">85%</div>
                <div className="text-[10px] uppercase tracking-widest text-white/50">
                  TJR Projetada
                </div>
              </div>
              <div className="w-px bg-white/10 h-8 self-center"></div>
              <div>
                <div className="text-xl font-serif text-primary">R$ 8.8M</div>
                <div className="text-[10px] uppercase tracking-widest text-white/50">
                  Receita Ano 5
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Alert Banner */}
      <section className="bg-orange-900/20 border-y border-orange-500/20 py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-orange-500/5 animate-pulse"></div>
        <div className="container max-w-[1215px] px-6 md:px-12 mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <h3 className="text-orange-200 font-serif text-xl">
              Não Fique Para Trás na Transformação Digital
            </h3>
            <p className="text-orange-200/60 text-sm mt-1">
              Sua empresa pode estar perdendo competitividade agora mesmo.
            </p>
          </div>
          <Button
            buttonLink={ctaWpp}
            variant="outline"
            className="bg-primary cursor-pointer scale-105 hover:scale-100 hover:duration-500 text-background h-14 px-8 rounded-full text-lg hover:bg-white hover:text-black transition-all"
          >
            Falar com Especialista
          </Button>
        </div>
      </section>
      {/* Main Services Grid */}
      <section
        id="servicos"
        className="py-24 px-6 md:px-12 bg-background relative z-10 max-w-[1215px] m-auto"
      >
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-primary text-xs uppercase tracking-widest font-medium mb-3 block">
            Soluções Integradas
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Serviços que Fazem a Diferença
          </h2>
          <p className="text-muted-foreground text-lg font-light">
            Uma abordagem multidisciplinar única que combina expertise jurídica
            consolidada com visão estratégica moderna.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={<Shield className="w-6 h-6" />}
            title="Assessoria Jurídica Completa"
            desc="Contratos, trabalhista, consumidor e compliance com LGPD."
            tags={['Contratos', 'LGPD', 'Trabalhista']}
          />
          <ServiceCard
            icon={<BarChart3 className="w-6 h-6" />}
            title="Consultoria de Gestão"
            desc="Desenvolvimento de competências gerenciais e estratégias."
            tags={['Estratégia', 'Processos', 'Financeiro']}
          />
          <ServiceCard
            icon={<Users className="w-6 h-6" />}
            title="Consultoria para Escritórios"
            desc="Gestão especializada para crescimento de escritórios jurídicos."
            tags={['Gestão Legal', 'Marketing', 'Captação']}
          />
          <ServiceCard
            icon={<Award className="w-6 h-6" />}
            title="Registro de Marcas"
            desc="Proteção completa da propriedade intelectual da sua empresa."
            tags={['Marcas', 'Patentes', 'Direitos']}
          />
          <ServiceCard
            icon={<Search className="w-6 h-6" />}
            title="Estudo de Viabilidade"
            desc="Análise completa antes do registro para garantir sucesso."
            tags={['Pesquisa', 'Análise', 'Estratégia']}
          />
          <ServiceCard
            icon={<Zap className="w-6 h-6" />}
            title="Transformação Digital"
            desc="Digitalização de processos e implementação de tecnologias."
            tags={['Automação', 'Sistemas', 'Dados']}
          />
        </div>
      </section>
      {/* Data Services - Structured List */}
      <section className="py-24 px-6 md:px-12 bg-black/20 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="bg-white/10 text-white px-3 py-1 rounded-full text-xs uppercase tracking-widest">
              Tecnologia Avançada
            </span>
            <h2 className="font-serif text-4xl text-white mt-6 mb-4">
              Serviços Especializados em Dados
            </h2>
            <p className="text-muted-foreground">
              Soluções tecnológicas para análise de dados, prevenção à fraude e
              gestão de risco.
            </p>
          </div>

          <div className="space-y-12">
            <DataCategory
              title="CRM & Vendas"
              icon={<Users className="w-5 h-5" />}
            >
              <DataItem
                title="Higienização de Dados"
                desc="Mantenha seu cadastro sempre íntegro e atualizado."
              />
              <DataItem
                title="Enriquecimento de Dados"
                desc="Adicione camadas de inteligência à sua base atual."
              />
              <DataItem
                title="Validação de Contatos"
                desc="Verifique e-mails e telefones em tempo real."
              />
            </DataCategory>

            <DataCategory
              title="Concessão de Crédito"
              icon={<Database className="w-5 h-5" />}
            >
              <DataItem
                title="Consulta Cadastral PF/PJ"
                desc="Valide informações e proteja seu negócio."
              />
              <DataItem
                title="Score de Crédito"
                desc="Análise preditiva de comportamento de pagamento."
              />
              <DataItem
                title="Limite Sugerido"
                desc="Recomendações baseadas em capacidade de pagamento."
              />
            </DataCategory>

            <DataCategory
              title="Prevenção à Fraude"
              icon={<Lock className="w-5 h-5" />}
            >
              <DataItem
                title="Background Check"
                desc="Verificação completa de antecedentes."
              />
              <DataItem
                title="Validação de Identidade"
                desc="Biometria facial e documentoscopia."
              />
              <DataItem
                title="Monitoramento Contínuo"
                desc="Alertas sobre alterações cadastrais."
              />
            </DataCategory>
          </div>
        </div>
      </section>
      {/* Diferenciais Section */}
      <section id="diferenciais" className="py-24 px-6 md:px-12 bg-background">
        <div className="flex flex-col lg:flex-row gap-16 items-center max-w-[1215px] m-auto">
          <div className="lg:w-1/2 relative">
            <div className="aspect-[4/4] rounded-sm overflow-hidden relative">
              <img
                src={sequoiaUp}
                alt="Looking up"
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl text-white">
              Diferenciais Únicos no Mercado
            </h2>
            <div className="space-y-6">
              <DifferentialItem
                number="01"
                title="Visão 360º"
                desc="Integramos jurídico, gestão e tecnologia em uma única estratégia coerente."
              />
              <DifferentialItem
                number="02"
                title="Foco em Resultados"
                desc="Não entregamos apenas relatórios, entregamos crescimento mensurável."
              />
              <DifferentialItem
                number="03"
                title="Atendimento Senior"
                desc="Você é atendido por sócios e especialistas, não por estagiários."
              />
              <DifferentialItem
                number="04"
                title="Tecnologia Própria"
                desc="Ferramentas exclusivas de análise de dados e automação."
              />
            </div>
          </div>
        </div>
      </section>
      {/* Philosophy Section */}
      <section className="py-24 px-6 md:px-12 bg-white/5 border-y border-white/5">
        <div className="text-center mb-16 max-w-[1215px] m-auto">
          <span className="text-primary text-xs uppercase tracking-widest font-medium">
            Sobre Nós
          </span>
          <h2 className="font-serif text-4xl text-white mt-4">
            Conheça a Hyyperion
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1215px] m-auto">
          <PhilosophyCard
            title="Nossa Missão"
            desc="Capacitar empresas para crescerem de forma estruturada e sustentável, garantindo sua longevidade."
          />
          <PhilosophyCard
            title="Nossa Visão"
            desc="Ser referência nacional em consultoria multidisciplinar, reconhecida pela excelência e inovação."
          />
          <PhilosophyCard
            title="Nossos Valores"
            desc="Ética inegociável, transparência, compromisso com o resultado e valorização humana."
          />
        </div>

        <div className="mt-16 max-w-[1215px] m-auto p-8 bg-background border border-white/10 rounded-2xl flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-2/3">
            <h3 className="text-2xl font-serif text-white mb-4">
              Por que a filosofia da Sequoia?
            </h3>
            <p className="text-muted-foreground font-light leading-relaxed">
              A Sequoia é um organismo que cresce devagar, mas de forma
              constante e inabalável. Suas raízes são profundas e
              interconectadas. Assim enxergamos sua empresa: um ecossistema vivo
              que precisa de bases sólidas para atingir alturas impressionantes.
            </p>
          </div>
          <div className="md:w-1/3">
            <div className="aspect-video rounded-lg overflow-hidden relative">
              <img
                src={sequoiaUp}
                alt="Philosophy"
                className="object-cover w-full h-full opacity-60"
              />
            </div>
          </div>
        </div>
      </section>
      {/* TargetSmart Section */}
      <section
        id="targetsmart"
        className="relative py-32 px-6 md:px-12 overflow-hidden "
      >
        <div className="absolute inset-0">
          <img
            src={dataBg}
            alt="Data Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-background/90"></div>
        </div>

        <div className="relative z-10 container mx-auto max-w-[1215px]">
          <div className="text-center mb-12">
            <span className="text-primary font-mono text-xs uppercase tracking-widest">
              Powered by
            </span>
            <h2 className="text-5xl md:text-6xl font-serif text-white mt-2 tracking-tight">
              TARGET <br className="md:hidden" />
              <span className="text-primary italic">SMART</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mt-6 text-lg">
              A plataforma de inteligência de dados exclusiva da Hyyperion.
              Transforme informações brutas em decisões estratégicas de alto
              impacto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 bg-black/40 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-md">
            <div className="space-y-8">
              <h3 className="text-2xl text-white font-medium">
                Uma Aliada Estratégica
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Imagine ter o poder de prever riscos antes que eles aconteçam e
                identificar oportunidades que seus concorrentes não veem. A
                TargetSmart processa milhões de datapoints em tempo real.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Monitoramento em Tempo Real</span>
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Dashboards Personalizáveis</span>
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>API Integrável</span>
                </li>
              </ul>
            </div>
            <div className="space-y-8 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12">
              <h3 className="text-2xl text-white font-medium">
                Benefícios Reais
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-medium mb-1">
                    Redução de Inadimplência
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Identifique clientes de risco antes da venda.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">
                    Aumento de Conversão
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Foque seus esforços nos leads com maior potencial.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">
                    Compliance Automático
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Esteja sempre em dia com regulações e LGPD.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button
              buttonLink={ctaWpp}
              className="bg-primary w-[90%] cursor-pointer scale-105 hover:scale-100 hover:duration-500 text-background h-14 px-8 rounded-full text-lg hover:bg-white hover:text-black transition-all"
            >
              Solicitar Demo TargetSmart
            </Button>
          </div>
        </div>
      </section>

      {/*section nova */}
      <section className="bg-orange-950/10 py-16 px-6">
        <div className="container max-w-[1215px] mx-auto">
          {/* Cabeçalho */}
          <div className="text-center mb-12">
            <span className="text-primary font-mono text-xs uppercase tracking-widest">
              Parcerias Estratégicas
            </span>
            <h2 className="text-white font-serif text-3xl md:text-4xl mt-4">
              Parceiros Oficiais da Hyyperion
            </h2>
            <p className="text-orange-200/60 text-sm md:text-base mt-4 max-w-2xl mx-auto">
              Trabalhamos com os melhores parceiros do mercado para oferecer
              soluções completas e integradas aos nossos clientes.
            </p>
          </div>

          {/* Grid de Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {imagesLogo.map((logo, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={logo}
                  className="max-w-[200px] max-h-full w-auto h-auto object-contain transition-all"
                />
              </div>
            ))}
          </div>

          {/* Seção CTA Inferior (Opcional, conforme a imagem) */}
          <div className="mt-16 text-center md:text-start max-w-[1215px] justify-evenly m-auto p-8 bg-background border border-white/10 rounded-2xl flex flex-col md:flex-row gap-8 items-center">
            <div>
              {' '}
              <h3 className="text-primary font-bold text-2xl mb-2">
                Quer se tornar um parceiro da Hyyperion?
              </h3>
              <p className="text-white text-sm mb-6 max-w-xl mx-auto">
                Estamos sempre em busca de parcerias estratégicas que agreguem
                valor aos nossos clientes. Entre em contato e descubra como
                podemos crescer juntos.
              </p>
            </div>
            <Button
              buttonLink={ctaWpp}
              className="bg-primary cursor-pointer scale-105 hover:scale-100 hover:duration-500 text-background h-14 px-8 rounded-full text-lg hover:bg-white hover:text-black transition-all"
            >
              Fale sobre parcerias
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white text-background">
        <div className="container px-6 md:px-12 mx-auto max-w-[1215px]">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl">Números que Impressionam</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem value="98%" label="Satisfação" />
            <StatItem value="200+" label="Empresas" />
            <StatItem value="37%" label="Crescimento Médio" />
            <StatItem value="15" label="Anos de Mercado" />
          </div>
        </div>
      </section>
      {/* Pricing / Stages */}
      {/* <section
        id="planos"
        className="py-24 px-6 md:px-12 bg-background border-t border-white/5"
      >
        <div className="text-center mb-16">
          <span className="text-primary text-xs uppercase tracking-widest">
            Investimento
          </span>
          <h2 className="font-serif text-4xl text-white mt-4">
            Soluções para Cada Estágio
          </h2>
          <p className="text-muted-foreground mt-4">
            Escolha o plano ideal para o momento do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard
            title="Start"
            price="R$ 2.500"
            desc="Para empresas iniciando a estruturação."
            features={[
              'Diagnóstico Inicial',
              'Gestão Financeira Básica',
              'Contratos Essenciais',
              'Suporte por E-mail',
            ]}
          />
          <PricingCard
            title="Crescimento"
            price="R$ 5.000"
            desc="Para empresas em expansão acelerada."
            isPopular
            features={[
              'Tudo do Start',
              'Planejamento Estratégico',
              'Gestão de Processos',
              'TargetSmart Basic',
              'Reuniões Mensais',
            ]}
          />
          <PricingCard
            title="Liderança"
            price="R$ 10.000"
            desc="Para empresas que buscam dominar o mercado."
            features={[
              'Tudo do Crescimento',
              'Consultoria Full-Service',
              'TargetSmart Pro',
              'Comitê Executivo',
              'Mentoria Exclusiva',
            ]}
          />
        </div>
      </section> */}
      {/* Footer CTA */}
      <section className="py-32 px-6 md:px-12 bg-background relative overflow-hidden text-center border-t border-white/5">
        <div className="absolute inset-0 bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <h2 className="font-serif text-5xl md:text-7xl text-white leading-tight">
            Pronto para crescer como uma{' '}
            <span className="text-primary italic">Sequoia?</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            Agende uma conversa com nossos sócios e descubra onde sua empresa
            pode chegar.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button
              buttonLink={ctaWpp}
              variant="outline"
              className="bg-primary cursor-pointer scale-105 hover:scale-100 hover:duration-500 text-background h-14 px-8 rounded-full text-lg hover:bg-white hover:text-black transition-all"
            >
              Falar com Consultor
            </Button>
            <div className="relative">
              <input
                type="email"
                placeholder="Seu e-mail corporativo"
                className="h-14 px-6 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 w-full sm:w-80 transition-all"
              />
            </div>
          </div>
        </div>
      </section>
      <footer className="py-12 border-t border-white/5 bg-background text-center md:text-left px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground gap-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-primary font-serif">
              H
            </div>
            <span>© 2024 Hyyperion Consult. Todos os direitos reservados.</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-white">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Subcomponents
function ServiceCard({ icon, title, desc, tags }: any) {
  return (
    <div className="group p-8 rounded-2xl cursor-pointer bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-primary/30 transition-all duration-300">
      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white mb-6 group-hover:bg-primary group-hover:text-background transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-serif text-white mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
        {desc}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag: string, i: number) => (
          <span
            key={i}
            className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-white/5 text-white/50 border border-white/5"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

function DataCategory({ title, icon, children }: any) {
  return (
    <div className="border-l-2 border-white/10 pl-8 relative">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-white/10 flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
      </div>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-primary">{icon}</span>
        <h3 className="text-xl text-white font-medium">{title}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">{children}</div>
    </div>
  )
}

function DataItem({ title, desc }: any) {
  return (
    <div className="bg-white/5 p-4 rounded-lg border border-white/5 hover:border-white/20 transition-colors cursor-pointer">
      <h4 className="text-white font-medium text-sm mb-1">{title}</h4>
      <p className="text-xs text-muted-foreground">{desc}</p>
    </div>
  )
}

function DifferentialItem({ number, title, desc }: any) {
  return (
    <div className="flex gap-6 items-start group">
      <div className="font-serif text-3xl text-primary transition-colors">
        {number}
      </div>
      <div>
        <h3 className="text-xl text-white font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

function PhilosophyCard({ title, desc }: any) {
  return (
    <div className="text-center p-8 rounded-2xl bg-background border border-white/5 hover:-translate-y-2 transition-transform duration-300">
      <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
        <Globe className="w-5 h-5" />
      </div>
      <h3 className="text-lg font-serif text-white mb-4">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  )
}

function StatItem({ value, label }: any) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-serif text-background font-medium mb-2">
        {value}
      </div>
      <div className="text-xs uppercase tracking-widest text-background/60">
        {label}
      </div>
    </div>
  )
}

function PricingCard({ title, price, desc, features, isPopular }: any) {
  return (
    <div
      className={`relative p-8 rounded-3xl border flex flex-col ${
        isPopular
          ? 'bg-white/10 border-primary/50'
          : 'bg-white/5 border-white/10'
      }`}
    >
      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-background text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
          Mais Escolhido
        </div>
      )}
      <div className="mb-8">
        <h3 className="text-xl font-serif text-white">{title}</h3>
        <p className="text-sm text-muted-foreground mt-2 h-10">{desc}</p>
      </div>
      <div className="mb-8">
        <span className="text-4xl font-serif text-white">{price}</span>
        <span className="text-sm text-muted-foreground">/mês</span>
      </div>
      <ul className="space-y-4 mb-8 flex-1">
        {features.map((feature: string, i: number) => (
          <li key={i} className="flex items-start gap-3 text-sm text-white/80">
            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        className={`w-full h-12 rounded-xl ${
          isPopular
            ? 'bg-primary scale-105 hover:scale-100 hover:duration-500 text-background h-14 px-8 rounded-2xl text-lg hover:bg-white hover:text-black transition-all cursor-pointer'
            : 'bg-white/10 scale-105 hover:scale-100 hover:duration-500 text-background h-14 px-8 rounded-2xl text-lg hover:bg-primary hover:text-black transition-all cursor-pointer'
        }`}
      >
        Começar Agora
      </Button>
    </div>
  )
}
