import { cn } from "@utils";
import { motion } from "framer-motion";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[28rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

import StateLayer from './StateLayer';

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
    isFlagship,
    tagline,
    pmSections,
    onClick,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode | undefined;
    isFlagship?: boolean | undefined;
    tagline?: string | undefined;
    pmSections?: {
        problem: string;
        solution: string;
        execution: string;
        measurement: string;
        impact: string;
    } | undefined;
    onClick?: (() => void) | undefined;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={cn(
                "row-span-1 rounded-xl group group/bento relative overflow-hidden transition-all duration-300",
                "bg-white border-2 border-outline-variant/30",
                isFlagship ? "border-vibrant-pink/40 shadow-elevation-2" : "border-outline-variant/30 shadow-elevation-1",
                "hover:shadow-elevation-3 hover:-translate-y-1",
                "flex flex-col space-y-4 p-4",
                className
            )}
            onClick={onClick}
        >
            <StateLayer />
            {header}
            <div className="group-hover/bento:translate-x-1 transition duration-200 relative z-10 flex flex-col h-full">
                {isFlagship && (
                    <div className="mb-2">
                        <span className="px-2 py-0.5 bg-vibrant-pink text-black text-[10px] font-black rounded-full uppercase border border-black shadow-sm">
                            Flagship Product
                        </span>
                    </div>
                )}
                {icon}
                <div className="font-sans font-bold text-black mb-1 mt-2 text-title-md">
                    {title}
                </div>
                {tagline && (
                    <div className="text-vibrant-pink font-bold text-xs mb-2 leading-tight">
                        {tagline}
                    </div>
                )}
                <div className={cn(
                    "font-sans font-normal text-neutral-600 text-body-sm mb-4",
                    isFlagship ? "" : "line-clamp-3"
                )}>
                    {description}
                </div>

                {pmSections && (
                    <div className="mt-auto space-y-3 pt-4 border-t border-dotted border-outline-variant/30">
                        <div className="grid grid-cols-[70px_1fr] gap-2 items-start">
                            <span className="text-[10px] font-black uppercase text-text-secondary">Problem</span>
                            <p className="text-xs text-text-primary font-medium">{pmSections.problem}</p>
                        </div>
                        <div className="grid grid-cols-[70px_1fr] gap-2 items-start">
                            <span className="text-[10px] font-black uppercase text-text-secondary">Solution</span>
                            <p className="text-xs text-text-primary font-medium">{pmSections.solution}</p>
                        </div>
                        <div className="grid grid-cols-[70px_1fr] gap-2 items-start">
                            <span className="text-[10px] font-black uppercase text-text-secondary">Execution</span>
                            <p className="text-xs text-text-primary font-medium">{pmSections.execution}</p>
                        </div>
                        <div className="grid grid-cols-[70px_1fr] gap-2 items-start">
                            <span className="text-[10px] font-black uppercase text-text-secondary">Measurement</span>
                            <p className="text-xs text-text-primary font-medium">{pmSections.measurement}</p>
                        </div>
                        <div className="grid grid-cols-[70px_1fr] gap-2 items-start">
                            <span className="text-[10px] font-black uppercase text-text-secondary">Impact</span>
                            <p className="text-xs text-text-primary font-medium">{pmSections.impact}</p>
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
};
