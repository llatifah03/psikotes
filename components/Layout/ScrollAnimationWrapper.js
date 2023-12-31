import { motion } from "framer-motion";

export default function ScrollAnimationWrapper({
  children,
  className,
  ...props
}) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 1 }}
      className={className}
      // style={{ marginTop: "100px" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
