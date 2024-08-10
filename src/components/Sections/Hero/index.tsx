import { ActionIcon, Box, Group, Space, Stack, Text, Title, Tooltip } from '@mantine/core'
import { IconBrandGithub, IconBrandLinkedin, IconBrandSpotify, IconMail } from '@tabler/icons-react'

import { type ActiveSectionTypedef } from '@/hooks'
import SectionLink from './SectionLink'

const Hero = () => {
  return (
    <Stack h='100%'>
      <Stack>
        <Title lts='-0.025em' order={1} fz={50} fw={800}>
          Noam Levi
        </Title>
        <Title lts='-0.025em' order={3} fw={700}>
          Fullstack Engineer
        </Title>
        <Text>
          Passionate software engineer, tinkerer, gamer, and an all around accomplished geek.
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
