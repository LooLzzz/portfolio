import { ActionIcon, Box, Group, Space, Stack, Text, Title, Tooltip, rem } from '@mantine/core'
import { IconBrandGithub, IconBrandLinkedin, IconBrandSpotify, IconMail } from '@tabler/icons-react'

import { type ActiveSectionTypedef } from '@/hooks'

import SectionLink from './SectionLink'

const Hero = () => {
  return (
    <Stack h='100%'>
      <Stack>
        <Box>
          <Text
            component='a'
            href='#'
            td='none'
            ff='Montserrat'
            fz='3.75rem'
            fw={900}
            c='var(--mantine-primary-color-0)'
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
            mt='-1rem'
          >
            Fullstack Engineer
          </Text>
        </Box>
        <Text>
          Passionate software engineer, tinkerer, gamer, and an all around accomplished geek 😎
        </Text>
      </Stack>

      <Stack mt='xl'>
        {
          (['About', 'Experience', 'Projects'] as ActiveSectionTypedef[])
            .map((section) => (
              <Box key={section}>
                <SectionLink section={section} />
              </Box>
            ))
        }
      </Stack>

      <Space flex={1} />

      <Group mb={65}>
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
