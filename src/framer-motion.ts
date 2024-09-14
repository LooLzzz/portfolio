import { MotionProps, Transition, Variants } from 'framer-motion'


export const HERO_TITLE_TRANSITION_DELAY = 0.6

export const heroTitleTransition: Transition = {
  type: 'spring',
  delay: HERO_TITLE_TRANSITION_DELAY,
  damping: 10,
  mass: 0.75,
  stiffness: 100,
}

export const popMotionVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
}

export const fadeMotionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const popMotionProps: MotionProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true },
  transition: { duration: 0.3 },
  variants: popMotionVariants,
}

export const fadeMotionProps: MotionProps = {
  initial: 'hidden',
  animate: 'visible',
  transition: {
    duration: 0.5,
  },
  variants: fadeMotionVariants,
}
