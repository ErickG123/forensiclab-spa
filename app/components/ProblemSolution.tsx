import { Card } from "@radix-ui/themes";
import { AlertTriangle, Lightbulb } from "lucide-react";

export function ProblemSolution() {
    return (
        <section id="about" className="bg-slate-950 py-20">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <Card className="bg-slate-900 border-slate-800 p-8">
                        <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-950 border border-red-900">
                                <AlertTriangle className="h-6 w-6 text-red-400" />
                            </div>
                            <h3 className="text-white">O Problema</h3>
                        </div>
                        <p className="text-slate-400">
                            Ferramentas comerciais como EnCase e FTK são caras e inacessíveis para estudantes.
                            Por outro lado, ferramentas open-source como Autopsy e Sleuth Kit têm uma curva
                            de aprendizado muito íngreme para iniciantes, focando em operação técnica ao invés
                            de metodologia investigativa.
                        </p>
                    </Card>

                    <Card className="bg-slate-900 border-slate-800 p-8">
                        <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-950 border border-blue-900">
                                <Lightbulb className="h-6 w-6 text-blue-400" />
                            </div>
                            <h3 className="text-white">A Proposta</h3>
                        </div>
                        <p className="text-slate-400">
                            ForenseLab é uma ponte educacional. Um laboratório digital que abstrai a
                            complexidade técnica, permitindo que estudantes e professores foquem no
                            raciocínio investigativo e na metodologia forense. Simples de usar, mas
                            poderoso o suficiente para cenários reais de aprendizado.
                        </p>
                    </Card>
                </div>
            </div>
        </section>
    );
}
