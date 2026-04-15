"use client";

import { CheckCircle, Zap, Mail, MessageSquare, Layout, MousePointerClick, ChevronRight } from 'lucide-react';

export default function LeadloversPresell() {
  
  const irParaOferta = () => {
    // Seu link de afiliado já configurado aqui:
    const linkAfiliado = "https://go.hotmart.com/R105396120D?ap=f792";
    window.open(linkAfiliado, "_blank");
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navbar Minimalista */}
      <nav className="bg-white border-b border-slate-200 py-5 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-red-600 p-2 rounded-xl shadow-lg shadow-red-200">
              <Zap size={20} className="text-white" fill="currentColor" />
            </div>
            <span className="font-black italic text-2xl tracking-tighter">LEADLOVERS</span>
          </div>
          <button 
            onClick={irParaOferta}
            className="hidden md:block bg-slate-900 text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-red-600 transition-all"
          >
            Acessar Agora
          </button>
        </div>
      </nav>

      {/* Hero Section - Foco em Conversão */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 text-red-700 text-[10px] font-black uppercase tracking-[0.3em] px-5 py-2.5 rounded-full mb-8 shadow-sm">
          <Zap size={14} fill="currentColor" /> Automação de Marketing Oficial
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8 uppercase italic">
          Venda no <span className="text-red-600">Automático</span> <br/> 24 Horas por Dia
        </h1>
        
        <p className="text-lg md:text-xl text-slate-500 font-bold mb-12 max-w-3xl mx-auto leading-relaxed">
          Pare de perseguir clientes. Use a Leadlovers para criar funis de vendas que capturam leads e fecham negócios enquanto você foca no seu negócio.
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <button 
            onClick={irParaOferta}
            className="group bg-red-600 hover:bg-red-700 text-white text-xl font-black uppercase italic tracking-widest px-12 py-7 rounded-[32px] shadow-[0_20px_50px_rgba(220,38,38,0.3)] transform hover:scale-105 transition-all flex items-center gap-4"
          >
            Quero Minha Máquina de Vendas <ChevronRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </button>
          
          <div className="flex flex-wrap justify-center gap-6 text-[10px] text-slate-400 font-black uppercase tracking-widest mt-4">
             <span className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Teste de 15 Dias</span>
             <span className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Sem Multas</span>
             <span className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Suporte em Português</span>
          </div>
        </div>
      </section>

      {/* Grid de Recursos */}
      <section className="bg-white py-24 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-4">Tudo em um só lugar</h2>
            <div className="w-20 h-1.5 bg-red-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group p-10 bg-slate-50 rounded-[48px] border border-slate-100 hover:border-red-200 transition-all hover:bg-white hover:shadow-2xl">
              <div className="bg-red-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-red-100 group-hover:rotate-6 transition-transform">
                <Mail className="text-white" size={28} />
              </div>
              <h3 className="font-black uppercase italic text-xl mb-4">E-mail Marketing</h3>
              <p className="text-slate-500 font-bold leading-relaxed text-sm">
                Envie sequências inteligentes de e-mails para sua base de contatos sem precisar disparar manualmente.
              </p>
            </div>

            <div className="group p-10 bg-slate-50 rounded-[48px] border border-slate-100 hover:border-red-200 transition-all hover:bg-white hover:shadow-2xl">
              <div className="bg-red-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-red-100 group-hover:rotate-6 transition-transform">
                <Layout className="text-white" size={28} />
              </div>
              <h3 className="font-black uppercase italic text-xl mb-4">Landing Pages</h3>
              <p className="text-slate-500 font-bold leading-relaxed text-sm">
                Crie páginas profissionais em minutos com o editor arraste-e-solte. Totalmente otimizadas para mobile.
              </p>
            </div>

            <div className="group p-10 bg-slate-50 rounded-[48px] border border-slate-100 hover:border-red-200 transition-all hover:bg-white hover:shadow-2xl">
              <div className="bg-red-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-red-100 group-hover:rotate-6 transition-transform">
                <MessageSquare className="text-white" size={28} />
              </div>
              <h3 className="font-black uppercase italic text-xl mb-4">Automação Whats</h3>
              <p className="text-slate-500 font-bold leading-relaxed text-sm">
                Automatize o atendimento no WhatsApp e não perca mais nenhuma venda por demora na resposta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA Final */}
      <footer className="bg-slate-900 py-24 text-center px-6">
        <h2 className="text-white text-4xl md:text-5xl font-black uppercase italic mb-10 tracking-tighter">
          Pronto para o próximo nível?
        </h2>
        <button 
          onClick={irParaOferta}
          className="bg-white text-slate-900 text-sm font-black uppercase tracking-[0.2em] px-12 py-6 rounded-[24px] hover:bg-red-600 hover:text-white transition-all shadow-2xl"
        >
          Criar Minha Conta Leadlovers
        </button>
        <div className="mt-16 pt-8 border-t border-white/5">
          <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.4em]">
            Página de Afiliado Autorizado - 2026
          </p>
        </div>
      </footer>
    </main>
  );
}