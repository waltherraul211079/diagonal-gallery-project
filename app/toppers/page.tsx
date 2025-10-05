"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function Toppers() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-50">
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
            Toppers
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            La solución perfecta para agregar volumen y cobertura en la zona superior. Nuestros toppers proporcionan densidad instantánea donde más la necesitas.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                ¿Qué son los Toppers?
              </h2>
              <p className="text-gray-600 mb-4">
                Los toppers son piezas capilares especialmente diseñadas para cubrir y dar volumen a la zona superior de la cabeza. Son ideales para personas con adelgazamiento capilar o que buscan mayor densidad en áreas específicas.
              </p>
              <p className="text-gray-600 mb-6">
                Fabricados con cabello humano de alta calidad, se integran perfectamente con tu cabello natural, proporcionando cobertura y volumen instantáneos.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Cobertura instantánea
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Fácil aplicación
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Cabello humano 100%
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Múltiples sistemas de sujeción
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="/images/inject-7.jpeg"
                alt="Toppers resultado"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Tipos de Toppers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                📎
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Clip-In</h3>
              <p className="text-gray-600 text-center mb-4">
                Fácil aplicación con clips seguros. Perfecto para uso diario y ocasional.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Aplicación en segundos</li>
                <li>• Reutilizable</li>
                <li>• No daña el cabello</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                🔗
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Semi-Permanente</h3>
              <p className="text-gray-600 text-center mb-4">
                Aplicación profesional con mayor duración. Ideal para uso continuo.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Duración 2-3 meses</li>
                <li>• Mayor seguridad</li>
                <li>• Aplicación profesional</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                ✨
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Personalizado</h3>
              <p className="text-gray-600 text-center mb-4">
                Diseñado específicamente para tu tipo de cabello y necesidades.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Medidas exactas</li>
                <li>• Color perfecto</li>
                <li>• Máxima naturalidad</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Beneficios de los Toppers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold mb-2">Cobertura Precisa</h3>
              <p className="text-sm text-gray-600">Cubre exactamente donde necesitas volumen</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold mb-2">Resultado Inmediato</h3>
              <p className="text-sm text-gray-600">Volumen y densidad al instante</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="font-semibold mb-2">Aspecto Natural</h3>
              <p className="text-sm text-gray-600">Se integra perfectamente con tu cabello</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="font-semibold mb-2">Confianza</h3>
              <p className="text-sm text-gray-600">Recupera tu autoestima y seguridad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Proceso de Selección
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">Consulta</h3>
                <p className="text-gray-600 text-sm">
                  Evaluamos tu cabello y determinamos el tipo de topper ideal para ti.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Personalización</h3>
                <p className="text-gray-600 text-sm">
                  Seleccionamos el color, textura y tamaño perfecto para tu caso.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Aplicación</h3>
                <p className="text-gray-600 text-sm">
                  Colocamos y ajustamos el topper para un resultado natural y cómodo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-500 to-violet-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Recupera tu confianza
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Descubre cómo nuestros toppers pueden transformar tu look
          </p>
          <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg">
            Consulta Gratuita
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