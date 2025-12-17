import { motion } from "framer-motion";
import { 
  Scale, 
  Briefcase, 
  Users, 
  Copyright, 
  Search, 
  Zap, 
  Database, 
  ShieldCheck, 
  CreditCard, 
  TrendingUp,
  ArrowRight,
  Menu,
  Phone
} from "lucide-react";
import sequoiaBg from "@assets/generated_images/cinematic_moody_sequoia_forest_background.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] as const // Fixed TS error
    } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-md bg-background/50 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="font-serif font-bold text-primary-foreground">H</span>
          </div>
          <span className="font-serif text-xl tracking-tight font-medium">Hyperion</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Serviços</a>
          <a href="#" className="hover:text-primary transition-colors">Diferenciais</a>
          <a href="#" className="hover:text-primary transition-colors">Planos</a>
          <a href="#" className="hover:text-primary transition-colors">Sobre</a>
        </div>

        <Button variant="outline" className="hidden md:flex border-primary/20 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
          <Phone className="w-4 h-4 mr-2" />
          Fale Conosco
        </Button>

        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="w-6 h-6" />
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[110vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image with Parallax-like feel (fixed) */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90 z-10" />
          <img 
            src={sequoiaBg} 
            alt="Sequoia Forest" 
            className="w-full h-full object-cover object-center scale-105"
          />
        </div>

        <div className="container relative z-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-xs md:text-sm text-primary font-medium tracking-wide uppercase"
            >
              <TrendingUp className="w-4 h-4" />
              <span>Mercado em crescimento de 50% em 2025</span>
            </motion.div>

            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[1.1]"
            >
              Cresça como uma <span className="text-primary italic">Sequoia</span>
            </motion.h1>

            <motion.p 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light"
            >
              Assessoria empresarial multidisciplinar que combina expertise jurídica, gestão estratégica e desenvolvimento humano para construir empresas que prosperam por gerações.
            </motion.p>

            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-md px-8 h-14 rounded-full font-medium transition-transform hover:scale-105">
                Diagnóstico Gratuito
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail" 
                  className="h-14 px-6 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 w-full sm:w-80 transition-all"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-12 left-0 right-0 px-6"
        >
          <div className="container max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 bg-black/20 backdrop-blur-xl border border-white/5 rounded-2xl p-8 shadow-2xl">
              <div className="text-center md:text-left space-y-1">
                <div className="text-4xl md:text-5xl font-serif text-white font-medium">85%</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">TJR Projetada</div>
              </div>
              <div className="text-center md:text-left space-y-1 md:border-l md:border-white/10 md:pl-8">
                <div className="text-4xl md:text-5xl font-serif text-primary font-medium">R$ 8.8M</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Receita Ano 5</div>
              </div>
              <div className="text-center md:text-left space-y-1 md:border-l md:border-white/10 md:pl-8">
                <div className="text-4xl md:text-5xl font-serif text-white font-medium">37%</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Margem Líquida</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32 bg-background relative z-20">
        <div className="container px-6 md:px-12 mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6"
          >
            <div className="space-y-4 max-w-2xl">
              <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 px-3 py-1 uppercase tracking-widest text-[10px]">Soluções Integradas</Badge>
              <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
                Serviços que fazem a <span className="italic text-muted-foreground">diferença</span>
              </h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                Uma abordagem multidisciplinar única que combina expertise jurídica consolidada com visão estratégica moderna.
              </p>
            </div>
            
            <Button variant="link" className="text-primary p-0 h-auto font-medium hover:text-primary/80">
              Ver todos os serviços <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <ServiceCard 
              icon={<Scale className="w-6 h-6" />}
              title="Assessoria Jurídica Completa"
              description="Contratos, direito do trabalho, consumidor e compliance com LGPD."
              tags={["Contratos estratégicos", "Compliance LGPD", "Direito trabalhista"]}
              color="bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
            />
            <ServiceCard 
              icon={<Briefcase className="w-6 h-6" />}
              title="Consultoria de Gestão Empresarial"
              description="Desenvolvimento de competências gerenciais e estratégias de crescimento."
              tags={["Planejamento estratégico", "Gestão de processos", "Análise financeira"]}
              color="bg-amber-500/10 text-amber-400 border-amber-500/20"
            />
            <ServiceCard 
              icon={<Users className="w-6 h-6" />}
              title="Consultoria para Escritórios"
              description="Especializada em gestão e crescimento de escritórios jurídicos."
              tags={["Gestão jurídica", "Marketing para advogados", "Captação de clientes"]}
              color="bg-blue-500/10 text-blue-400 border-blue-500/20"
            />
            <ServiceCard 
              icon={<Copyright className="w-6 h-6" />}
              title="Registro de Marcas e Patentes"
              description="Proteção completa da propriedade intelectual da sua empresa."
              tags={["Registro de marcas", "Proteção de patentes", "Defesa de direitos"]}
              image={sequoiaBg} // Reusing image for texture variation
            />
            <ServiceCard 
              icon={<Search className="w-6 h-6" />}
              title="Estudo de Viabilidade"
              description="Análise completa antes do registro para garantir sucesso."
              tags={["Pesquisa de anterioridade", "Análise de viabilidade", "Estratégia de registro"]}
              color="bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
            />
            <ServiceCard 
              icon={<Zap className="w-6 h-6" />}
              title="Transformação Digital"
              description="Digitalização de processos e implementação de tecnologias."
              tags={["Automação de processos", "Sistemas integrados", "Análise de dados"]}
              color="bg-purple-500/10 text-purple-400 border-purple-500/20"
            />
          </motion.div>
        </div>
      </section>

      {/* Data Section - Darker/Tech vibe */}
      <section className="py-24 md:py-32 bg-black/40 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container px-6 md:px-12 mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <Badge variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-none">Tecnologia Avançada</Badge>
            <h2 className="font-serif text-4xl md:text-5xl text-white">Serviços Especializados em Dados</h2>
            <p className="text-muted-foreground text-lg font-light">
              Soluções tecnológicas avançadas para análise de dados, prevenção à fraude e gestão de risco empresarial.
            </p>
          </div>

          <div className="space-y-16">
            {/* Group 1 */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 text-2xl font-serif text-white border-b border-white/10 pb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Database className="w-5 h-5" />
                </div>
                CRM & Vendas
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <DataCard 
                   title="Higienização e Enriquecimento" 
                   desc="Mantenha seu cadastro sempre íntegro, atualizado e com informações que permitem sua empresa reter e fidelizar clientes."
                 />
                 <DataCard 
                   title="Atualização de Dados" 
                   desc="Melhore a comunicação com seus clientes. Aumente seus canais de contato, remova telefones incorretos e e-mails inválidos."
                 />
                 <DataCard 
                   title="Onboarding de Dados" 
                   desc="Melhore a experiência dos seus clientes, ofereça um processo de onboarding ágil, simples e sem atrito."
                 />
              </div>
            </div>

            {/* Group 2 */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 text-2xl font-serif text-white border-b border-white/10 pb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                  <CreditCard className="w-5 h-5" />
                </div>
                Concessão de Crédito
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <DataCard 
                   title="Consulta Cadastral PF" 
                   desc="Valide informações cadastrais dos seus clientes e proteja seu negócio de clientes fraudadores e inadimplência."
                 />
                 <DataCard 
                   title="Consulta Cadastral PJ" 
                   desc="Valide informações cadastrais dos seus clientes e proteja seu negócio de clientes fraudadores e inadimplência."
                 />
                 <DataCard 
                   title="Monitoramento de Crédito" 
                   desc="Monitore periodicamente o comportamento de crédito dos seus clientes. Receba alertas sobre qualquer alteração."
                 />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-background">
        <div className="container px-6 md:px-12 mx-auto flex flex-col md:flex-row items-center justify-between gap-6 opacity-60 hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground">H</div>
            <span className="font-serif tracking-tight">Hyperion Consult © 2024</span>
          </div>
          <div className="text-sm text-muted-foreground">
            Feito com excelência para o futuro.
          </div>
        </div>
      </footer>
    </div>
  );
}

// Subcomponents

function ServiceCard({ icon, title, description, tags, color, image }: any) {
  return (
    <Card className={`group relative overflow-hidden bg-card border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-1 h-full flex flex-col ${image ? "border-0" : ""}`}>
      {image && (
        <>
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40 mix-blend-overlay" style={{ backgroundImage: `url(${image})` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </>
      )}
      
      <CardHeader className="relative z-10 pb-2">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${color || "bg-white/5 text-white border border-white/10"}`}>
          {icon}
        </div>
        <CardTitle className="font-serif text-2xl leading-tight group-hover:text-primary transition-colors">{title}</CardTitle>
      </CardHeader>
      
      <CardContent className="relative z-10 space-y-6 flex-grow flex flex-col justify-between">
        <p className="text-muted-foreground font-light leading-relaxed">{description}</p>
        
        <div className="space-y-2 pt-4 border-t border-white/5">
          {tags.map((tag: string, i: number) => (
            <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground/80 group-hover:text-white transition-colors">
              <div className="w-1 h-1 rounded-full bg-primary/50" />
              {tag}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function DataCard({ title, desc }: any) {
  return (
    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group">
      <h3 className="text-lg font-medium text-white mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {desc}
      </p>
    </div>
  )
}
