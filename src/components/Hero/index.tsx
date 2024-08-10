import { ActionIcon, Group, Stack, Text, Title } from '@mantine/core'
import { IconBrandGithub, IconBrandLinkedin, IconBrandSpotify, IconMail } from '@tabler/icons-react'

import { type ActiveSectionTypedef } from '@/hooks'
import SectionLink from './SectionLink'

function Hero() {
  return (
    <Stack>
      <Stack>
        <Title order={1} m={0}>
          Noam Levi
        </Title>
        <Title order={3} m={0}>
          Fullstack Engineer
        </Title>
        <Text>
          Passionate software engineer, tinkerer, gamer, and a self proclaimed accomplished geek
        </Text>
      </Stack>

      <Stack>
        {
          ['About', 'Experience', 'Projects']
            .map((section, index) => (
              <SectionLink key={index} section={section as ActiveSectionTypedef} />
            ))
        }
      </Stack>

      <Group mt='lg'>
        <ActionIcon
          title='LinkedIn'
          variant='transparent'
          color='white'
          component='a'
          target='_blank'
          href='https://linkedin.com/in/loolzzz'
        >
          <IconBrandLinkedin />
        </ActionIcon>
        <ActionIcon
          title='GitHub'
          variant='transparent'
          color='white'
          component='a'
          target='_blank'
          href='https://github.com/loolzzz'
        >
          <IconBrandGithub />
        </ActionIcon>
        <ActionIcon
          title='Spotify'
          variant='transparent'
          color='white'
          component='a'
          target='_blank'
          href='https://open.spotify.com/user/12148066263'
        >
          <IconBrandSpotify />
        </ActionIcon>
        <ActionIcon
          title='Email'
          variant='transparent'
          color='white'
          component='a'
          target='_blank'
          href='mailto:noaml12@gmail.com'
        >
          <IconMail />
        </ActionIcon>
      </Group>
    </Stack>
  )
}

export default Hero
