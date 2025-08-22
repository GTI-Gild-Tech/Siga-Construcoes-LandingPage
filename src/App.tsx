import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Truck, 
  Shield, 
  Clock, 
  Users,
  CheckCircle,
  Star,
  ArrowRight,
  Building2,
  Hammer,
  Wrench
} from 'lucide-react';  
import hero from './assets/hero-img.png'; 
import logoHorizontal from './assets/logo-horizontal.png'; 
import logoHorizontalBranca from './assets/logo-horizontal-branco.png'; 

function App() {
  // Defina a interface para o estado do formulário
interface FormData {
  name: string;
  phone: string;
  message: string;
}

// Número de telefone para onde as mensagens serão enviadas, no formato internacional.
// Exemplo: 5511999999999 (55 para o Brasil, 11 para o DDD de São Paulo)
const WHATSAPP_PHONE_NUMBER = "tel:+557436119193"; 
const WHASTAPPJUSTNUMBER = "557436119193"

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    message: "",
  });

  const contactPhone: string = "(74) 36119193";


  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Cria a mensagem formatada para o WhatsApp
    const whatsappMessage = `Olá! Meu nome é ${formData.name}, e meu telefone é ${formData.phone}.${formData.message}`;

    // Cria a URL do WhatsApp com o número e a mensagem
    const whatsappURL = `https://wa.me/${WHASTAPPJUSTNUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

    // Abre uma nova aba com a URL do WhatsApp
    window.open(whatsappURL, "_blank");
  };

  const WHATSAPP_PHONE_NUMBERFOR_ORCAMENTO = `https://wa.me/${WHASTAPPJUSTNUMBER}?text=Gostaria de solicitar um orçamento.`
  const WHATSAPP_PHONE_NUMBERFOR_PRODUTOS = `https://wa.me/${WHASTAPPJUSTNUMBER}?text=Gostaria de ver seus produtos.`
  const WHATSAPP_PHONE_NUMBERFOR_CIMENTOEARGAMASSA = `https://wa.me/${WHASTAPPJUSTNUMBER}?text=Gostaria de informações sobre cimento e argamassa`
  const WHATSAPP_PHONE_NUMBERFOR_FERRAMENTAS = `https://wa.me/${WHASTAPPJUSTNUMBER}?text=Gostaria de informações sobre ferramentas`
  const WHATSAPP_PHONE_NUMBERFOR_MATERIAISELETRICOS = `https://wa.me/${WHASTAPPJUSTNUMBER}?text=Gostaria de informações sobre materiais elétricos`

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <img src={logoHorizontal} alt="Logo" className="h-12" />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-[#2d30a4] transition-colors">Início</a>
              <a href="#produtos" className="text-gray-700 hover:text-[#2d30a4] transition-colors">Produtos</a>
              <a href="#servicos" className="text-gray-700 hover:text-[#2d30a4] transition-colors">Serviços</a>
              <a href="#sobre" className="text-gray-700 hover:text-[#2d30a4] transition-colors">Sobre</a>
              <a href="#contato" className="text-gray-700 hover:text-[#2d30a4] transition-colors">Contato</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <span className="text-sm text-gray-600">Orçamento grátis:</span>
              <a href={WHATSAPP_PHONE_NUMBER} className="flex items-center space-x-2 bg-[#FD4E0B] text-white px-4 py-2 rounded-lg hover:bg-[#e8440a] transition-colors">
                <Phone className="h-4 w-4" />
                <span>{contactPhone}</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-700 hover:text-[#2d30a4] transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                <a href="#inicio" className="text-gray-700 hover:text-[#2d30a4] transition-colors">Início</a>
                <a href="#produtos" className="text-gray-700 hover:text-[#2d30a4] transition-colors">Produtos</a>
                <a href="#servicos" className="text-gray-700 hover:text-[#2d30a4] transition-colors">Serviços</a>
                <a href="#sobre" className="text-gray-700 hover:text-[#2d30a4] transition-colors">Sobre</a>
                <a href="#contato" className="text-gray-700 hover:text-[#2d30a4] transition-colors">Contato</a>
                <a href={WHATSAPP_PHONE_NUMBER} className="flex items-center space-x-2 bg-[#FD4E0B] text-white px-4 py-2 rounded-lg hover:bg-[#e8440a] transition-colors w-fit">
                  <Phone className="h-4 w-4" />
                  <span>{contactPhone}</span>
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        id="inicio"
        className="relative bg-cover bg-center h-screen w-full text-white"
        style={{ backgroundImage: `url(${hero})` }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          
          <div className="grid lg:grid-cols-2 gap-12 items-center z-1">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Material de <span className="text-[#FD4E0B]">Construção</span> de Qualidade
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Há mais de 15 anos fornecendo os melhores materiais para sua obra. 
                Qualidade garantida, preços competitivos e entrega rápida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                 <a
                  href={WHATSAPP_PHONE_NUMBERFOR_ORCAMENTO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FD4E0B] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#e8440a] transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Solicitar Orçamento</span>
                  <ArrowRight className="h-5 w-5" />
                </a>
                  <a
                  href={WHATSAPP_PHONE_NUMBERFOR_PRODUTOS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#2d30a4] transition-all duration-300 flex items-center justify-center"
                >
                  Ver Produtos
                </a>
              </div>
            </div>
            <div className="lg:text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-center">Por que escolher a ConstruMax?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-[#FD4E0B]" />
                    <span>Mais de 15 anos no mercado</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-[#FD4E0B]" />
                    <span>Entrega em até 24 horas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-[#FD4E0B]" />
                    <span>Preços competitivos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-[#FD4E0B]" />
                    <span>Garantia de qualidade</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="py-20 bg-gray-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-16">
            <motion.h3
              className="text-4xl font-bold text-[#2d30a4] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Nossos Diferenciais
            </motion.h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos muito mais que materiais de construção. Oferecemos soluções completas para sua obra.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-[#3F8EBF] to-[#2d30a4] rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2d30a4] mb-4">Entrega Rápida</h3>
                <p className="text-gray-600">Entregamos seus materiais em até 24 horas na região metropolitana.</p>
              </div>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-[#FD4E0B] to-[#e8440a] rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2d30a4] mb-4">Qualidade Garantida</h3>
                <p className="text-gray-600">Todos os produtos passam por rigoroso controle de qualidade.</p>
              </div>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-[#3F8EBF] to-[#2d30a4] rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2d30a4] mb-4">Atendimento ágil</h3>
                <p className="text-gray-600">Nossa equipe está sempre disponível para ajudar você.</p>
              </div>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-[#FD4E0B] to-[#e8440a] rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2d30a4] mb-4">Consultoria Especializada</h3>
                <p className="text-gray-600">Nossos especialistas te ajudam a escolher os melhores materiais.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Products Section */}
      <motion.section
        id="produtos"
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2d30a4] mb-4">Nossos Produtos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma linha completa de materiais de construção das melhores marcas do mercado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-[#3F8EBF] to-[#2d30a4] flex items-center justify-center">
                <Building2 className="h-20 w-20 text-white" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-[#2d30a4] mb-4">Cimento & Argamassa</h3>
                <p className="text-gray-600 mb-6">Cimentos de alta qualidade, argamassas prontas e aditivos para construção civil.</p>
                <a
                  href={WHATSAPP_PHONE_NUMBERFOR_CIMENTOEARGAMASSA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FD4E0B] font-semibold hover:text-[#e8440a] flex items-center space-x-2"
                >
                  <span>Ver produtos</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-[#FD4E0B] to-[#e8440a] flex items-center justify-center">
                <Hammer className="h-20 w-20 text-white" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-[#2d30a4] mb-4">Ferramentas</h3>
                <p className="text-gray-600 mb-6">Ferramentas profissionais das melhores marcas para todos os tipos de obra.</p>
               <a
                  href={WHATSAPP_PHONE_NUMBERFOR_FERRAMENTAS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FD4E0B] font-semibold hover:text-[#e8440a] flex items-center space-x-2"
                >
                  <span>Ver produtos</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-[#3F8EBF] to-[#2d30a4] flex items-center justify-center">
                <Wrench className="h-20 w-20 text-white" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-[#2d30a4] mb-4">Materiais Elétricos</h3>
                <p className="text-gray-600 mb-6">Fios, cabos, disjuntores e materiais elétricos certificados e seguros.</p>
                <a
                  href={WHATSAPP_PHONE_NUMBERFOR_MATERIAISELETRICOS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FD4E0B] font-semibold hover:text-[#e8440a] flex items-center space-x-2"
                >
                  <span>Ver produtos</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* About Us Section */}
      <motion.section
        id="sobre"
        className="py-20 bg-gradient-to-br from-[#2d30a4] via-[#3F8EBF] to-[#2d30a4]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Sobre a Siga</h2>
                <p className="text-xl text-gray-100 leading-relaxed mb-6">
                  Há mais de 15 anos no mercado, a Siga se consolidou como referência 
                  em materiais de construção, oferecendo qualidade superior e atendimento 
                  personalizado para cada cliente.
                </p>
                <p className="text-gray-100 leading-relaxed mb-8">
                  Nossa missão é fornecer os melhores materiais de construção com preços 
                  competitivos, entrega rápida e consultoria especializada. Trabalhamos com 
                  as principais marcas do mercado e mantemos um rigoroso controle de qualidade 
                  em todos os nossos produtos.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center p-6 bg-gradient-to-br from-[#2d30a4] to-[#923896] rounded-2xl text-white">
                  <div className="text-4xl font-bold mb-2">15+</div>
                  <div className="text-blue-100">Anos de Experiência</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-[#FD4E0B] to-[#e8440a] rounded-2xl text-white">
                  <div className="text-4xl font-bold mb-2">10k+</div>
                  <div className="text-orange-100">Clientes Satisfeitos</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-[#923896] to-[#2d30a4] rounded-2xl text-white">
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-blue-100">Produtos em Estoque</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-[#FD4E0B] to-[#e8440a] rounded-2xl text-white">
                  <div className="text-4xl font-bold mb-2">24h</div>
                  <div className="text-orange-100">Entrega Rápida</div>
                </div>
              </div>
        </div>
        <div className="space-y-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-[#2d30a4] mb-6">Nossa História</h3>
                <div className=" flex">
                  <div className="flex items-start space-x-4">
                    <div className="w-4 h-4 bg-[#FD4E0B] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-[#2d30a4] mb-2">2009 - Fundação</h4>
                      <p className="text-gray-600">Iniciamos com uma pequena loja focada em atender construtores locais com qualidade e preço justo.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-4 h-4 bg-[#923896] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-[#2d30a4] mb-2">2015 - Expansão</h4>
                      <p className="text-gray-600">Ampliamos nosso estoque e começamos a atender toda a região metropolitana com entrega própria.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-4 h-4 bg-[#FD4E0B] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-[#2d30a4] mb-2">2020 - Modernização</h4>
                      <p className="text-gray-600">Investimos em tecnologia e processos para oferecer atendimento 24h e consultoria especializada.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-4 h-4 bg-[#923896] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-[#2d30a4] mb-2">2025 - Liderança</h4>
                      <p className="text-gray-600">Hoje somos referência no setor, com mais de 10.000 clientes e crescimento constante.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="bg-gradient-to-br from-[#2d30a4] to-[#3F8EBF] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Nossos Valores</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-[#FD4E0B]" />
                    <span><strong>Qualidade:</strong> Produtos certificados das melhores marcas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-[#FD4E0B]" />
                    <span><strong>Confiança:</strong> Relacionamento transparente e duradouro</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-[#FD4E0B]" />
                    <span><strong>Agilidade:</strong> Entrega rápida e atendimento eficiente</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-[#FD4E0B]" />
                    <span><strong>Inovação:</strong> Sempre buscando as melhores soluções</span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="py-20 bg-gray-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2d30a4] mb-4">O que nossos clientes dizem</h2>
            <p className="text-xl text-gray-600">Mais de 10.000 clientes satisfeitos confiam na Siga</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"Excelente atendimento e produtos de primeira qualidade. Já sou cliente há 5 anos e sempre recomendo!"</p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-[#3F8EBF] to-[#2d30a4] rounded-full flex items-center justify-center text-white font-bold">
                  JS
                </div>
                <div>
                  <p className="font-semibold text-[#2d30a4]">João Silva</p>
                  <p className="text-sm text-gray-500">Construtor</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"Entrega rápida e preços justos. A ConstruMax é minha primeira opção para materiais de construção."</p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-[#FD4E0B] to-[#e8440a] rounded-full flex items-center justify-center text-white font-bold">
                  MS
                </div>
                <div>
                  <p className="font-semibold text-[#2d30a4]">Maria Santos</p>
                  <p className="text-sm text-gray-500">Arquiteta</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"Atendimento excepcional e produtos sempre em estoque. Super recomendo para qualquer obra!"</p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-[#3F8EBF] to-[#2d30a4] rounded-full flex items-center justify-center text-white font-bold">
                  CA
                </div>
                <div>
                  <p className="font-semibold text-[#2d30a4]">Carlos Almeida</p>
                  <p className="text-sm text-gray-500">Engenheiro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contato"
        className="py-20 bg-blue-50 text-[#2d30a4]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
            <p className="text-xl text-blue-800 max-w-3xl mx-auto">
              Solicite seu orçamento sem compromisso. Nossa equipe está pronta para atender você!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#FD4E0B] rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Telefone</h3>
                  <p className="text-blue-950">{contactPhone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#FD4E0B] rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">E-mail</h3>
                  <p className="text-blue-950">contato@sigamtrc.com.br</p>
                  <p className="text-blue-950">vendas@sigamtrc.com.br</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#FD4E0B] rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Endereço</h3>
                  <p className="text-blue-950">Av. Gaspar de Lemos - Nossa Sra. da Penha</p>
                  <p className="text-blue-950">  Juazeiro - BA</p>
                  <p className="text-blue-950">CEP: 48902-290</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-900/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Solicite seu Orçamento</h3>
               <form onSubmit={handleSubmit} className="space-y-6"> {/* Adicionado onSubmit ao formulário */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Seu nome"
                      name="name" // Adicionado o atributo name
                      value={formData.name} // Adicionado o atributo value
                      onChange={handleInputChange} // Adicionado o atributo onChange
                      className="w-full px-4 py-3 bg-white/70 border border-white/30 rounded-lg text-blue-950 placeholder-blue-800 focus:outline-none focus:ring-2 focus:ring-[#FD4E0B] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Seu e-mail"
                      name="email" // Adicionado o atributo name (e-mail não está no formData atual, mas é uma boa prática)
                      // O email não será enviado para o WhatsApp, mas é bom coletar se necessário.
                      className="w-full px-4 py-3 bg-white/70 border border-white/30 rounded-lg text-blue-950 placeholder-blue-800 focus:outline-none focus:ring-2 focus:ring-[#FD4E0B] focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Seu telefone"
                    name="phone" // Adicionado o atributo name
                    value={formData.phone} // Adicionado o atributo value
                    onChange={handleInputChange} // Adicionado o atributo onChange
                    className="w-full px-4 py-3 bg-white/70 border border-white/30 rounded-lg text-blue-950 placeholder-blue-800 focus:outline-none focus:ring-2 focus:ring-[#FD4E0B] focus:border-transparent"
                  />
                </div>
                <div>
                  <textarea 
                    rows={4} 
                    placeholder="Descreva sua necessidade..."
                    name="message" // Adicionado o atributo name
                    value={formData.message} // Adicionado o atributo value
                    onChange={handleInputChange} // Adicionado o atributo onChange
                    className="w-full px-4 py-3 bg-white/70 border border-white/30 rounded-lg text-blue-950 placeholder-blue-800 focus:outline-none focus:ring-2 focus:ring-[#FD4E0B] focus:border-transparent resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-[#FD4E0B] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#e8440a] transition-all duration-300 transform hover:scale-105"
                >
                  Solicitar Orçamento Grátis
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-[#0c0c5c] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <img src={logoHorizontalBranca} alt="Logo" className="h-12" />
              </div>
              <p className="text-blue-200 mb-6 leading-relaxed">
                Há mais de 15 anos sendo referência em materiais de construção. 
                Qualidade, confiança e os melhores preços para sua obra.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-[#3F8EBF] rounded-lg flex items-center justify-center hover:bg-[#FD4E0B] transition-colors cursor-pointer">
                  <a href="https://www.facebook.com/profile.php?id=100088244803284" target='blank'>
                  <span className="text-sm font-bold">f</span></a>
                </div>
                <div className="w-10 h-10 bg-[#3F8EBF] rounded-lg flex items-center justify-center hover:bg-[#FD4E0B] transition-colors cursor-pointer">
                  <a href="https://www.instagram.com/sigaconstrucoes/" target='blank'><span className="text-sm font-bold">in</span></a>
                </div>
                <div className="w-10 h-10 bg-[#3F8EBF] rounded-lg flex items-center justify-center hover:bg-[#FD4E0B] transition-colors cursor-pointer">
                  <a href={WHATSAPP_PHONE_NUMBER} target='blank'><span className="text-sm font-bold">@</span></a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
                <li><a href="#produtos" className="hover:text-white transition-colors">Produtos</a></li>
                <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
                <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Horário de Funcionamento</h4>
              <ul className="space-y-2 text-blue-200">
                <li>Segunda à Sexta: 8h às 18h</li>
                <li>Sábados: 7h às 14h</li>
                
                
              </ul>
            </div>
          </div>

          <div className="border-t border-[#2d30a4] mt-12 pt-8 text-center text-blue-200">
            <p>&copy; 2025 Siga Construções. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;