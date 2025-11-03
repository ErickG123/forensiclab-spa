import { Card } from "@radix-ui/themes";
import { Terminal } from "lucide-react";

export function CLIExample() {
  return (
    <section id="install" className="bg-slate-900 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-white">CLI in Action</h2>
            <p className="text-slate-400">
              Interface simples e intuitiva. Veja como é fácil começar a usar
            </p>
          </div>

          <Card className="bg-slate-950 border-slate-800 overflow-hidden border rounded-md">
            <div className="flex items-center gap-2 bg-slate-900 border-b border-slate-800 px-4 py-3">
              <Terminal className="h-4 w-4 text-slate-400" />
              <span className="text-sm text-slate-400">Terminal</span>
            </div>

            <div className="p-6 font-mono text-sm">
              <div className="space-y-4">
                <div>
                  <div className="text-slate-500"># Scan a host for open ports</div>
                  <div className="text-slate-200">
                    <span className="text-blue-400">$</span> forensic-cli network scan <span className="text-purple-400">--target</span> <span className="text-green-400">192.168.1.1</span> <span className="text-purple-400">--ports</span> <span className="text-green-400">80,443</span>
                  </div>
                </div>

                <div className="border-t border-slate-800 pt-4">
                  <div className="text-slate-500"># Extract browser history from Chrome</div>
                  <div className="text-slate-200">
                    <span className="text-blue-400">$</span> forensic-cli browser history <span className="text-purple-400">--browser</span> <span className="text-green-400">chrome</span> <span className="text-purple-400">--output</span> <span className="text-green-400">./report.json</span>
                  </div>
                </div>

                <div className="border-t border-slate-800 pt-4">
                  <div className="text-slate-500"># Analyze email headers</div>
                  <div className="text-slate-200">
                    <span className="text-blue-400">$</span> forensic-cli email header-analysis <span className="text-purple-400">--file</span> <span className="text-green-400">suspicious.eml</span>
                  </div>
                </div>

                <div className="border-t border-slate-800 pt-4">
                  <div className="text-slate-500"># Get IP information</div>
                  <div className="text-slate-200">
                    <span className="text-blue-400">$</span> forensic-cli network ipinfo <span className="text-purple-400">--ip</span> <span className="text-green-400">8.8.8.8</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-slate-400 text-sm">
              Todos os comandos incluem <span className="text-blue-400">--help</span> para documentação detalhada
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
