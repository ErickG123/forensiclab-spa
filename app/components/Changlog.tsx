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
            version: "0.1.5",
            date: "2024-11-28",
            status: "Atual",
            changes: [
                {
                    type: "fix",
                    description: "Corrigido bug na extração de histórico do Firefox no Windows"
                },
                {
                    type: "fix",
                    description: "Resolvido problema de encoding em análise de emails com caracteres especiais"
                },
                {
                    type: "enhancement",
                    description: "Melhorado desempenho do scan de portas em redes grandes"
                },
                {
                    type: "enhancement",
                    description: "Adicionado progress bar para operações demoradas"
                }
            ]
        },
        {
            version: "0.1.0",
            date: "2024-10-30",
            status: "Lançamento Inicial",
            changes: [
                {
                    type: "feature",
                    description: "Módulo Network com comandos: ipinfo, scan, arpscan, fingerprinting"
                },
                {
                    type: "feature",
                    description: "Módulo Browser com suporte a Chrome, Firefox, Edge e Safari"
                },
                {
                    type: "feature",
                    description: "Interface CLI construída com Typer e Rich"
                },
                {
                    type: "feature",
                    description: "Arquitetura modular e extensível"
                },
                {
                    type: "feature",
                    description: "Documentação completa em Português"
                },
                {
                    type: "feature",
                    description: "Testes automatizados com pytest"
                }
            ]
        },
        {
            version: "0.0.1",
            date: "2024-09-15",
            status: "Alpha",
            changes: [
                {
                    type: "feature",
                    description: "Prova de conceito inicial"
                },
                {
                    type: "feature",
                    description: "Estrutura básica do projeto"
                },
                {
                    type: "feature",
                    description: "Primeiros comandos de rede"
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
                            <a href="https://github.com/ErickG123/devkit_forense" className="text-blue-400 hover:text-blue-300 underline">
                                repositório no GitHub
                            </a>
                        </p>
                    </Card>
                </div>
            </div>
        </section>
    );
}
