import { Separator } from "@radix-ui/themes";
import { Github, Package } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                  <span className="text-white text-sm">FL</span>
                </div>
                <span className="text-white">ForenseLab</span>
              </div>
              <p className="text-sm text-slate-400">
                Ferramenta educacional open-source para perícia digital. 
                Aprenda metodologia forense de forma acessível.
              </p>
            </div>

            <div>
              <h4 className="mb-4 text-white">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                    Examples
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                    Contributing Guide
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-white">Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                    <Github className="h-4 w-4" />
                    GitHub Repository
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                    <Package className="h-4 w-4" />
                    PyPI Package
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="bg-slate-800 mb-8" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <p>
              © {new Date().getFullYear()} ForenseLab. Open Source sob licença MIT.
            </p>
            <p className="text-slate-500">
              Construído com Python • Typer • Rich
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
