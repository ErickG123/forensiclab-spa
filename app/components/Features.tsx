import { Terminal, Puzzle, GraduationCap } from "lucide-react";
import { Card } from "@radix-ui/themes";

export function Features() {
  const features = [
    {
      icon: Terminal,
      title: "Intuitive CLI",
      description: "Interface de linha de comando clara e bem documentada, construída com Typer. Comandos simples e legíveis que facilitam o aprendizado.",
      color: "blue"
    },
    {
      icon: Puzzle,
      title: "Modular Architecture",
      description: "Arquitetura extensível que permite adicionar novos módulos de análise sem alterar o núcleo. Cada módulo é independente e focado.",
      color: "purple"
    },
    {
      icon: GraduationCap,
      title: "Didactic Focus",
      description: "Abstrai a complexidade para que estudantes possam focar no raciocínio investigativo. Aprenda metodologia, não apenas operação de ferramentas.",
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return { bg: "bg-blue-950", border: "border-blue-900", icon: "text-blue-400" };
      case "purple":
        return { bg: "bg-purple-950", border: "border-purple-900", icon: "text-purple-400" };
      case "green":
        return { bg: "bg-green-950", border: "border-green-900", icon: "text-green-400" };
      default:
        return { bg: "bg-slate-950", border: "border-slate-900", icon: "text-slate-400" };
    }
  };

  return (
    <section id="features" className="bg-slate-900 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-white">Recursos Principais</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Projetado com foco em educação, simplicidade e extensibilidade
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            const Icon = feature.icon;
            
            return (
              <Card key={index} className="bg-slate-950 border-slate-800 p-8 hover:border-slate-700 transition-colors">
                <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-lg ${colors.bg} border ${colors.border}`}>
                  <Icon className={`h-7 w-7 ${colors.icon}`} />
                </div>
                <h3 className="mb-3 text-white">{feature.title}</h3>
                <p className="text-slate-400 text-sm">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
