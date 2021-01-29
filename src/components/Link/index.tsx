import NextLink from 'next/link'

interface Props {
  href: string
}

const Link: React.FC<Props> = function ({ children, href, ...rest }) {
  return (
    <NextLink href={href} passHref>
      <a {...rest}>{children}</a>
    </NextLink>
  )
}

export default Link