import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight,
  ChevronDown,
  ArrowUpRight,
  Circle,
  Play
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import abstractBg from "@assets/generated_images/abstract_architectural_wood_and_glass_structure_in_forest.png";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax for hero image
  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "20%"]);
  
  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground font-sans">
      
      {/* Navigation - Minimal & Top Aligned */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 mix-blend-difference text-white">
        <span className="font-sans text-xs tracking-widest uppercase font-semibold">Hyperion Consult</span>
        <div className="hidden md:flex gap-8 text-xs tracking-widest uppercase">
          <a href="#" className="hover:text-primary transition-colors">Expertise</a>
          <a href="#" className="hover:text-primary transition-colors">Método</a>
          <a href="#" className="hover:text-primary transition-colors">Insights</a>
        </div>
        <Button variant="outline" className="rounded-full border-white/20 hover:bg-white hover:text-black hover:border-white transition-all text-xs uppercase tracking-widest h-9 px-6 bg-transparent text-white">
          Contato
        </Button>
      </nav>

      {/* Hero Section - Swiss Layout */}
      <section className="relative h-screen flex flex-col md:flex-row border-b border-white/10">
        {/* Left: Typography & Content */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative z-10 bg-background/90 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none">
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-[1px] bg-primary"></div>
              <span className="text-primary text-xs uppercase tracking-[0.2em]">Consultoria Estratégica</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-6xl md:text-8xl leading-[0.9] font-normal mb-8 text-balance"
            >
              Crescimento <br/>
              <span className="italic text-white/50">perene</span> e <br/>
              estruturado.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-muted-foreground text-lg font-light leading-relaxed max-w-md mb-12"
            >
              Unimos rigor jurídico e inteligência de dados para construir empresas que atravessam gerações.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-6"
            >
              <Button className="rounded-full h-14 w-14 p-0 bg-primary text-background hover:bg-white hover:text-black transition-all duration-500">
                <ArrowRight className="w-5 h-5" />
              </Button>
              <span className="text-xs uppercase tracking-widest text-white/60">Iniciar Diagnóstico</span>
            </motion.div>
          </div>
        </div>

        {/* Right: Abstract Visual */}
        <div className="absolute inset-0 md:relative md:w-1/2 h-full overflow-hidden border-l border-white/10">
          <motion.div style={{ y: heroY }} className="w-full h-[120%] -mt-[10%]">
            <img 
              src={abstractBg} 
              alt="Abstract Architecture" 
              className="w-full h-full object-cover opacity-40 md:opacity-100 grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
            />
          </motion.div>
          
          {/* Decorative Grid Overlay */}
          <div className="absolute inset-0 pointer-events-none grid grid-cols-3 grid-rows-3 border-collapse opacity-20">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="border border-white/20"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats ticker */}
      <div className="border-b border-white/10 overflow-hidden bg-background">
        <div className="flex whitespace-nowrap py-6 animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 md:gap-24 px-12 opacity-50">
              <span className="text-4xl font-serif">R$ 8.8M <span className="text-xs font-sans tracking-widest uppercase ml-2">Receita Ano 5</span></span>
              <Circle className="w-2 h-2 fill-primary text-primary" />
              <span className="text-4xl font-serif">85% <span className="text-xs font-sans tracking-widest uppercase ml-2">TJR Projetada</span></span>
              <Circle className="w-2 h-2 fill-primary text-primary" />
              <span className="text-4xl font-serif">37% <span className="text-xs font-sans tracking-widest uppercase ml-2">Margem Líquida</span></span>
              <Circle className="w-2 h-2 fill-primary text-primary" />
            </div>
          ))}
        </div>
      </div>

      {/* Services - Grid System */}
      <section className="py-32 px-8 md:px-16">
        <div className="flex flex-col md:flex-row gap-16 mb-24">
          <div className="w-full md:w-1/3">
            <span className="block w-full h-[1px] bg-white/20 mb-8"></span>
            <span className="text-primary text-xs uppercase tracking-widest mb-4 block">01 / Soluções</span>
            <h2 className="font-serif text-5xl leading-tight">Expertise 360º</h2>
          </div>
          <div className="w-full md:w-2/3 flex flex-col justify-end">
             <p className="text-xl text-muted-foreground font-light max-w-xl ml-auto">
               Uma abordagem integrada que elimina silos entre jurídico, gestão e tecnologia.
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
           <ServiceItem 
             number="01" 
             title="Jurídico & Compliance" 
             desc="Contratos, LGPD e blindagem patrimonial para operações seguras." 
           />
           <ServiceItem 
             number="02" 
             title="Gestão Empresarial" 
             desc="Otimização de processos e planejamento estratégico de longo prazo." 
           />
           <ServiceItem 
             number="03" 
             title="Consultoria Jurídica" 
             desc="Gestão especializada para crescimento de escritórios de advocacia." 
           />
           <ServiceItem 
             number="04" 
             title="Propriedade Intelectual" 
             desc="Registro de marcas, patentes e defesa de ativos intangíveis." 
           />
           <ServiceItem 
             number="05" 
             title="Transformação Digital" 
             desc="Implementação de sistemas e automação de fluxos de trabalho." 
           />
           <ServiceItem 
             number="06" 
             title="Análise de Viabilidade" 
             desc="Estudos de mercado e pesquisa de anterioridade para novas marcas." 
           />
        </div>
      </section>

      {/* Data Section - Architectural Diagrams */}
      <section className="bg-white text-black py-32 px-8 md:px-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-100/50 skew-x-12 translate-x-1/4 pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <span className="text-black/50 text-xs uppercase tracking-widest mb-4 block">02 / Tecnologia</span>
            <h2 className="font-serif text-5xl md:text-6xl mb-12">Inteligência de Dados</h2>
            
            <div className="space-y-0 border-t border-black/10">
              <AccordionItem title="CRM & Vendas" desc="Higienização de base e enriquecimento cadastral." />
              <AccordionItem title="Concessão de Crédito" desc="Análise de risco e background check automatizado." />
              <AccordionItem title="Prevenção à Fraude" desc="Monitoramento contínuo de CPFs e CNPJs." />
            </div>
            
            <div className="mt-12">
               <Button className="rounded-full border border-black/10 hover:bg-black hover:text-white transition-colors bg-transparent text-black h-12 px-8 text-xs uppercase tracking-widest">
                 Ver especificações técnicas
               </Button>
            </div>
          </div>

          <div className="bg-black text-white p-12 flex flex-col justify-between relative overflow-hidden">
             {/* Decorative graphic */}
             <div className="absolute top-12 right-12 w-24 h-24 border border-white/20 rounded-full flex items-center justify-center animate-spin-slow">
               <div className="w-2 h-2 bg-white rounded-full"></div>
             </div>

             <div>
               <div className="font-mono text-xs text-white/50 mb-2">SYSTEM_STATUS</div>
               <div className="text-4xl font-mono text-primary mb-8">ONLINE</div>
               <p className="text-white/70 font-light leading-relaxed max-w-sm">
                 Nossa infraestrutura processa milhões de datapoints para garantir que sua tomada de decisão seja baseada em fatos, não suposições.
               </p>
             </div>

             <div className="grid grid-cols-2 gap-8 mt-16 pt-8 border-t border-white/10">
               <div>
                 <div className="text-2xl font-serif">99.9%</div>
                 <div className="text-[10px] uppercase tracking-widest text-white/50">Uptime</div>
               </div>
               <div>
                 <div className="text-2xl font-serif">&lt;100ms</div>
                 <div className="text-[10px] uppercase tracking-widest text-white/50">Latência</div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-8 md:px-16 border-t border-white/10 flex flex-col gap-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <h2 className="font-serif text-6xl md:text-8xl text-primary opacity-80">Hyperion.</h2>
          
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Endereço</span>
              <p className="font-light">Av. Brigadeiro Faria Lima, 3477<br/>São Paulo, SP</p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Contato</span>
              <p className="font-light">ola@hyperion.com<br/>+55 11 3000-0000</p>
            </div>
            <div className="flex flex-col gap-4">
               <span className="text-xs uppercase tracking-widest text-muted-foreground">Social</span>
               <div className="flex gap-4">
                 <a href="#" className="hover:text-primary transition-colors">LN</a>
                 <a href="#" className="hover:text-primary transition-colors">IG</a>
                 <a href="#" className="hover:text-primary transition-colors">TW</a>
               </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center text-xs text-muted-foreground border-t border-white/5 pt-8">
          <span>© 2024 Hyperion Consultoria.</span>
          <span>Designed by Replit</span>
        </div>
      </footer>
    </div>
  );
}

// Components

function ServiceItem({ number, title, desc }: { number: string, title: string, desc: string }) {
  return (
    <div className="group border-t border-white/10 pt-8 hover:border-primary/50 transition-colors duration-500 cursor-pointer">
      <div className="flex justify-between items-start mb-4">
        <span className="font-mono text-xs text-muted-foreground group-hover:text-primary transition-colors">{number}</span>
        <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300" />
      </div>
      <h3 className="text-2xl font-serif mb-4 group-hover:text-white transition-colors">{title}</h3>
      <p className="text-sm text-muted-foreground font-light leading-relaxed group-hover:text-white/80 transition-colors">{desc}</p>
    </div>
  );
}

function AccordionItem({ title, desc }: { title: string, desc: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div 
      className="border-b border-black/10 py-6 cursor-pointer group"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-medium group-hover:text-black/70 transition-colors">{title}</h3>
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </div>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-24 opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
        <p className="text-black/60 font-light">{desc}</p>
      </div>
    </div>
  );
}
