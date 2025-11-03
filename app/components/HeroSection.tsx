import { Button } from "@radix-ui/themes";
import { Copy } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24 md:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-blue-900/50 bg-blue-950/30 px-4 py-1.5">
            <span className="text-sm text-blue-300">Open Source • Educacional • Python</span>
          </div>

          <h1 className="mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            ForenseLab
          </h1>

          <p className="mb-8 text-xl text-slate-300 md:text-2xl">
            A Ferramenta Educacional de Perícia Digital
          </p>

          <p className="mb-10 text-slate-400 max-w-2xl mx-auto">
            Uma ponte entre ferramentas comerciais caras e soluções open-source complexas.
            Aprenda metodologia forense sem a curva de aprendizado íngreme.
          </p>

          <div className="mb-8 flex items-center justify-center gap-2 rounded-lg bg-slate-900 border border-slate-800 p-4 max-w-md mx-auto">
            <code className="flex-1 text-left text-sm text-slate-200">
              pip install forensic-cli
            </code>
            <Button
              size="1"
              className="text-slate-400 hover:text-white"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="3" className="bg-blue-600 hover:bg-blue-700 text-white rounded-md p-2.5 hover:cursor-pointer">
              Documentação
            </Button>
            <Button size="3" className="bg-transparent border-slate-700 text-white hover:bg-slate-800 rounded-md p-2.5 hover:cursor-pointer">
              Exemplos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
