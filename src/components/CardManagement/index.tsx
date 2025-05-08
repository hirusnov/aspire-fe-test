import { Tabs, type TabsProps } from 'antd'
import CardCarousel from './Carousel'

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'My debit cards',
    children: null,
  },
  {
    key: '2',
    label: 'All company cards',
    children: null,
  },
]

const Cards = () => {
  return (
    <div className="mt-[34px]">
      <Tabs items={items} />
      <div className="md:rounded-lg md:p-10 md:border-1 md:border-border md:shadow-[0px_2px_12px_rgba(0,0,0,0.08)]">
        <CardCarousel />
      </div>
    </div>
  )
}

export default Cards
