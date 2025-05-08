import { Carousel, Grid } from 'antd'
import AspireLogo from '../../assets/svg/aspire.svg?react'

const cardData = [
  {
    name: 'Mark Henry',
    expiry: '12 / 20',
    cvv: '***',
    number: '1234 5678 0000 2020',
    bgColor: 'bg-primary',
  },
  {
    name: 'Sarah Lee',
    expiry: '09 / 23',
    cvv: '***',
    number: '•••• •••• •••• 2020',
    bgColor: 'bg-blue-500',
  },
  {
    name: 'John Doe',
    expiry: '04 / 25',
    cvv: '***',
    number: '•••• •••• •••• 9876',
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
  return (
    <Carousel
      dots
      dotPosition="bottom"
      centerMode={isMobile}
      draggable
      infinite={false}
      className="absolute w-[474px] md:relative md:w-[414px]"
    >
      {cardData.map((card, index) => (
        <div key={index}>
          <div
            className={`${card.bgColor} text-white rounded-xl p-6 md:p-[27px] select-none w-[358px] md:w-[414px]`}
          >
            <div className="flex justify-end">
              <AspireLogo className="text-white w-[74px] h-[21px] md:w-[84px] md:h-6" />
            </div>
            <p className="text-2xl font-bold mt-6 md:mt-[27px]">{card.name}</p>
            <div className="text-sm flex gap-6 md:gap-[27px] mt-6 md:mt-[27px] items-center">
              <Ellipses />
              <Ellipses />
              <Ellipses />
              <span>2020</span>
            </div>
            <div className="flex text-[13px] mt-3.5 md:mt-[17px] gap-[40px] md:gap-[44px] font-bold">
              <div>
                <span>Thru: </span>
                <span>{card.expiry}</span>
              </div>
              <div>
                <span>CVV: </span>
                <span>{card.cvv}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  )
}

export default CardCarousel
