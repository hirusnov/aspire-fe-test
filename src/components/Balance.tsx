import { Button, Flex, Grid } from 'antd'
import AspireLogo from '../assets/svg/Home.svg?react'
import AddIcon from '../assets/svg/Add.svg?react'

const { useBreakpoint } = Grid

const Balance = () => {
  const screens = useBreakpoint()
  const isMobile = !screens.md

  return (
    <div className="text-white md:text-black">
      <Flex justify="space-between" align="baseline">
        <p>Account Balance</p>
        <AspireLogo className="text-primary md:hidden w-[25px] h-[25px]" />
      </Flex>
      <Flex justify="space-between" align="center" className="mt-[18px]">
        <Flex align="center" gap={12}>
          <span className="w-10 h-[22px] mdh-6 text-[12px] md:text-[13px] bg-primary flex items-center justify-center rounded-sm">
            S$
          </span>
          <span className="text-2xl md:text-[26px] text-white md:text-black font-bold">3,000</span>
        </Flex>
        <Button
          icon={<AddIcon />}
          type={isMobile ? 'text' : 'primary'}
          className="text-[13px] font-bold p-3 text-blue md:text-white"
        >
          New Card
        </Button>
      </Flex>
    </div>
  )
}

export default Balance
