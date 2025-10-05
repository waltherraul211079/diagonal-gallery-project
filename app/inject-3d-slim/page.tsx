"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function Inject3dSlim() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-black/90 backdrop-blur-sm text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              Volver al inicio
            </Link>
            <img
              src="/images/silva-h-logo-branca-300x291.png"
              alt="Silva Hair Extensions Logo"
              className="h-16"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Inject 3D Slim
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            La técnica más avanzada en extensiones capilares. Volumen natural y resultados espectaculares con la innovadora tecnología Inject 3D Slim.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                ¿Qué es Inject 3D Slim?
              </h2>
              <p className="text-gray-600 mb-4">
                Inject 3D Slim es una técnica revolucionaria que permite agregar volumen y longitud de manera completamente natural. Utilizamos hebras ultra-finas que se integran perfectamente con tu cabello natural.
              </p>
              <p className="text-gray-600 mb-6">
                Esta técnica es ideal para personas que buscan un cambio sutil pero efectivo, proporcionando densidad y movimiento natural al cabello.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  Aplicación rápida y cómoda
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  Resultado completamente natural
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  Duración de 3-4 meses
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  No daña el cabello natural
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="/images/inject-1.jpeg"
                alt="Inject 3D Slim resultado"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Proceso de Aplicación
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Consulta</h3>
              <p className="text-gray-600">
                Evaluamos tu cabello y determinamos la mejor estrategia para lograr el resultado deseado.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Aplicación</h3>
              <p className="text-gray-600">
                Colocamos las extensiones Inject 3D Slim con precisión milimétrica para un resultado natural.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Finalización</h3>
              <p className="text-gray-600">
                Cortamos y peinamos para integrar perfectamente las extensiones con tu cabello natural.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Lista para transformar tu cabello?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Agenda tu cita y descubre el poder de Inject 3D Slim
          </p>
          <Button className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3 text-lg">
            Contactar Ahora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Silva Hair Extensions. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  )
}