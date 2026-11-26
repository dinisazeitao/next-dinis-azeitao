import React from "react";
import tecnologiasData from "@/app/data/tecnologias.json";

interface Tecnologia {
  title: string;
  image: string;
  description: string;
 
}

export default function Tecnologias() {
  const tecnologias: Tecnologia[] = JSON.parse(JSON.stringify(tecnologiasData));

  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-slate-900">Tecnologias Exploradas</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tecnologias.map((tec, i) => {
          return (
            <article
              key={i}
              className="flex flex-col justify-between gap-3 rounded-xl bg-white p-4 shadow-sm border border-slate-200"
            >
              <div className="flex items-center gap-3">
                <img
                  src={`/tecnologias/${tec.image}`}
                  alt={`Logotipo ${tec.title}`}
                  className="h-10 w-10 object-contain shrink-0"
                />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{tec.title}</h3>
                
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">{tec.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}