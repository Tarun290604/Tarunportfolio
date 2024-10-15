import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs, FaPython, FaAws, FaGitAlt } from "react-icons/fa";
import { SiDotnet, SiMongodb, SiJavascript, SiTableau, SiPowerbi,SiCplusplus } from "react-icons/si";

import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    intial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:1.5}}
            className="my-20 text-center text-4xl">Technologies</motion.h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="intial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(1)}
                    initial="intial"
                    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-7xl text-green-500" />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="intial"
                    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPython className="text-7xl text-blue-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(8)}
                    initial="intial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiJavascript className="text-7xl text-yellow-400" />
                </motion.div>

                <motion.div
                    variants={iconVariants(1)}
                    initial="intial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiDotnet className="text-7xl text-purple-700" />
                </motion.div>

                <motion.div
                    variants={iconVariants(5)}
                    initial="intial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiCplusplus className="text-7xl text-green-600" />
                </motion.div>

                <motion.div
                    variants={iconVariants(4.5)}
                    initial="intial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-700" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.6)}
                    initial="intial"
                    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaAws className="text-7xl text-orange-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3.2)}
                    initial="intial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaGitAlt className="text-7xl text-red-500" />
                </motion.div>
                <motion.div
                    variants={iconVariants(4.5)}
                    initial="intial"
                    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTableau className="text-7xl text-blue-600" />
                </motion.div>
                <motion.div
                    variants={iconVariants(5.5)}
                    initial="intial"
                    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPowerbi className="text-7xl text-yellow-500" />
                </motion.div>
            </div>
        </div>
    );
};

export default Technologies;
