"use client";
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import GlassCard from "@/components/GlassCard";
import PageLayout from "@/components/PageLayout";
import { 
  Mail, Linkedin, MessageCircle, Calendar, Clock, 
  MapPin, Phone, Send, CheckCircle, AlertCircle,
  Globe, Github, FileText, Euro, Briefcase
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "ducrettetbryan1@gmail.com",
    description: "Réponse sous 24h",
    href: "mailto:ducrettetbryan1@gmail.com",
    primary: true
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "/in/bryan-ducrettet-a27872350/",
    description: "Profil professionnel",
    href: "https://www.linkedin.com/in/bryan-ducrettet-a27872350/",
    primary: false
  },
  {
    icon: Github,
    title: "GitHub",
    value: "/Sakaax",
    description: "Projets open-source",
    href: "https://github.com/Sakaax",
    primary: false
  }
];

const availability = [
  {
    icon: Clock,
    title: "Horaires",
    details: ["Lun-Ven : 9h-18h CET", "Urgences : flexible"]
  },
  {
    icon: MapPin,
    title: "Localisation",
    details: ["Remote prioritaire", "Fuseau CET", "Déplacements possibles"]
  },
  {
    icon: Briefcase,
    title: "Types de missions",
    details: ["Freelance projets", "Alternance", "Missions courtes"]
  }
];

const projectTypes = [
  {
    type: "MVP SaaS IA",
    duration: "2-4 semaines",
    description: "Landing + Auth + Paiements + IA chat + démo"
  },
  {
    type: "Intégrations",
    duration: "1-2 semaines", 
    description: "Clerk, Stripe, Supabase, APIs tierces"
  },
  {
    type: "UI/UX Refonte",
    duration: "1-3 semaines",
    description: "Design moderne, glassmorphism, animations"
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
    budget: "",
    timeline: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", project: "", message: "", budget: "", timeline: "" });
      } else {
        setSubmitStatus('error');
        console.error('Erreur:', data.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Erreur réseau:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <PageLayout className="px-4 py-16 md:py-20">
      <div className="max-w-screen-lg mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <MessageCircle className="h-12 w-12 mx-auto mb-6 text-accent-coral" />
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Contact
          </h1>
          <p className="text-xl opacity-80 mb-2">Discutons de votre projet</p>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            Freelance full-stack disponible pour vos projets SaaS IA
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-center mb-8">Moyens de contact</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.1 }}
              >
                <a
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="block"
                >
                  <GlassCard className={`rounded-2xl h-full text-center p-6 transition-all duration-200 hover:scale-[1.02] ${method.primary ? 'ring-1 ring-accent-coral/50' : ''}`}>
                    <method.icon className={`h-8 w-8 mx-auto mb-4 ${method.primary ? 'text-accent-coral' : 'text-gray-800/80'}`} />
                    <h3 className="font-semibold mb-2">{method.title}</h3>
                    <p className="text-sm opacity-80 mb-2">{method.value}</p>
                    <p className="text-xs opacity-60">{method.description}</p>
                  </GlassCard>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <GlassCard className="rounded-2xl p-6">
              <h2 className="text-2xl font-semibold mb-6">Décrivez votre projet</h2>
              
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 glass rounded-lg bg-green-500/10 border border-green-500/20"
                >
                  <div className="flex items-center gap-2 text-green-400">
                    <CheckCircle className="h-5 w-5" />
                    <span className="text-sm font-medium">Message envoyé avec succès!</span>
                  </div>
                  <p className="text-sm text-gray-800/80 mt-1">Je vous répondrai dans les 24h.</p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 glass rounded-lg bg-red-500/10 border border-red-500/20"
                >
                  <div className="flex items-center gap-2 text-red-400">
                    <AlertCircle className="h-5 w-5" />
                    <span className="text-sm font-medium">Erreur lors de l'envoi</span>
                  </div>
                  <p className="text-sm text-gray-800/80 mt-1">Veuillez réessayer ou me contacter directement par email.</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="name">
                      Nom / Entreprise *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 form-field"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="email">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 form-field"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="project">
                      Type de projet
                    </label>
                    <select
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      className="w-full px-3 py-2 form-field"
                    >
                      <option value="">Sélectionner...</option>
                      <option value="mvp-saas-ia">MVP SaaS IA</option>
                      <option value="integrations">Intégrations</option>
                      <option value="ui-refonte">UI/UX Refonte</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="timeline">
                      Délai souhaité
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-3 py-2 form-field"
                    >
                      <option value="">Sélectionner...</option>
                      <option value="urgent">Urgent (1-2 sem)</option>
                      <option value="normal">Normal (2-4 sem)</option>
                      <option value="flexible">Flexible (&gt; 1 mois)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="budget">
                    Budget indicatif
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-3 py-2 form-field"
                  >
                    <option value="">Sélectionner...</option>
                    <option value="1k-5k">1k - 5k €</option>
                    <option value="5k-15k">5k - 15k €</option>
                    <option value="15k+">15k+ €</option>
                    <option value="tjm">TJM à discuter</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="message">
                    Description du projet *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 form-field resize-none"
                    placeholder="Décrivez votre projet, vos besoins, contraintes..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>
            </GlassCard>
          </motion.div>

          {/* Info & Availability */}
          <div className="space-y-6">
            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <GlassCard className="rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-6">Disponibilités</h3>
                <div className="space-y-4">
                  {availability.map((item, index) => (
                    <div key={item.title} className="flex gap-4">
                      <item.icon className="h-6 w-6 text-accent-coral flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium mb-1">{item.title}</h4>
                        <ul className="space-y-1">
                          {item.details.map((detail, idx) => (
                            <li key={idx} className="text-sm opacity-80">{detail}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>

            {/* Project Types */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <GlassCard className="rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-6">Types de projets</h3>
                <div className="space-y-4">
                  {projectTypes.map((project, index) => (
                    <div key={project.type} className="glass rounded-lg p-4 bg-white/5">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">{project.type}</h4>
                        <span className="text-sm text-accent-coral">{project.duration}</span>
                      </div>
                      <p className="text-sm opacity-80">{project.description}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <GlassCard className="rounded-2xl p-6 max-w-2xl mx-auto">
            <FileText className="h-6 w-6 mx-auto mb-4 text-accent-coral" />
            <h3 className="font-semibold mb-3">Processus de collaboration</h3>
            <p className="text-sm opacity-80 mb-4">
              Après votre message, nous échangerons pour préciser vos besoins, puis je vous proposerai un devis détaillé avec planning.
            </p>
            <p className="text-xs opacity-60">
              Engagement qualité • Code maintenable • Livraison dans les délais
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </PageLayout>
  );
}