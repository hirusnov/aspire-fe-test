import { Flex, type CollapseProps } from 'antd'
import CollapseCustom from '../CollapseCustom'
import TransactionsIcon from '../../assets/svg/transactions.svg?react'
import TransactionCard from './Transaction'

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: (
      <Flex gap={12} align="center">
        <TransactionsIcon />
        <p className="text-background text-sm">Transactions</p>
      </Flex>
    ),
    children: <TransactionCard />,
  },
]

const CardTransactions = () => {
  return (
    <div className="mt-6 relative">
      <CollapseCustom items={items} />
      <div className="absolute bg-[#EDFFF5] text-primary text-[13px] font-semibold w-full pb-4 pt-5 -bottom-[40px] text-center rounded-b-lg">
        View all card transactions
      </div>
    </div>
  )
}

export default CardTransactions
