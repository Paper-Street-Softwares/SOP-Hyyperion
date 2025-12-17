import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight,
  Menu,
  CheckCircle2,
  TrendingUp,
  Shield,
  Search,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import forestBg from "@assets/generated_images/realistic_misty_forest_with_natural_light.png";

export default function Home() {
  const containerRef = useRef(null);
  
  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground bg-grain overflow-x-hidden selection:bg-primary selection:text-primary-foreground font-sans">
      
      {/* Navbar - Transparent & Floating */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 md:px-12">
        <div className="flex items-center gap-3">
          <div className="w-2 h-8 bg-primary rounded-full"></div>
          <span className="font-serif text-xl tracking-tight text-white">Hyperion</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 bg-black/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/5">
          <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Serviços</a>
          <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Método</a>
          <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Cases</a>
          <span className="w-px h-4 bg-white/20"></span>
          <a href="#" className="text-sm text-primary hover:text-primary/80 transition-colors">Fale Conosco</a>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden text-white">
          <Menu className="w-6 h-6" />
        </Button>
      </nav>

      {/* Hero Section - Asymmetrical & Editorial */}
      <section className="relative min-h-[100vh] flex flex-col justify-center px-6 md:px-12 pt-20">
        {/* Background Image - Full bleed but darkened */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
          <img 
            src={forestBg} 
            alt="Forest" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 max-w-4xl">
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1 }}
             className="flex items-center gap-3 mb-6"
          >
             <span className="h-px w-8 bg-primary"></span>
             <span className="text-primary text-sm uppercase tracking-widest font-medium">Consultoria Multidisciplinar</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.95] text-white mb-8"
          >
            Cresça como <br/>
            uma <span className="italic text-primary/90">Sequoia.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-2xl text-white/70 font-light leading-relaxed max-w-xl mb-12 border-l border-white/20 pl-6"
          >
            Não buscamos o crescimento rápido que quebra. Buscamos a solidez que constrói impérios. Direito, Gestão e Dados em uníssono.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Button className="bg-primary text-background hover:bg-white hover:text-black transition-all h-14 px-8 rounded-full text-lg">
              Agendar Diagnóstico
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <div className="flex items-center gap-4 text-white/60">
              <div className="flex -space-x-3">
                 <div className="w-10 h-10 rounded-full bg-white/10 border border-background"></div>
                 <div className="w-10 h-10 rounded-full bg-white/20 border border-background"></div>
                 <div className="w-10 h-10 rounded-full bg-white/30 border border-background flex items-center justify-center text-xs text-white font-medium">+200</div>
              </div>
              <span className="text-sm">Empresas assessoradas</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Divider - Organic Curve */}
      <div className="w-full h-24 bg-background relative -mt-24 z-30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      </div>

      {/* Services - Editorial List (Not Cards) */}
      <section className="py-24 px-6 md:px-12 bg-background relative z-30">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
           <h2 className="font-serif text-4xl md:text-5xl text-white">Nossas Frentes <br/>de Atuação</h2>
           <p className="text-muted-foreground text-right max-w-sm mt-6 md:mt-0">
             Uma abordagem holística para resolver problemas complexos que consultorias tradicionais ignoram.
           </p>
        </div>

        <div className="space-y-4">
          <ServiceRow 
            number="01" 
            title="Assessoria Jurídica" 
            desc="Contratos, LGPD, Societário." 
            details="Proteção jurídica proativa que viabiliza negócios em vez de travá-los."
          />
          <ServiceRow 
            number="02" 
            title="Gestão Empresarial" 
            desc="Processos, Finanças, RH." 
            details="Otimização operacional para maximizar margens e eficiência."
          />
          <ServiceRow 
            number="03" 
            title="Inteligência de Dados" 
            desc="CRM, Risco, Analytics." 
            details="Decisões baseadas em fatos e monitoramento de mercado em tempo real."
          />
          <ServiceRow 
            number="04" 
            title="Propriedade Intelectual" 
            desc="Marcas, Patentes, Softwares." 
            details="Blindagem dos ativos intangíveis mais valiosos da sua organização."
          />
        </div>
      </section>

      {/* Featured Insight - Large Image & Text */}
      <section className="py-24 px-6 md:px-12 bg-secondary/20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-sm">
             <img 
               src={forestBg} 
               alt="Strategic Vision" 
               className="absolute inset-0 w-full h-full object-cover scale-125 hover:scale-100 transition-transform duration-[1.5s] ease-in-out grayscale hover:grayscale-0"
             />
             <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
             
             <div className="absolute bottom-8 left-8 right-8 bg-black/60 backdrop-blur-md p-6 border border-white/10">
               <div className="flex items-center gap-2 text-primary mb-2">
                 <TrendingUp className="w-4 h-4" />
                 <span className="text-xs uppercase tracking-widest">Case de Sucesso</span>
               </div>
               <h3 className="text-xl text-white font-serif">Reestruturação Grupo Alpha</h3>
               <p className="text-white/70 text-sm mt-2">+45% de EBITDA em 12 meses.</p>
             </div>
          </div>
          
          <div className="space-y-8">
             <span className="text-primary text-sm uppercase tracking-widest font-medium">Por que a Hyperion?</span>
             <h2 className="font-serif text-4xl md:text-6xl leading-tight text-white">
               A maioria das consultorias entrega relatórios. <br/>
               <span className="text-white/30">Nós entregamos legado.</span>
             </h2>
             <p className="text-muted-foreground text-lg leading-relaxed">
               Acreditamos que uma empresa é um organismo vivo. Mexer no jurídico afeta o financeiro. Alterar o processo afeta as pessoas. Nossa visão sistêmica garante que o crescimento seja saudável em todas as direções.
             </p>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
               <Feature icon={<Shield className="w-5 h-5" />} title="Segurança Jurídica" />
               <Feature icon={<TrendingUp className="w-5 h-5" />} title="Expansão Controlada" />
               <Feature icon={<Search className="w-5 h-5" />} title="Visão de Dados" />
               <Feature icon={<Users className="w-5 h-5" />} title="Cultura Forte" />
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 md:px-12 bg-background border-t border-white/5">
         <div className="max-w-xl">
           <h2 className="font-serif text-5xl md:text-7xl text-white mb-8">Vamos conversar sobre o futuro.</h2>
           <div className="flex flex-wrap gap-4">
             <Button className="bg-white text-black hover:bg-primary hover:text-white rounded-full h-12 px-8">
               contato@hyperion.com
             </Button>
             <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full h-12 px-8">
               (11) 99999-9999
             </Button>
           </div>
         </div>
         
         <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-white/30 gap-4">
           <span>© Hyperion Consultoria 2024</span>
           <div className="flex gap-6">
             <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
             <a href="#" className="hover:text-white transition-colors">Instagram</a>
             <a href="#" className="hover:text-white transition-colors">Legal</a>
           </div>
         </div>
      </footer>

    </div>
  );
}

// Components

function ServiceRow({ number, title, desc, details }: any) {
  return (
    <div className="group border-b border-white/5 py-10 transition-colors hover:bg-white/[0.02] -mx-4 px-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-baseline gap-8 md:w-1/3">
          <span className="font-mono text-xs text-primary/50 group-hover:text-primary transition-colors">/{number}</span>
          <h3 className="text-3xl font-serif text-white group-hover:translate-x-2 transition-transform duration-300">{title}</h3>
        </div>
        
        <div className="md:w-1/3">
          <p className="text-white/60 font-medium">{desc}</p>
        </div>
        
        <div className="md:w-1/3 flex items-center justify-between">
           <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-xs">{details}</p>
           <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-primary group-hover:text-background group-hover:border-primary">
             <ArrowRight className="w-4 h-4" />
           </div>
        </div>
      </div>
    </div>
  )
}

function Feature({ icon, title }: any) {
  return (
    <div className="flex items-center gap-3 text-white/80">
      <div className="text-primary">{icon}</div>
      <span>{title}</span>
    </div>
  )
}
