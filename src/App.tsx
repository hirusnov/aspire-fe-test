import { Card, Grid, Input, Layout } from 'antd'
import './App.css'
import '@ant-design/v5-patch-for-react-19'
import Sider from 'antd/es/layout/Sider'
import { Content, Footer } from 'antd/es/layout/layout'
import Navigation from './components/Navigation'
import AspireLogo from './assets/svg/aspire.svg?react'
import Balance from './components/Balance'
import Cards from './components/CardManagement'
import { useState } from 'react'

const { useBreakpoint } = Grid

function App() {
  const [isScrollable, setIsScrollable] = useState<boolean>(false)
  const screens = useBreakpoint()
  const isMobile = !screens.md

  return (
    <Layout className="app-layout relative">
      {!isMobile && (
        <Sider className="sider">
          <div>
            <AspireLogo className="text-primary" />
            <p className="text-md text-white opacity-30 mt-[19px]">
              Trusted way of banking for 3,000+ SMEs and startups in Singapore
            </p>
          </div>
          <Navigation
            mode="inline"
            menuClassName="bg-transparent mt-[81px]"
            itemClassName="!p-0 m-0 text-base h-[62px] focus:font-bold"
          />
        </Sider>
      )}
      <Content className="content px-6 py-8 md:p-[60px] bg-background md:bg-white">
        <Balance />
        <Cards />
      </Content>
      <div
        className={`overflow-auto w-full h-[1000px] absolute ${
          isScrollable ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <Card className="mt-[500px] pointer-events-auto">
          <div className="bg-amber-600 h-[1000px]">ok</div>
        </Card>
      </div>
      {isMobile && (
        <Footer className="p-0 shadow-[0px_-3px_6px_rgba(0,0,0,0.078)] z-[9999]">
          <Navigation
            mode="horizontal"
            menuClassName="leading-[23.2px] justify-around"
            itemClassName="text-[9px] flex flex-col items-center pt-[9px]"
          />
        </Footer>
      )}
    </Layout>
  )
}

export default App
