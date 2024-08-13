import { ActionIcon, Box, Button, Center, Group, SimpleGrid, Space, Stack, Text, Tooltip } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconBrandGithub, IconBrandLinkedin, IconBrandSpotify, IconDownload, IconMail } from '@tabler/icons-react'

import { ActiveSectionTypedef } from '@/hooks'

import SectionLink from './SectionLink'

const Hero = () => {
  const isMd = useMediaQuery('(max-width: 990px)')
  const isSm = useMediaQuery('(max-width: 465px)')
  const isXs = useMediaQuery('(max-width: 425px)')
  const isXss = useMediaQuery('(max-width: 360px)')

  return (
    <Stack h='100%'>
      <Stack>
        <Box>
          <Text
            component='a'
            href='#'
            td='none'
            ff='Montserrat'
            fz={isXss ? '2.75rem' : isXs ? '3.25rem' : '3.75rem'}
            fw={900}
            c='var(--mantine-primary-color-0)'
            lh={isXss ? '2.25rem' : isXs ? '3rem' : '3.5rem'}
            style={{
              textShadow: '0 0 0.8rem rgba(255, 255, 255, 0.3)',
            }}
          >
            Noam Levi
          </Text>
          <Text
            ff='Montserrat'
            fz='1.4rem'
            fw={700}
          >
            Fullstack Engineer
          </Text>
        </Box>
        <Text>
          Passionate software engineer, tinkerer, gamer, and an all around accomplished geek 😎
        </Text>
      </Stack>

      <Box component={(isMd ? Stack : Group) as any} wrap='nowrap' pt='xl'>
        <Stack>
          {
            (['about', 'experience', 'projects'] as ActiveSectionTypedef[])
              .map((section, idx) => (
                <Box key={idx} w='10rem'>
                  <SectionLink section={section} />
                </Box>
              ))
          }
        </Stack>

        <Center flex='1' pt={isMd ? 'xl' : undefined}>
          <Button
            component='a'
            href='https://drive.google.com/file/d/1cY4iZiepFwAUlLaSyZ1vsTD_p_q0IfX0/view?usp=sharing'
            target='_blank'
            color='blue'
            variant='filled'
            size={isSm ? 'md' : 'lg'}
            p={isSm ? 'xs' : undefined}
          >
            <Group wrap='nowrap' gap={isSm ? 5 : 'xs'}>
              <IconDownload />
              Get my resume
            </Group>
          </Button>
        </Center>
      </Box>

      <Space flex={1} />

      <Group mb={isMd ? 150 : 65}>
        <Tooltip withArrow label='Check out my GitHub'>
          <ActionIcon
            size='lg'
            title='GitHub'
            variant='transparent'
            color='white'
            component='a'
            target='_blank'
            href='https://github.com/loolzzz'
          >
            <IconBrandGithub size={50} />
          </ActionIcon>
        </Tooltip>

        <Tooltip withArrow label='Follow me on LinkedIn'>
          <ActionIcon
            size='lg'
            title='LinkedIn'
            variant='transparent'
            color='white'
            component='a'
            target='_blank'
            href='https://linkedin.com/in/loolzzz'
          >
            <IconBrandLinkedin size={50} />
          </ActionIcon>
        </Tooltip>

        <Tooltip withArrow label='Join me on Spotify'>
          <ActionIcon
            size='lg'
            title='Spotify'
            variant='transparent'
            color='white'
            component='a'
            target='_blank'
            href='https://open.spotify.com/user/12148066263'
          >
            <IconBrandSpotify size={50} />
          </ActionIcon>
        </Tooltip>

        <Tooltip withArrow label='Contact me'>
          <ActionIcon
            size='lg'
            title='Email'
            variant='transparent'
            color='white'
            component='a'
            target='_blank'
            href='mailto:noaml12@gmail.com'
          >
            <IconMail size={50} />
          </ActionIcon>
        </Tooltip>
      </Group>
    </Stack>
  )
}

export default Hero
