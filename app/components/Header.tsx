import { Button } from "@radix-ui/themes/dist/cjs/index.js";
import { Github } from "lucide-react";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/95 backdrop-blur">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                            <span className="text-white">FL</span>
                        </div>
                        <span className="text-xl text-white">ForenseLab</span>
                    </div>
                </div>

                <nav className="hidden md:flex items-center gap-6">
                    <a href="#about" className="text-sm text-slate-300 hover:text-white transition-colors">
                        Sobre
                    </a>
                    <a href="#features" className="text-sm text-slate-300 hover:text-white transition-colors">
                        Funcionalidades
                    </a>
                    <a href="#modules" className="text-sm text-slate-300 hover:text-white transition-colors">
                        Módulos
                    </a>
                    <a href="#documentation" className="text-sm text-slate-300 hover:text-white transition-colors">
                        Documentação
                    </a>
                    <a href="#changelog" className="text-sm text-slate-300 hover:text-white transition-colors">
                        Changelog
                    </a>
                </nav>

                <a href="https://github.com/ErickG123/devkit_forense" target="_blank">
                    <Button className="flex justify-center items-center bg-transparent border border-slate-700 rounded-md 
                                 text-white hover:bg-slate-800 p-2.5 hover:cursor-pointer">
                        <Github className="mr-2 h-4 w-4" />
                        Ver no GitHub
                    </Button>
                </a>
            </div>
        </header>
    );
}
