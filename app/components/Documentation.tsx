import { Card } from "@radix-ui/themes";
import { Terminal, BookOpen, Code2, Wrench } from "lucide-react";
import { Badge, Separator, Tabs } from "@radix-ui/themes";

export function Documentation() {
  return (
    <section id="documentation" className="bg-slate-900 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-white">Documentation</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Guia completo de instalação, uso e contribuição
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs.Root defaultValue="quickstart" className="w-full">
            <Tabs.List className="grid w-full grid-cols-4 bg-slate-950 border border-slate-800 p-1">
              <Tabs.Trigger value="quickstart"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-slate-300 rounded-md transition
                                           data-[state=active]:bg-slate-800 data-[state=active]:text-white">
                <Terminal className="mx-auto h-4 w-4" />
                Quick Start
              </Tabs.Trigger>
              <Tabs.Trigger value="usage"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-slate-300 rounded-md transition
                                           data-[state=active]:bg-slate-800 data-[state=active]:text-white">
                <Code2 className="mx-auto h-4 w-4" />
                Usage
              </Tabs.Trigger>
              <Tabs.Trigger value="modules"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-slate-300 rounded-md transition
                                           data-[state=active]:bg-slate-800 data-[state=active]:text-white">
                <BookOpen className="mx-auto h-4 w-4" />
                Modules
              </Tabs.Trigger>
              <Tabs.Trigger value="contributing"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-slate-300 rounded-md transition
                                           data-[state=active]:bg-slate-800 data-[state=active]:text-white">
                <Wrench className="mx-auto h-4 w-4" />
                Contributing
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="quickstart" className="mt-6">
              <Card className="bg-slate-950 border-slate-800 p-8">
                <h3 className="mb-4 text-white">Instalação</h3>
                <p className="text-slate-400 mb-6">
                  ForenseLab está disponível via PyPI. Certifique-se de ter Python 3.8+ instalado.
                </p>

                <div className="mb-6">
                  <div className="mb-2 text-sm text-slate-400">Instalar via pip:</div>
                  <div className="rounded-lg bg-slate-900 border border-slate-800 p-4 font-mono text-sm">
                    <span className="text-blue-400">$</span> <span className="text-slate-200">pip install forensic-cli</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="mb-2 text-sm text-slate-400">Ou instalar em modo de desenvolvimento:</div>
                  <div className="rounded-lg bg-slate-900 border border-slate-800 p-4 font-mono text-sm">
                    <div className="text-slate-200"><span className="text-blue-400">$</span> git clone https://github.com/seu-usuario/ForenseLab.git</div>
                    <div className="text-slate-200"><span className="text-blue-400">$</span> cd ForenseLab</div>
                    <div className="text-slate-200"><span className="text-blue-400">$</span> pip install -e .</div>
                  </div>
                </div>

                <Separator className="bg-slate-800 my-6" />

                <h3 className="mb-4 text-white">Primeiro Comando</h3>
                <p className="text-slate-400 mb-6">
                  Após a instalação, verifique se tudo está funcionando:
                </p>

                <div className="mb-6">
                  <div className="rounded-lg bg-slate-900 border border-slate-800 p-4 font-mono text-sm">
                    <div className="text-slate-200 mb-2">
                      <span className="text-blue-400">$</span> forensic-cli <span className="text-purple-400">--version</span>
                    </div>
                    <div className="text-green-400">ForenseLab v0.1.0</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="mb-2 text-sm text-slate-400">Obter ajuda sobre qualquer comando:</div>
                  <div className="rounded-lg bg-slate-900 border border-slate-800 p-4 font-mono text-sm">
                    <span className="text-blue-400">$</span> <span className="text-slate-200">forensic-cli </span><span className="text-purple-400">--help</span>
                  </div>
                </div>
              </Card>
            </Tabs.Content>

            <Tabs.Content value="usage" className="mt-6">
              <Card className="bg-slate-950 border-slate-800 p-8">
                <h3 className="mb-4 text-white">Estrutura de Comandos</h3>
                <p className="text-slate-400 mb-6">
                  O ForenseLab segue uma estrutura hierárquica de comandos:
                </p>

                <div className="mb-6 rounded-lg bg-slate-900 border border-slate-800 p-4 font-mono text-sm text-slate-200">
                  forensic-cli <span className="text-purple-400">[MÓDULO]</span> <span className="text-green-400">[FUNÇÃO]</span> <span className="text-blue-400">[OPÇÕES]</span>
                </div>

                <Separator className="bg-slate-800 my-8" />

                <h3 className="mb-4 text-white">Exemplos Práticos</h3>

                <div className="space-y-6">
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <Badge color="blue" className="bg-blue-950 text-blue-300 border-blue-900">
                        Network
                      </Badge>
                      <span className="text-slate-300">Análise de Rede</span>
                    </div>
                    <div className="rounded-lg bg-slate-900 border border-slate-800 p-4 font-mono text-sm space-y-3">
                      <div>
                        <div className="text-slate-500 mb-1"># Obter informações sobre um IP</div>
                        <div className="text-slate-200">
                          <span className="text-blue-400">$</span> forensic-cli network ipinfo <span className="text-purple-400">--ip</span> <span className="text-green-400">8.8.8.8</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-slate-500 mb-1"># Scan de portas</div>
                        <div className="text-slate-200">
                          <span className="text-blue-400">$</span> forensic-cli network scan <span className="text-purple-400">--target</span> <span className="text-green-400">192.168.1.1</span> <span className="text-purple-400">--ports</span> <span className="text-green-400">1-1000</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-slate-500 mb-1"># Scan ARP da rede local</div>
                        <div className="text-slate-200">
                          <span className="text-blue-400">$</span> forensic-cli network arpscan <span className="text-purple-400">--interface</span> <span className="text-green-400">eth0</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <Badge className="bg-purple-950 text-purple-300 border-purple-900">
                        Browser
                      </Badge>
                      <span className="text-slate-300">Forense de Navegador</span>
                    </div>
                    <div className="rounded-lg bg-slate-900 border border-slate-800 p-4 font-mono text-sm space-y-3">
                      <div>
                        <div className="text-slate-500 mb-1"># Extrair histórico do Chrome</div>
                        <div className="text-slate-200">
                          <span className="text-blue-400">$</span> forensic-cli browser history <span className="text-purple-400">--browser</span> <span className="text-green-400">chrome</span> <span className="text-purple-400">--output</span> <span className="text-green-400">history.json</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-slate-500 mb-1"># Buscar credenciais salvas</div>
                        <div className="text-slate-200">
                          <span className="text-blue-400">$</span> forensic-cli browser logins <span className="text-purple-400">--browser</span> <span className="text-green-400">firefox</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-slate-500 mb-1"># Analisar downloads</div>
                        <div className="text-slate-200">
                          <span className="text-blue-400">$</span> forensic-cli browser downloads <span className="text-purple-400">--browser</span> <span className="text-green-400">chrome</span> <span className="text-purple-400">--since</span> <span className="text-green-400">"2024-01-01"</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <Badge className="bg-green-950 text-green-300 border-green-900">
                        Email
                      </Badge>
                      <span className="text-slate-300">Análise de Email</span>
                    </div>
                    <div className="rounded-lg bg-slate-900 border border-slate-800 p-4 font-mono text-sm space-y-3">
                      <div>
                        <div className="text-slate-500 mb-1"># Analisar cabeçalhos de email</div>
                        <div className="text-slate-200">
                          <span className="text-blue-400">$</span> forensic-cli email header-analysis <span className="text-purple-400">--file</span> <span className="text-green-400">suspicious.eml</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-slate-500 mb-1"># Extrair anexos com segurança</div>
                        <div className="text-slate-200">
                          <span className="text-blue-400">$</span> forensic-cli email extract-attachments <span className="text-purple-400">--file</span> <span className="text-green-400">message.eml</span> <span className="text-purple-400">--output</span> <span className="text-green-400">./attachments</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Tabs.Content>

            <Tabs.Content value="modules" className="mt-6">
              <Card className="bg-slate-950 border-slate-800 p-8">
                <h3 className="mb-4 text-white">Módulos Disponíveis</h3>
                <p className="text-slate-400 mb-8">
                  Cada módulo é focado em um tipo específico de análise forense.
                </p>

                <div className="space-y-8">
                  <div>
                    <h4 className="mb-3 text-white flex items-center gap-2">
                      <Badge className="bg-blue-950 text-blue-300 border-blue-900">
                        network
                      </Badge>
                      Network Forensics
                    </h4>
                    <p className="text-sm text-slate-400 mb-4">
                      Ferramentas para análise de tráfego de rede, mapeamento de hosts e identificação de serviços.
                    </p>
                    <div className="space-y-3">
                      <div className="rounded-lg bg-slate-900 border border-slate-800 p-4">
                        <div className="mb-1 text-white">ipinfo</div>
                        <p className="text-sm text-slate-400">Retorna informações detalhadas sobre um endereço IP (geolocalização, ASN, provedor)</p>
                      </div>
                      <div className="rounded-lg bg-slate-900 border border-slate-800 p-4">
                        <div className="mb-1 text-white">scan</div>
                        <p className="text-sm text-slate-400">Realiza varredura de portas TCP/UDP em um host ou range de IPs</p>
                      </div>
                      <div className="rounded-lg bg-slate-900 border border-slate-800 p-4">
                        <div className="mb-1 text-white">arpscan</div>
                        <p className="text-sm text-slate-400">Descobre hosts ativos na rede local através do protocolo ARP</p>
                      </div>
                      <div className="rounded-lg bg-slate-900 border border-slate-800 p-4">
                        <div className="mb-1 text-white">fingerprinting</div>
                        <p className="text-sm text-slate-400">Identifica sistema operacional e versões de serviços em execução</p>
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-slate-800" />

                  <div>
                    <h4 className="mb-3 text-white flex items-center gap-2">
                      <Badge className="bg-purple-950 text-purple-300 border-purple-900">
                        browser
                      </Badge>
                      Browser Forensics
                    </h4>
                    <p className="text-sm text-slate-400 mb-4">
                      Extração e análise de artefatos de navegadores web (Chrome, Firefox, Edge, Safari).
                    </p>
                    <div className="space-y-3">
                      <div className="rounded-lg bg-slate-900 border border-slate-800 p-4">
                        <div className="mb-1 text-white">history</div>
                        <p className="text-sm text-slate-400">Extrai histórico de navegação com timestamps e URLs visitadas</p>
                      </div>
                      <div className="rounded-lg bg-slate-900 border border-slate-800 p-4">
                        <div className="mb-1 text-white">logins</div>
                        <p className="text-sm text-slate-400">Recupera credenciais salvas (requer permissões apropriadas)</p>
                      </div>
                      <div className="rounded-lg bg-slate-900 border border-slate-800 p-4">
                        <div className="mb-1 text-white">downloads</div>
                        <p className="text-sm text-slate-400">Lista arquivos baixados com datas e URLs de origem</p>
                      </div>
                      <div className="rounded-lg bg-slate-900 border border-slate-800 p-4">
                        <div className="mb-1 text-white">patterns</div>
                        <p className="text-sm text-slate-400">Detecta padrões suspeitos no histórico (sites maliciosos, phishing)</p>
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-slate-800" />

                  <div>
                    <h4 className="mb-3 text-white flex items-center gap-2">
                      <Badge className="bg-green-950 text-green-300 border-green-900">
                        email
                      </Badge>
                      Email Forensics
                    </h4>
                    <p className="text-sm text-slate-400 mb-4">
                      Análise forense de mensagens de email, cabeçalhos SMTP e extração de anexos.
                    </p>
                    <div className="space-y-3">
                      <div className="rounded-lg bg-slate-900 border border-slate-800 p-4">
                        <div className="mb-1 text-white">header-analysis</div>
                        <p className="text-sm text-slate-400">Analisa cabeçalhos SMTP para rastrear origem e rota de emails</p>
                      </div>
                      <div className="rounded-lg bg-slate-900 border border-slate-800 p-4">
                        <div className="mb-1 text-white">extract-attachments</div>
                        <p className="text-sm text-slate-400">Extrai anexos de forma segura com análise de hash e tipo MIME</p>
                      </div>
                      <div className="rounded-lg bg-slate-900 border border-slate-800 p-4">
                        <div className="mb-1 text-white">metadata</div>
                        <p className="text-sm text-slate-400">Extrai metadados completos de mensagens (remetente, destinatário, timestamps)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Tabs.Content>

            <Tabs.Content value="contributing" className="mt-6">
              <Card className="bg-slate-950 border-slate-800 p-8">
                <h3 className="mb-4 text-white">Como Contribuir</h3>
                <p className="text-slate-400 mb-6">
                  ForenseLab é um projeto open-source e contribuições são bem-vindas! Aqui está como você pode ajudar:
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="mb-2 text-white">1. Fork e Clone</h4>
                    <div className="rounded-lg bg-slate-900 border border-slate-800 p-4 font-mono text-sm">
                      <div className="text-slate-200 mb-1"><span className="text-blue-400">$</span> git clone https://github.com/seu-usuario/ForenseLab.git</div>
                      <div className="text-slate-200 mb-1"><span className="text-blue-400">$</span> cd ForenseLab</div>
                      <div className="text-slate-200"><span className="text-blue-400">$</span> git checkout -b feature/nova-funcionalidade</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-2 text-white">2. Instale Dependências de Desenvolvimento</h4>
                    <div className="rounded-lg bg-slate-900 border border-slate-800 p-4 font-mono text-sm">
                      <div className="text-slate-200 mb-1"><span className="text-blue-400">$</span> pip install -e ".[dev]"</div>
                      <div className="text-slate-200"><span className="text-blue-400">$</span> pre-commit install</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-2 text-white">3. Estrutura de um Módulo</h4>
                    <p className="text-sm text-slate-400 mb-3">
                      Cada módulo segue uma estrutura padronizada:
                    </p>
                    <div className="rounded-lg bg-slate-900 border border-slate-800 p-4 font-mono text-sm text-slate-200">
                      <div>forensic_cli/</div>
                      <div>├── modules/</div>
                      <div>│   ├── network/</div>
                      <div>│   │   ├── __init__.py</div>
                      <div>│   │   ├── commands.py  <span className="text-slate-500"># Comandos CLI</span></div>
                      <div>│   │   └── core.py      <span className="text-slate-500"># Lógica principal</span></div>
                      <div>│   └── seu_modulo/</div>
                      <div>├── cli.py</div>
                      <div>└── utils/</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-2 text-white">4. Testes</h4>
                    <p className="text-sm text-slate-400 mb-3">
                      Sempre adicione testes para novas funcionalidades:
                    </p>
                    <div className="rounded-lg bg-slate-900 border border-slate-800 p-4 font-mono text-sm">
                      <div className="text-slate-200 mb-1"><span className="text-blue-400">$</span> pytest tests/</div>
                      <div className="text-slate-200"><span className="text-blue-400">$</span> pytest --cov=forensic_cli tests/</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-2 text-white">5. Envie um Pull Request</h4>
                    <p className="text-sm text-slate-400 mb-3">
                      Certifique-se de que:
                    </p>
                    <ul className="space-y-2 text-sm text-slate-400">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>O código segue o estilo PEP 8</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>Todos os testes passam</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>Documentação está atualizada</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>Commits são descritivos e focados</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <Separator className="bg-slate-800 my-6" />

                <div>
                  <h4 className="mb-3 text-white">Código de Conduta</h4>
                  <p className="text-sm text-slate-400">
                    Este projeto segue o Contributor Covenant Code of Conduct. Ao participar,
                    você está concordando em manter um ambiente respeitoso e acolhedor para todos.
                  </p>
                </div>

                <Separator className="bg-slate-800 my-6" />

                <div>
                  <h4 className="mb-3 text-white">Licença</h4>
                  <p className="text-sm text-slate-400">
                    ForenseLab está licenciado sob a MIT License. Você é livre para usar,
                    modificar e distribuir o código, desde que mantenha o aviso de copyright original.
                  </p>
                </div>
              </Card>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    </section>
  );
}
