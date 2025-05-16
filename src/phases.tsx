import { CURRENT_PHASE, PHASES, cn } from "./config";
import { motion } from 'motion/react'

export const Phases = () => {

    return (
        <div className="flex flex-col items-center justify-center gap-y-8">
            {PHASES.map((phase) => (
                <>
                    <div key={phase} className={cn("flex flex-col items-center justify-center gap-y-2 w-96 text-right px-4 py-2 relative", {
                        "bg-foreground text-background": phase === CURRENT_PHASE,
                        "bg-itcPrimaryRed": phase !== CURRENT_PHASE,
                    })}>
                        {/* Ring */}
                        {phase === CURRENT_PHASE &&
                            <motion.div layout layoutId="ring" className="absolute -inset-2  outline-4 outline-red-500 outline-dashed">

                            </motion.div>}
                        {/* Phase number */}
                        <div className="text-2xl font-bold w-full text-right">
                            {phase === CURRENT_PHASE ? "YOU ARE HERE >>> " : undefined}
                            ROUND {phase}
                        </div>
                    </div>
                </>
            ))}
        </div>
    )
}