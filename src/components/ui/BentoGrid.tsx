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
    onClick,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    onClick?: () => void;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={cn(
                "row-span-1 rounded-xl group group/bento relative overflow-hidden transition-all duration-300",
                "bg-white border border-outline-variant/30",
                "shadow-elevation-1 hover:shadow-elevation-2 hover:-translate-y-1",
                "flex flex-col space-y-4 p-4",
                className
            )}
            onClick={onClick}
        >
            <StateLayer />
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200 relative z-10 flex-grow">
                {icon}
                <div className="font-sans font-bold text-black mb-2 mt-2 text-title-md line-clamp-2">
                    {title}
                </div>
                <div className="font-sans font-normal text-neutral-600 text-body-sm line-clamp-3">
                    {description}
                </div>
            </div>
        </motion.div>
    );
};
