"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Code2, Smartphone, Zap, Users, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useEffect, useState } from "react";


const services = [
  {
    icon: Smartphone,
    title: "Développement mobile",
    description: "Applications mobiles natives et multiplateformes offrant des expériences utilisateur exceptionnelles sur iOS et Android.",
  },
  {
    icon: Code2,
    title: "Applications Web",
    description: "Applications web évolutives et performantes, conçues avec des frameworks modernes et les meilleures pratiques.",
  },
  {
    icon: Zap,
    title: "Solutions Cloud",
    description: "Architecture et infrastructure cloud-native pour faire évoluer votre entreprise sans effort.",
  },
  {
    icon: Users,
    title: "UX/UI Design",
    description: "Interfaces belles et intuitives conçues en tenant compte de vos utilisateurs, soutenues par la recherche et les données.",
  },
];

const projects = [
  { title: "Application de prise de rendez-vous", category: "Mobile", image: "🏦" },
  { title: "Plateforme de commerce électronique", category: "Web", image: "🛒" },
  { title: "Suivi de santé et de fitness", category: "Mobile", image: "💪" },
  { title: "Tableau de bord SaaS", category: "Web", image: "📊" },
];

const stats = [
  { number: "150+", label: "Projets livrés" },
  { number: "50+", label: "Clients satisfaits" },
  { number: "10+", label: "Années d'expérience" },
  { number: "98%", label: "Satisfaction client" },
];

export default function Home() {
  const [scrollLocked, setScrollLocked] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);
  const scrollProgress = useMotionValue(0);
  const smoothProgress = useSpring(scrollProgress, { stiffness: 100, damping: 30 });
  
  const phoneY = useTransform(smoothProgress, [0, 1], [600, 0]);
  const phoneOpacity = useTransform(smoothProgress, [0, 0.3, 1], [0, 0.5, 1]);
  const phoneScale = useTransform(smoothProgress, [0, 1], [0.8, 1]);

  useEffect(() => {
    if (animationComplete) return;

    const handleWheel = (e: WheelEvent) => {
      if (!scrollLocked) return;
      
      e.preventDefault();
      
      const delta = e.deltaY;
      const currentProgress = scrollProgress.get();
      const newProgress = Math.max(0, Math.min(1, currentProgress + delta * 0.001));
      
      scrollProgress.set(newProgress);
      
      if (newProgress >= 0.99 && !animationComplete) {
        setAnimationComplete(true);
        setScrollLocked(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!scrollLocked) return;
      if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Space'].includes(e.code)) {
        e.preventDefault();
      }
    };

    if (scrollLocked) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('wheel', handleWheel, { passive: false });
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [scrollLocked, scrollProgress, animationComplete]);

  const ref = useRef(null);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section ref={ref} className="relative flex min-h-[95vh] items-center px-4 py-20 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl"
              >
                Créez l'application dont vous avez vraiment besoin avec{" "}
                <span className="text-primary">itSquare</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8 text-lg text-muted-foreground md:text-xl"
              >
                Nous créons des applications mobiles et web sur mesure qui propulsent
                votre entreprise vers l'avant.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <Button size="lg" className="group">
                  Commencez votre projet
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline">
                  Voir notre travail
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:flex lg:items-center lg:justify-center"
            >
              <motion.img
                src="/phone.png"
                alt="Phone Preview"
                style={{ y: phoneY, opacity: phoneOpacity, scale: phoneScale }}
                className="w-full max-w-[600px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y bg-card px-4 py-16 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-2 text-4xl font-bold text-primary md:text-5xl">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 py-20 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Nos services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Des solutions complètes pour répondre à tous vos besoins en développement
              d'applications.
            </p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="cursor-pointer group rounded-lg border bg-card p-6 transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-muted px-4 py-20 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Projets en vedette
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Découvrez certains de nos travaux récents et histoires de réussite
            </p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer overflow-hidden rounded-lg bg-card shadow-md transition-shadow hover:shadow-xl"
              >
                <div className="flex h-48 items-center justify-center bg-primary/10 text-7xl">
                  {project.image}
                </div>
                <div className="p-6">
                  <div className="mb-2 text-sm font-medium text-primary">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-4 py-20 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
                Pourquoi choisir itSquare ?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Nous combinons expertise technique et pensée créative pour offrir 
                des résultats exceptionnels qui dépassent les attentes.
              </p>
              <div className="space-y-4">
                {[
                  "Utilisation de la méthode agile pour des livraisons rapides",
                  "Communication transparente tout au long du projet",
                  "Support et maintenance après le lancement",
                  "Tarification compétitive sans compromettre la qualité",
                  "Historique éprouvé de livraisons réussies",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative h-full w-full rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8">
                <div className="flex h-full flex-col justify-center space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="rounded-lg bg-card p-6 shadow-md"
                  >
                    <Code2 className="mb-3 h-8 w-8 text-primary" />
                    <h4 className="mb-2 font-semibold">Technologie Moderne</h4>
                    <p className="text-sm text-muted-foreground">
                      Construit avec les derniers frameworks et outils
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="rounded-lg bg-card p-6 shadow-md"
                  >
                    <Users className="mb-3 h-8 w-8 text-primary" />
                    <h4 className="mb-2 font-semibold">Equipe d'experts</h4>
                    <p className="text-sm text-muted-foreground">
                      Développeurs et designers expérimentés
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary px-4 py-20 text-primary-foreground md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto max-w-4xl text-center"
        >
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="mb-8 text-lg opacity-90">
            Discutons de la façon dont nous pouvons aider à concrétiser votre vision.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="group bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Commencez Aujourd'hui
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              Programmer un Appel
            </Button>
          </div>
        </motion.div>
      </section>

      
    </div>
  );
}
