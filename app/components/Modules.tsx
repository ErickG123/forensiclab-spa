import { Badge, Card, Tabs } from "@radix-ui/themes";
import { Network, Globe, Mail } from "lucide-react";

export function Modules() {
    const modules = {
        network: [
            { name: "ipinfo", description: "Informações detalhadas sobre endereços IP." },
            { name: "arpscan", description: "Scan de rede via protocolo ARP." },
            { name: "dnscan", description: "Realiza levantamento de informações de DNS de domínios e hosts." },
            { name: "snmpscan", description: "Realiza varredura SNMP em dispositivos de rede." },
            { name: "smbscan", description: "Verifica serviços SMB ativos em um host." },
            { name: "sweep", description: "Verifica quais hosts estão ativos em uma faixa de IP." },
            { name: "traceroute", description: "Traça o caminho percorrido por pacotes até um host alvo." },
            { name: "map", description: "Mapeamento de hosts na rede." },
            { name: "scan", description: "Varredura de portas abertas." },
            { name: "fingerprinting", description: "Identificação de serviços e sistemas." }
        ],
        browser: [
            { name: "logins", description: "Extração de credenciais salvas" },
            { name: "favscreen", description: "Captura e organiza screenshots de sites favoritos ou acessados." },
            { name: "words", description: "Identifica palavras mais comuns em histórico de navegação e downloads." },
            { name: "history", description: "Análise de histórico de navegação." },
            { name: "downloads", description: "Lista de arquivos baixados." },
            { name: "patterns", description: "Detecção de padrões suspeitos." }
        ],
        email: [
            { name: "email_parser", description: "Parse de arquivos .eml e .msg." },
            { name: "header_analysis", description: "Análise de cabeçalhos SMTP." }
        ]
    };

    return (
        <section id="modules" className="bg-slate-950 py-20">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-white">Core Modules</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Módulos especializados para diferentes tipos de análise forense
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <Tabs.Root defaultValue="network" className="w-full">
                        <Tabs.List className="flex w-full bg-slate-900 border border-slate-800 p-1 rounded-md overflow-hidden">
                            <Tabs.Trigger
                                value="network"
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-slate-300 rounded-md transition
                                           data-[state=active]:bg-slate-800 data-[state=active]:text-white"
                            >
                                <Network className="mx-auto h-4 w-4" />
                                <span className="text-sm">Network</span>
                            </Tabs.Trigger>

                            <Tabs.Trigger
                                value="browser"
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-slate-300 rounded-md transition
                                           data-[state=active]:bg-slate-800 data-[state=active]:text-white"
                            >
                                <Globe className="mx-auto h-4 w-4" />
                                <span className="text-sm">Browser</span>
                            </Tabs.Trigger>

                            <Tabs.Trigger
                                value="email"
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-slate-300 rounded-md transition
                                           data-[state=active]:bg-slate-800 data-[state=active]:text-white"
                            >
                                <Mail className="mx-auto h-4 w-4" />
                                <span className="text-sm">Email</span>
                            </Tabs.Trigger>
                        </Tabs.List>

                        <Tabs.Content value="network" className="mt-6">
                            <Card className="bg-slate-900 border-slate-800 p-6 relative z-0">
                                <div className="mb-4">
                                    <h3 className="mb-2 text-white">Network Analysis</h3>
                                    <p className="text-sm text-slate-400">
                                        Ferramentas para análise de rede, mapeamento de hosts e identificação de serviços
                                    </p>
                                </div>
                                <div className="space-y-3">
                                    {modules.network.map((func, index) => (
                                        <div key={index} className="flex items-start gap-3 rounded-lg bg-slate-800/30 border border-slate-800 p-4">
                                            <Badge className="bg-blue-950 text-blue-300 border-blue-900 mt-0.5 rounded-md px-1.5 py-0.5">
                                                {func.name}
                                            </Badge>
                                            <p className="text-sm text-slate-400 flex-1">{func.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </Tabs.Content>

                        <Tabs.Content value="browser" className="mt-6">
                            <Card className="bg-slate-900 border-slate-800 p-6 relative z-0">
                                <div className="mb-4">
                                    <h3 className="mb-2 text-white">Browser Forensics</h3>
                                    <p className="text-sm text-slate-400">
                                        Análise de navegadores web, histórico, credenciais e padrões de uso
                                    </p>
                                </div>
                                <div className="space-y-3">
                                    {modules.browser.map((func, index) => (
                                        <div key={index} className="flex items-start gap-3 rounded-lg bg-slate-800/30 border border-slate-800 p-4">
                                            <Badge className="bg-purple-950 text-purple-300 border-purple-900 mt-0.5 rounded-md px-1.5 py-0.5">
                                                {func.name}
                                            </Badge>
                                            <p className="text-sm text-slate-400 flex-1">{func.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </Tabs.Content>

                        <Tabs.Content value="email" className="mt-6">
                            <Card className="bg-slate-900 border-slate-800 p-6 relative z-0">
                                <div className="mb-4">
                                    <h3 className="mb-2 text-white">Email Analysis</h3>
                                    <p className="text-sm text-slate-400">
                                        Análise forense de e-mails, cabeçalhos SMTP e extração de metadados
                                    </p>
                                </div>
                                <div className="space-y-3">
                                    {modules.email.map((func, index) => (
                                        <div key={index} className="flex items-start gap-3 rounded-lg bg-slate-800/30 border border-slate-800 p-4">
                                            <Badge className="bg-green-950 text-green-300 border-green-900 mt-0.5 rounded-md px-1.5 py-0.5">
                                                {func.name}
                                            </Badge>
                                            <p className="text-sm text-slate-400 flex-1">{func.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </Tabs.Content>
                    </Tabs.Root>
                </div>
            </div>
        </section>
    );
}
