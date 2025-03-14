"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Chip } from "@heroui/chip";
import { Badge } from "@heroui/badge";
import { Tooltip } from "@heroui/tooltip";
import Image from "next/image";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AdminSection from "./AdminSection";




// Background Zombie Silhouettes Component


// Hero Section Component
const HeroSection = () => {
  return (
    <div className="relative container mx-auto px-4 py-16 max-w-6xl grid md:grid-cols-2 gap-8 items-center">
      {/* Left Side - Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h2 className="text-5xl font-black text-white uppercase tracking-tight">
          Przetrwaj. Walcz. Zbuduj.
        </h2>
        <p className="text-xl text-white/80 mb-6">
          Odkryj bezlitosny świat Project Zomboid, gdzie każda decyzja może być twoją ostatnią. Dołącz do Dead Zone Heaven i napisz swoją własną historię przetrwania.
        </p>
        <div className="flex space-x-4">
          <Button 
            color="danger" 
            variant="shadow" 
            className="uppercase tracking-wider"
          >
            Rozpocznij Przygodę
          </Button>
          <Button 
            color="default" 
            variant="bordered" 
            className="uppercase tracking-wider"
          >
            Dowiedz się więcej
          </Button>
        </div>
      </motion.div>

      {/* Right Side - Character Image with Subtle Animation */}
      <div className="flex justify-center items-center relative">
        {/* Glowing Pulse Background */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.8, 0.6],
            boxShadow: [
              '0 0 20px rgba(220,38,38,0.4)',  // red glow
              '0 0 30px rgba(220,38,38,0.6)',
              '0 0 20px rgba(220,38,38,0.4)'
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-red-700/20 rounded-2xl blur-2xl"
        />

        {/* Character Image with Subtle Hover Effect */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 1, -1, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative z-10 group"
        >
          <div className="absolute -inset-1 bg-red-500/50 rounded-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 blur-md"></div>
          <Image 
            src="/render.png" 
            alt="Project Zomboid Character" 
            width={500} 
            height={600} 
            priority
            unoptimized
            className="relative z-20 max-w-full h-auto object-contain rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default function DZHLandingPage() {
  const features = [
    { 
      title: "Losowe wydarzenia", 
      desc: "Nieprzewidywalne starcia z zombie, które trzymają w napięciu",
      icon: "🎲"
    },
    { 
      title: "Dynamiczna rozgrywka", 
      desc: "Intensywne PvP i PvE, które sprawią, że adrenalina zawsze będzie na wysokim poziomie",
      icon: "⚔️"
    },
    { 
      title: "Unikalne mody", 
      desc: "Niestandardowe dodatki, które całkowicie zmieniają rozgrywkę",
      icon: "🛠️"
    },
    { 
      title: "Aktywna społeczność", 
      desc: "Tysiące graczy, setki historii przetrwania i wzajemnego wsparcia",
      icon: "👥"
    },
    { 
      title: "Optymalizacja", 
      desc: "Wydajność ponad wszystko - graj bez zacięć i lagów",
      icon: "🚀"
    },
    { 
      title: "Survival Extreme", 
      desc: "Prawdziwe wyzwanie na każdym kroku, które sprawdzi twoje umiejętności przetrwania",
      icon: "💀"
    }
  ];

  const admins = [
    { 
      name: "mixu", 
      role: "Szef Techniczny", 
      color: "primary",
      specialties: ["Technologia", "Infrastruktura"]
    },
    { 
      name: "mixowa", 
      role: "Marketing & Social Media", 
      color: "secondary",
      specialties: ["Promocja", "Komunikacja"]
    },
    { 
      name: "tado", 
      role: "Zarządzanie Modami", 
      color: "success",
      specialties: ["Modyfikacje", "Rozwój"]
    },
    { 
      name: "hahuj", 
      role: "Administrator Rozgrywki", 
      color: "warning",
      specialties: ["PvP", "Balans"]
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
   

      <div className="relative z-20 container mx-auto px-4 py-16 max-w-6xl">
        {/* Hero Section */}
        <HeroSection />

        {/* Poprzednia sekcja nagłówkowa */}
        <motion.header 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge color="danger" variant="shadow" className="mb-4">
            Sezon 6 | Project Zomboid
          </Badge>
          <h1 className="text-6xl font-black uppercase tracking-tighter mb-4 text-white">
            Dead Zone Heaven
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Witaj w jednym z największych i najbardziej uznanych serwerów gry Project Zomboid na świecie! Urodzony w 2023 roku, DZH szybko stał się prawdziwym rajem dla fanów survivalu.
          </p>
        </motion.header>

        {/* Reszta kodu pozostaje bez zmian */}
        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-center space-x-6 mb-16"
        >
          <Tooltip content="Dołącz do naszej społeczności">
            <Link href="#">
              <Button 
                color="danger" 
                variant="shadow" 
                className="uppercase tracking-wider"
              >
                Dołącz na Discord
              </Button>
            </Link>
          </Tooltip>
          <Tooltip content="Dowiedz się więcej o grze">
            <Link href="#">
              <Button 
                color="default" 
                variant="bordered" 
                className="uppercase tracking-wider"
              >
                Strona Gry
              </Button>
            </Link>
          </Tooltip>
        </motion.div>

        {/* Reszta sekcji bez zmian */}
        {/* Features Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Dlaczego DZH?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-zinc-800/70 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
              >
                <CardHeader className="flex items-center space-x-4">
                  <span className="text-3xl">{feature.icon}</span>
                  <Chip color="danger" variant="bordered">
                    {feature.title}
                  </Chip>
                </CardHeader>
                <CardBody>
                  <p className="text-white/80">{feature.desc}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </motion.section>

        <Divider className="my-12" />


      </div>
    </div>
  );
}