"use client";

import React, { useState } from "react";

export default function CaracteristicasPage() {
  const caracteristicas = [
    "JSX, sintaxe que mistura HTML e JS.",
    "Componentes, funções que retornam JSX.",
    "Componentes Reutilizáveis e Modulares.",
    "Roteamento Automático e APIs.",
    "Hooks: useState, useEffect e useSWR.",
    "Renderização Rápida e SEO Friendly.",
    "TypeScript Seguro e Escalável.",
    "Comunidade Ativa e Popularidade.",
  ];

  const [destaque, setDestaque] = useState<string | null>(null);

  function handleSelecionar(item: string) {
    setDestaque(item);
  }

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">Características do React e Next.js</h2>

      <ul className="list-disc pl-5 space-y-2">
        {caracteristicas.map((caracteristica, i) => {
          return (
            <li
              key={i}
              onClick={() => handleSelecionar(caracteristica)}
              className="cursor-pointer hover:underline"
            >
              {caracteristica}
            </li>
          );
        })}
      </ul>

      {destaque && (
        <div className="mt-2 p-3 rounded-lg bg-blue-300 text-sm">
          <strong>Característica selecionada:</strong> {destaque}
        </div>
      )}
    </section>
  );
}