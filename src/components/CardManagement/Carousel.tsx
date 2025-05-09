import { Carousel, Grid } from 'antd'
import AspireLogo from '../../assets/svg/aspire.svg?react'
import Eye from '../../assets/svg/Eye.svg?react'
import VisaLogo from '../../assets/svg/VisaLogo.svg?react'
import { useState } from 'react'

const cardData = [
  {
    name: 'Mark Henry',
    expiry: '12 / 20',
    cvv: '222',
    number: '1234 5678 0000 2020',
    bgColor: 'bg-primary',
  },
  {
    name: 'Sarah Lee',
    expiry: '09 / 23',
    cvv: '444',
    number: '9876 5432 1234 2020',
    bgColor: 'bg-blue-500',
  },
  {
    name: 'John Doe',
    expiry: '04 / 25',
    cvv: '555',
    number: '4444 3333 2222 9876',
    bgColor: 'bg-purple-500',
  },
]

const Ellipses = () => (
  <div className="flex gap-[6px]">
    {Array(4)
      .fill(0)
      .map((_, idx) => (
        <div key={idx} className="w-[9px] h-[9px] rounded-full bg-white" />
      ))}
  </div>
)

const { useBreakpoint } = Grid

const CardCarousel = () => {
  const screen = useBreakpoint()
  const isMobile = !screen.md
  const [showCardIndex, setShowCardIndex] = useState<number | null>(null)

  return (
    <Carousel
      dots
      dotPosition="bottom"
      centerMode={isMobile}
      draggable
      infinite={false}
      className="absolute w-[474px] md:relative md:w-[414px]"
    >
      {cardData.map((card, index) => {
        const isVisible = showCardIndex === index

        return (
          <div key={index} className="relative mt-[28px] md:mt-[29px]">
            <div
              className="z-0 absolute -top-[28px] right-[16px] md:right-0 bg-white px-[10px] md:px-0 pt-[5px] pb-[18px] md:py-0 rounded-t-md flex items-center gap-2 cursor-pointer text-primary"
              onClick={() => setShowCardIndex(isVisible ? null : index)}
            >
              <Eye className="w-4 h-4" />
              <span className="text-sm font-bold">Show card number</span>
            </div>
            <div
              className={`${card.bgColor} text-white rounded-xl p-6 md:p-[27px] select-none w-[358px] md:w-[414px] relative z-10`}
            >
              <div className="flex justify-end">
                <AspireLogo className="text-white w-[74px] h-[21px] md:w-[84px] md:h-6" />
              </div>
              <p className="text-2xl font-bold mt-6 md:mt-[27px]">{card.name}</p>
              <div className="text-sm flex gap-6 md:gap-[27px] mt-6 md:mt-[27px] items-center">
                {isVisible ? (
                  <span className="tracking-wider">{card.number}</span>
                ) : (
                  <>
                    <Ellipses />
                    <Ellipses />
                    <Ellipses />
                    <span>{card.number.slice(-4)}</span>
                  </>
                )}
              </div>
              <div className="flex text-[13px] mt-3.5 md:mt-[17px] gap-[40px] md:gap-[44px] font-bold">
                <div>
                  <span>Thru: </span>
                  <span>{card.expiry}</span>
                </div>
                <div className="flex gap-1">
                  <span>CVV:</span>
                  <span className="font-bold">{isVisible ? card.cvv : '***'}</span>
                </div>
              </div>
              <div className="flex justify-end">
                <VisaLogo />
              </div>
            </div>
          </div>
        )
      })}
    </Carousel>
  )
}

export default CardCarousel
