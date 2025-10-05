"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function InvisibleWelfSlim() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <header className="backdrop-blur-sm text-gray-800 py-6" style={{backgroundColor: '#DCDCDC'}}>
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
            Invisible Welf Slim
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            La técnica más discreta y natural. Invisible Welf Slim proporciona longitud y volumen sin que nadie note que llevas extensiones.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                ¿Qué es Invisible Welf Slim?
              </h2>
              <p className="text-gray-600 mb-4">
                Invisible Welf Slim es la técnica más avanzada en discreción. Utiliza hebras ultra-finas y un método de aplicación que hace completamente imperceptible la presencia de extensiones.
              </p>
              <p className="text-gray-600 mb-6">
                Ideal para personas con cabello fino o que buscan un resultado completamente natural sin comprometer la comodidad.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Completamente invisible
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Ultra-ligero y cómodo
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Duración de 3-4 meses
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Ideal para cabello fino
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="/images/inject-3.jpeg"
                alt="Invisible Welf Slim resultado"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Características Únicas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                👁️
              </div>
              <h3 className="font-semibold mb-2">Invisible</h3>
              <p className="text-sm text-gray-600">Nadie notará que llevas extensiones</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                🪶
              </div>
              <h3 className="font-semibold mb-2">Ultra-ligero</h3>
              <p className="text-sm text-gray-600">Sensación de cabello natural</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                💧
              </div>
              <h3 className="font-semibold mb-2">Resistente</h3>
              <p className="text-sm text-gray-600">Resistente al agua y sudor</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                ⚡
              </div>
              <h3 className="font-semibold mb-2">Rápido</h3>
              <p className="text-sm text-gray-600">Aplicación en tiempo récord</p>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Resultados Increíbles
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Antes</h3>
              <img
                src="/images/inject-4.jpeg"
                alt="Antes del tratamiento"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Después</h3>
              <img
                src="/images/inject-5.jpeg"
                alt="Después del tratamiento"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Descubre la magia de lo invisible
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Experimenta la técnica más discreta y natural del mercado
          </p>
          <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg">
            Agendar Consulta
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