import { Card } from "@radix-ui/themes";
import { LayoutDashboard, LineChart, Wand2, Smartphone } from "lucide-react";

export function Roadmap() {
    const roadmapItems = [
        {
            icon: LayoutDashboard,
            title: "Dashboard Web",
            description: "Interface gráfica para visualização de resultados e geração de relatórios interativos",
            status: "Planejado"
        },
        {
            icon: LineChart,
            title: "Visualizadores",
            description: "Gráficos, mapas de rede e timelines para análise visual de dados forenses",
            status: "Planejado"
        },
        {
            icon: Wand2,
            title: "Wizard Interativo",
            description: "Assistente passo a passo para guiar investigações e gerar relatórios automáticos",
            status: "Em Desenvolvimento"
        },
        {
            icon: Smartphone,
            title: "Novos Módulos",
            description: "Análise mobile (iOS/Android), detecção de malware e recuperação de dados",
            status: "Futuro"
        }
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Em Desenvolvimento":
                return "bg-blue-950 text-blue-300 border-blue-900";
            case "Planejado":
                return "bg-purple-950 text-purple-300 border-purple-900";
            default:
                return "bg-slate-950 text-slate-300 border-slate-800";
        }
    };

    return (
        <section className="bg-slate-950 py-20">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-white">Roadmap</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Futuras extensões planejadas para expandir as capacidades educacionais da ferramenta
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {roadmapItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <Card key={index} className="bg-slate-900 border-slate-800 p-6 hover:border-slate-700 transition-colors">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-slate-950 border border-slate-800">
                                        <Icon className="h-6 w-6 text-slate-400" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="mb-2 flex items-center justify-between gap-2">
                                            <h3 className="text-white">{item.title}</h3>
                                            <span className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs ${getStatusColor(item.status)}`}>
                                                {item.status}
                                            </span>
                                        </div>
                                        <p className="text-sm text-slate-400">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
