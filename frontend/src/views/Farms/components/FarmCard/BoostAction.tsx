import React, { useState } from 'react'
import BigNumber from 'bignumber.js'
import { Button, Flex, Heading } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useBoost } from 'hooks/useBoost'
import { useFarmUser } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import styled from 'styled-components'

interface FarmCardActionsProps {
  earnings?: BigNumber
  pid?: number
}

const BalanceAndCompound = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`

const BoostAction: React.FC<FarmCardActionsProps> = ({ earnings, pid }) => {
  const TranslateString = useI18n()
  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useBoost(pid)

  const rawEarningsBalance = getBalanceNumber(earnings)
  const displayBalance = rawEarningsBalance.toLocaleString()
  const { harvestTax } = useFarmUser(pid)

  return (
    <Flex mb='8px' justifyContent='space-between' alignItems='center'>
      <Button
        size='md'
        marginTop='20px'
        fullWidth={1 === 1}
        disabled={rawEarningsBalance === 0 || pendingTx || harvestTax != 0}
        onClick={async () => {
          setPendingTx(true)
          await onReward()
          setPendingTx(false)
        }}
      >
        {'Boost!'}
      </Button>
    </Flex>
  )
}

export default BoostAction
