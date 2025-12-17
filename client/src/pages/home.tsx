import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight,
  ArrowDownRight,
  Menu,
  X,
  Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground bg-noise overflow-x-hidden selection:bg-primary selection:text-primary-foreground font-sans">
      
      {/* Brutalist Grid Lines Background */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-between px-6 md:px-12 opacity-10">
        <div className="w-px h-full bg-current"></div>
        <div className="w-px h-full bg-current hidden md:block"></div>
        <div className="w-px h-full bg-current hidden md:block"></div>
        <div className="w-px h-full bg-current"></div>
      </div>

      {/* Header - Minimal & Technical */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 mix-blend-difference text-white">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-xl font-bold tracking-tighter uppercase font-mono">Hyperion<span className="text-primary">.</span></h1>
            <p className="text-[10px] uppercase tracking-widest opacity-60 mt-1 font-mono">Consultoria Estratégica</p>
          </div>
          
          <button className="group flex items-center gap-2 text-sm uppercase tracking-wider font-medium hover:text-primary transition-colors">
            <span className="hidden md:block">Menu</span>
            <div className="w-8 h-8 border border-current flex items-center justify-center rounded-full group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all">
              <Menu className="w-4 h-4" />
            </div>
          </button>
        </div>
      </header>

      {/* Hero Section - Typography Driven */}
      <section className="relative min-h-screen flex flex-col justify-end pb-24 px-6 md:px-12 pt-32">
        <div className="max-w-[90vw] z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <h1 className="font-serif text-[15vw] leading-[0.8] tracking-tighter mix-blend-overlay opacity-20 select-none absolute -top-[0.6em] left-0 pointer-events-none">
              SEQUOIA
            </h1>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-[0.9] mb-12">
              Cresça com <br />
              <span className="font-serif italic text-primary">Solidez</span> e <br />
              <span className="text-outline-thin opacity-80">Propósito.</span>
            </h2>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-t border-white/10 pt-8">
            <div className="max-w-md">
              <p className="text-lg md:text-xl font-light text-muted-foreground leading-relaxed">
                Assessoria empresarial multidisciplinar. Combinamos rigor jurídico com visão estratégica para construir legados.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-primary"></div>
              <span className="font-mono text-xs uppercase tracking-widest text-primary">Est. 2024</span>
            </div>

            <Button className="rounded-none h-14 px-8 text-lg bg-white text-black hover:bg-primary hover:text-black transition-colors">
              Diagnóstico Gratuito
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services - List Layout (Editorial) */}
      <section className="py-32 px-6 md:px-12 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="font-mono text-xs uppercase tracking-widest text-primary mb-4 block">(01) — Nossos Serviços</span>
            <h3 className="text-4xl font-serif mb-6">Expertise <br/>Multidisciplinar</h3>
            <p className="text-muted-foreground">
              Não somos apenas consultores. Somos arquitetos do crescimento da sua empresa, atuando em todas as frentes críticas.
            </p>
          </div>

          <div className="md:col-span-8">
            <div className="space-y-0 divide-y divide-white/10 border-t border-b border-white/10">
              {[
                { title: "Assessoria Jurídica", desc: "Compliance, contratos e proteção patrimonial.", id: "01" },
                { title: "Gestão Empresarial", desc: "Estratégia, processos e otimização operacional.", id: "02" },
                { title: "Consultoria Jurídica", desc: "Gestão especializada para escritórios de advocacia.", id: "03" },
                { title: "Marcas e Patentes", desc: "Proteção completa da propriedade intelectual.", id: "04" },
                { title: "Transformação Digital", desc: "Automação e modernização de processos.", id: "05" }
              ].map((service, index) => (
                <div 
                  key={index}
                  className="group py-8 flex flex-col md:flex-row md:items-center justify-between cursor-pointer hover:bg-white/5 transition-colors px-4 -mx-4"
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className="flex items-baseline gap-6">
                    <span className="font-mono text-xs text-muted-foreground opacity-50 group-hover:text-primary transition-colors">/{service.id}</span>
                    <h4 className="text-3xl md:text-4xl font-light tracking-tight group-hover:translate-x-4 transition-transform duration-300">{service.title}</h4>
                  </div>
                  <div className="flex items-center gap-8 mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm text-muted-foreground hidden md:block">{service.desc}</p>
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-primary">
                      <ArrowDownRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics - Brutalist Cards */}
      <section className="py-20 px-6 md:px-12 bg-white text-black relative">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/10 border-y border-black/10">
          {[
            { value: "85%", label: "TJR Projetada", sub: "Crescimento Consistente" },
            { value: "8.8M", label: "Receita Ano 5", sub: "Resultado Comprovado" },
            { value: "37%", label: "Margem Líquida", sub: "Eficiência Operacional" }
          ].map((stat, i) => (
            <div key={i} className="py-12 md:px-12 flex flex-col justify-between h-64 group hover:bg-black/5 transition-colors">
              <div className="flex justify-between items-start">
                <span className="font-mono text-[10px] uppercase tracking-widest border border-black/20 px-2 py-1 rounded-full">Stat.{i+1}</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
              </div>
              <div>
                <h3 className="text-6xl md:text-7xl font-serif tracking-tighter mb-2">{stat.value}</h3>
                <p className="font-medium uppercase tracking-wide text-sm">{stat.label}</p>
                <p className="text-black/60 text-xs mt-1">{stat.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech/Data Section - Dark & Schematic */}
      <section className="py-32 px-6 md:px-12 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-white/5"></div>
        
        <div className="text-center mb-20 relative z-10">
          <div className="inline-block mb-4">
            <div className="w-3 h-3 bg-primary animate-pulse rounded-full mx-auto mb-2"></div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Hyperion Intelligence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight max-w-2xl mx-auto">
            Decisões baseadas em <span className="text-outline md:text-outline-thin">dados reais</span>, não em intuição.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 max-w-5xl mx-auto">
          {[
            { title: "Higienização de Dados", tag: "CRM" },
            { title: "Enriquecimento Cadastral", tag: "Analytics" },
            { title: "Análise de Risco", tag: "Compliance" },
            { title: "Monitoramento de Crédito", tag: "Financeiro" }
          ].map((item, i) => (
            <div key={i} className="bg-background p-8 md:p-12 hover:bg-white/5 transition-colors group">
              <div className="flex justify-between items-start mb-12">
                <div className="w-2 h-2 bg-white/20 group-hover:bg-primary transition-colors"></div>
                <span className="font-mono text-[10px] text-muted-foreground">{item.tag}</span>
              </div>
              <h3 className="text-2xl font-light group-hover:text-primary transition-colors">{item.title}</h3>
              <div className="mt-8 flex items-center gap-2 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                <Plus className="w-3 h-3" />
                <span>EXPLORAR MÓDULO</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer - Massive */}
      <footer className="bg-primary text-black pt-24 pb-12 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div>
            <h2 className="font-serif text-5xl md:text-7xl tracking-tighter leading-[0.9] mb-8">
              Vamos construir <br/>o futuro.
            </h2>
            <Button className="bg-black text-white hover:bg-black/80 rounded-none h-14 px-8 text-lg">
              Iniciar Conversa
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-8 font-mono text-sm">
            <div>
              <h4 className="uppercase tracking-widest mb-4 border-b border-black/20 pb-2">Contato</h4>
              <ul className="space-y-2">
                <li>contato@hyperion.com</li>
                <li>+55 11 99999-9999</li>
                <li>Av. Paulista, 0000</li>
              </ul>
            </div>
            <div>
              <h4 className="uppercase tracking-widest mb-4 border-b border-black/20 pb-2">Social</h4>
              <ul className="space-y-2">
                <li>LinkedIn</li>
                <li>Instagram</li>
                <li>Medium</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-end border-t border-black/10 pt-8">
          <h1 className="text-[12vw] leading-none font-bold tracking-tighter opacity-10 select-none pointer-events-none translate-y-4">
            HYPERION
          </h1>
          <div className="font-mono text-xs uppercase tracking-widest pb-2">
            © 2024 Hyperion Consult. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
