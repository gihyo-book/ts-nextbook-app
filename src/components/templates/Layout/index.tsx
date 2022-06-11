import Separator from 'components/atoms/Separator'
import Box from 'components/layout/Box'
import Footer from 'components/organisms/Footer'
import Header from 'components/organisms/Header'

const Layout: React.FC = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Separator />
      <Box padding={3}>
        <Footer />
      </Box>
    </>
  )
}

export default Layout
