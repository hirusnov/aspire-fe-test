import type { FC } from 'react'

type TransactionCardProps = {
  name?: string
  date?: string
  amount?: string
  refundLabel?: string
}

const TransactionCard: FC<TransactionCardProps> = () => {
  return <div>ok</div>
}

export default TransactionCard
