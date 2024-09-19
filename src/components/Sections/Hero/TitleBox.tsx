import { Box, BoxProps, Group, Image, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { MotionProps, motion } from 'framer-motion'
import { forwardRef } from 'react'

import { HERO_TITLE_TRANSITION_DELAY, fadeMotionVariants } from '@/framer-motion'

type TitleBoxProps = BoxProps & MotionProps & {
  withExtras?: boolean
}


const TitleBox = forwardRef<HTMLDivElement, TitleBoxProps>(
  function TitleBox({
    withExtras = false,
    ...props
  }, ref) {
    const isSm = useMediaQuery('(max-width: 465px)')
    const isXs = useMediaQuery('(max-width: 410px)')

    return (
      <Box
        component={motion.div}
        ref={ref}
        w='26rem'
        {...props}
      >
        <Group
          gap='md'
          wrap='nowrap'
          style={{
            transform: 'translateX(calc(-50px - var(--mantine-spacing-md)))',
          }}
        >
          <motion.div
            variants={fadeMotionVariants}
            initial='visible'
            animate={withExtras ? 'visible' : 'hidden'}
            transition={{
              delay: HERO_TITLE_TRANSITION_DELAY,
              duration: 0.3,
            }}
          >
            <Image
              src='/avatar.jpg'
              radius='xl'
              w={50}
            />
          </motion.div>
          <Text
            component='a'
            href='#'
            td='none'
            ff='Montserrat'
            fz={isXs ? '2.75rem' : isSm ? '3.25rem' : '3.75rem'}
            fw={900}
            c='var(--mantine-primary-color-0)'
            lh={isXs ? '2.25rem' : isSm ? '3rem' : '3.5rem'}
            style={{
              textShadow: '0 0 0.8rem rgba(255, 255, 255, 0.3)',
            }}
          >
            Noam Levi
          </Text>
        </Group>
        <Text
          pt='0.4rem'
          ff='Montserrat'
          fz='1.4rem'
          fw={700}
        >
          Fullstack Engineer
        </Text>
      </Box>
    )
  }
)

export default TitleBox
