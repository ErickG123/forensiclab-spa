import { Card } from "@radix-ui/themes";
import { Badge } from "@radix-ui/themes/components/badge";

import { Calendar, GitCommit, Sparkles, Bug, Wrench, AlertCircle } from "lucide-react";

export function Changelog() {
    const versions = [
        {
            version: "0.2.0",
            date: "2024-12-15",
            status: "Em Desenvolvimento",
            changes: [
                {
                    type: "feature",
                    description: "Adicionado módulo de análise de email com suporte a .eml e .msg"
                },
                {
                    type: "feature",
                    description: "Novo comando 'browser patterns' para detecção de comportamentos suspeitos"
                },
                {
                    type: "enhancement",
                    description: "Melhorias na extração de credenciais do Chrome/Firefox"
                },
                {
                    type: "enhancement",
                    description: "Suporte a exportação em múltiplos formatos (JSON, CSV, HTML)"
                },
                {
                    type: "feature",
                    description: "Wizard interativo para guiar análises forenses"
                }
            ]
        },
        {
            version: "1.4.6",
            date: "2024-09-24",
            status: "Atual",
            changes: [
                {
                    type: "enhancement",
                    description: "Melhorias do README"
                },
                {
                    type: "enhancement",
                    description: "Melhoria nas funções de port scanner e network map"
                },
                {
                    type: "feature",
                    description: "Adição da visualização em nodes para o network map"
                },
                {
                    type: "fix",
                    description: "Correções no workflow de deploy"
                }
            ]
        },
        {
            version: "1.0.0",
            date: "2024-09-01",
            status: "Lançamento Inicial",
            changes: [
                {
                    type: "feature",
                    description: "Criação da pipeline de deploy do projeto no PyPi e GitHub Pages"
                },
                {
                    type: "enhancement",
                    description: "Adição de barras de progresso na execução das funções"
                }
            ]
        },
        {
            version: "0.1.0",
            date: "2024-08-19",
            status: "Alpha",
            changes: [
                {
                    type: "feature",
                    description: "Criação dos módulos de browser, network e email"
                },
                {
                    type: "feature",
                    description: "Criação da CLI utilizando Typer"
                },
                {
                    type: "feature",
                    description: "Integração da CLI com os módulos"
                }
            ]
        }
    ];

    const getTypeIcon = (type: string) => {
        switch (type) {
            case "feature":
                return <Sparkles className="h-4 w-4" />;
            case "fix":
                return <Bug className="h-4 w-4" />;
            case "enhancement":
                return <Wrench className="h-4 w-4" />;
            case "breaking":
                return <AlertCircle className="h-4 w-4" />;
            default:
                return <GitCommit className="h-4 w-4" />;
        }
    };

    const getTypeColor = (type: string) => {
        switch (type) {
            case "feature":
                return "bg-blue-950 text-blue-300 border-blue-900 rounded-md px-1.5 py-0.5";
            case "fix":
                return "bg-red-950 text-red-300 border-red-900 rounded-md px-1.5 py-0.5";
            case "enhancement":
                return "bg-purple-950 text-purple-300 border-purple-900 rounded-md px-1.5 py-0.5";
            case "breaking":
                return "bg-orange-950 text-orange-300 border-orange-900 rounded-md px-1.5 py-0.5";
            default:
                return "bg-slate-950 text-slate-300 border-slate-800 rounded-md px-1.5 py-0.5";
        }
    };

    const getTypeLabel = (type: string) => {
        switch (type) {
            case "feature":
                return "Novo";
            case "fix":
                return "Correção";
            case "enhancement":
                return "Melhoria";
            case "breaking":
                return "Breaking";
            default:
                return "Mudança";
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Em Desenvolvimento":
                return "bg-blue-950 text-blue-300 border-blue-900 rounded-md px-1.5 py-0.5";
            case "Atual":
                return "bg-green-950 text-green-300 border-green-900 rounded-md px-1.5 py-0.5";
            case "Lançamento Inicial":
                return "bg-purple-950 text-purple-300 border-purple-900 rounded-md px-1.5 py-0.5";
            default:
                return "bg-slate-950 text-slate-300 border-slate-800 rounded-md px-1.5 py-0.5";
        }
    };

    return (
        <section id="changelog" className="bg-slate-950 py-20">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-white">Changelog</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Histórico completo de versões e mudanças do ForenseLab
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-6">
                    {versions.map((version, index) => (
                        <Card key={index} className="bg-slate-900 border-slate-800 p-6 hover:border-slate-700 transition-colors">
                            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                                <div className="flex items-center gap-3">
                                    <h3 className="text-white">v{version.version}</h3>
                                    <Badge className={getStatusColor(version.status)}>
                                        {version.status}
                                    </Badge>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-400">
                                    <Calendar className="h-4 w-4" />
                                    {new Date(version.date).toLocaleDateString('pt-BR', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </div>
                            </div>

                            <div className="space-y-3">
                                {version.changes.map((change, changeIndex) => (
                                    <div
                                        key={changeIndex}
                                        className="flex items-start gap-3 rounded-lg bg-slate-950 border border-slate-800 p-3"
                                    >
                                        <div className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded border ${getTypeColor(change.type)}`}>
                                            {getTypeIcon(change.type)}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <Badge className={`text-xs ${getTypeColor(change.type)}`}>
                                                    {getTypeLabel(change.type)}
                                                </Badge>
                                            </div>
                                            <p className="text-sm text-slate-300">{change.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Card className="inline-block bg-slate-900 border border-slate-800 rounded-md px-6 py-4">
                        <p className="text-sm text-slate-400">
                            Para ver o changelog completo e detalhado, visite o{" "}
                            <a href="https://erickg123.github.io/devkit_forense/" target="_blank" className="text-blue-400 hover:text-blue-300 underline">
                                repositório no GitHub
                            </a>
                        </p>
                    </Card>
                </div>
            </div>
        </section>
    );
}
