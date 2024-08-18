import { Text } from "@mantine/core"

import classes from './index.module.scss'

const Footer = () => {
  return (
    <footer>
      <Text
        className={classes.text}
        fz='sm'
      >
        Loosely designed in <a href='https://www.figma.com/' target='_blank'>Figma</a> and coded in <a href='https://code.visualstudio.com/' target='_blank'>Visual Studio Code</a> by yours truly. Built with <a href='https://nextjs.org/' target='_blank'>Next.js</a> and <a href='https://mantine.dev/' target='_blank'>Mantine</a> using <a href='https://bun.sh/' target='_blank'>Bun</a> and <a href='https://vitejs.dev/' target='_blank'>Vite</a>, deployed with <a href='https://pages.cloudflare.com/' target='_blank'>Cloudflare Page</a>.
      </Text>
    </footer>
  )
}

export default Footer
