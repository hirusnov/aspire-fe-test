import type { FC, SVGProps } from 'react'

import FreezeIcon from '../../assets/svg/Freeze.svg?react'
import SpendLimitIcon from '../../assets/svg/SpendLimit.svg?react'
import GPayIcon from '../../assets/svg/GPay.svg?react'
import ReplaceIcon from '../../assets/svg/Replace.svg?react'
import DeactivateIcon from '../../assets/svg/Deactivate.svg?react'

type CardFunctionProps = {
  className?: string
}

const functions: {
  icon: FC<SVGProps<SVGSVGElement>>
  label: string
}[] = [
  { icon: FreezeIcon, label: 'Freeze Card' },
  { icon: SpendLimitIcon, label: 'Set spend limit' },
  { icon: GPayIcon, label: 'Add to GPay' },
  { icon: ReplaceIcon, label: 'Replace card' },
  { icon: DeactivateIcon, label: 'Cancel card' },
]

const CardFunction: FC<CardFunctionProps> = ({ className }) => {
  return (
    <div
      className={`grid grid-cols-5 gap-[10px] bg-light-blue rounded-2xl px-[27px] py-[20px] w-screen md:w-[414px] mt-8 ${className}`}
    >
      {functions.map(({ icon: Icon, label }) => (
        <div key={label} className="flex flex-col items-center gap-[7px] text-center">
          <Icon />
          <p className="text-[13px] text-background">{label}</p>
        </div>
      ))}
    </div>
  )
}

export default CardFunction
