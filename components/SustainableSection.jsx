import { motion } from "framer-motion";

const SustainableSection = () => (
<motion.span
  className="block text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-green-360 to-[#0e8344] drop-shadow-lg"
  animate={{ y: [0, -10, 0] }}
  transition={{ duration: 2, repeat: Infinity }}
>
  DESENVOLVIMENTO SUSTENTÁVEL
</motion.span>
);

export default SustainableSection;
