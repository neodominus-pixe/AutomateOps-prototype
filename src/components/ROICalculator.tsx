import { useState, useMemo } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Calculator, TrendingDown, Zap } from 'lucide-react';

export default function ROICalculator() {
    const { ref, isVisible } = useScrollReveal();
    const [hours, setHours] = useState(20);
    const [teamSize, setTeamSize] = useState(5);
    const [rate, setRate] = useState(50);

    const stats = useMemo(() => {
        const weeklyWastedHours = hours * teamSize;
        const monthlyWastedHours = weeklyWastedHours * 4.33;
        const annualWastedPotential = weeklyWastedHours * 52 * rate;
        const recapturedValue = annualWastedPotential * 0.7; // Assuming 70% efficiency gain

        return {
            monthlyHours: Math.round(monthlyWastedHours),
            annualWaste: annualWastedPotential.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }),
            recaptured: recapturedValue.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }),
        };
    }, [hours, teamSize, rate]);

    return (
        <section id="roi-calculator" className="relative py-28 sm:py-40 bg-charcoal-900">
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div ref={ref} className="max-w-content mx-auto px-6 sm:px-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <div className="inline-block px-3 py-1 rounded-full border border-accent/20 bg-accent/5 mb-6">
                            <span className="text-xs font-mono font-medium text-accent tracking-[0.2em] uppercase">
                                ROI Analysis // Potential
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-[40px] font-bold text-white mb-6 leading-tight">
                            Quantify the Friction in Your <span className="text-accent">Operations</span>
                        </h2>
                        <p className="text-muted text-lg mb-10 leading-relaxed">
                            Manual tasks don't just cost time—they create a "friction tax" that slows down your entire organization. Use our calculator to see the potential value waiting to be recaptured.
                        </p>

                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <label className="text-sm font-medium text-white/80">Manual Hours / Week (Per Person)</label>
                                    <span className="text-accent font-mono font-bold">{hours}h</span>
                                </div>
                                <input
                                    type="range" min="5" max="40" step="1" value={hours}
                                    onChange={(e) => setHours(parseInt(e.target.value))}
                                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent"
                                />
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <label className="text-sm font-medium text-white/80">Team Size Affected</label>
                                    <span className="text-accent font-mono font-bold">{teamSize}</span>
                                </div>
                                <input
                                    type="range" min="1" max="50" step="1" value={teamSize}
                                    onChange={(e) => setTeamSize(parseInt(e.target.value))}
                                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent"
                                />
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <label className="text-sm font-medium text-white/80">Blended Hourly Rate</label>
                                    <span className="text-accent font-mono font-bold">${rate}/hr</span>
                                </div>
                                <input
                                    type="range" min="30" max="250" step="5" value={rate}
                                    onChange={(e) => setRate(parseInt(e.target.value))}
                                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent"
                                />
                            </div>
                        </div>
                    </div>

                    <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <div className="glass relative rounded-[32px] p-8 sm:p-12 overflow-hidden border border-white/10">
                            <div className="absolute top-0 right-0 p-8">
                                <Calculator className="w-8 h-8 text-accent/20" />
                            </div>

                            <div className="space-y-12 relative z-10">
                                <div>
                                    <div className="flex items-center gap-3 text-red-500/60 mb-2">
                                        <TrendingDown className="w-4 h-4" />
                                        <span className="text-xs font-mono uppercase tracking-widest">Estimated Waste</span>
                                    </div>
                                    <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                                        {stats.annualWaste}
                                        <span className="text-lg text-white/20 font-light ml-2">/ year</span>
                                    </div>
                                    <p className="text-sm text-muted">Capital lost to manual, repetitive workflows.</p>
                                </div>

                                <div className="h-px bg-white/5" />

                                <div>
                                    <div className="flex items-center gap-3 text-accent mb-2">
                                        <Zap className="w-4 h-4" />
                                        <span className="text-xs font-mono uppercase tracking-widest">Recaptured Value</span>
                                    </div>
                                    <div className="text-4xl sm:text-5xl font-bold text-accent mb-2 drop-shadow-[0_0_15px_rgba(74,158,255,0.4)]">
                                        {stats.recaptured}
                                        <span className="text-lg text-accent/40 font-light ml-2">Potential</span>
                                    </div>
                                    <p className="text-sm text-muted">Estimated value recovered through process automation.</p>
                                </div>

                                <div className="grid grid-cols-2 gap-6 pt-4">
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                        <div className="text-xs text-white/40 uppercase mb-1 font-mono">Monthly Hours</div>
                                        <div className="text-xl font-bold text-white">{stats.monthlyHours}h</div>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                        <div className="text-xs text-white/40 uppercase mb-1 font-mono">ROI Multiplier</div>
                                        <div className="text-xl font-bold text-white">4.2x</div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Glow */}
                            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
