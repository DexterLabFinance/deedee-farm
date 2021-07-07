import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'DEEDEE-BNB LP',
    lpAddresses: {
      97: '0x5efD84dc95C0192De06b38B133c935a809baE6AA',
      56: '0x8D49bC7DFcBB7287d3eE8AF97f76453586BceaE3',
    },
    tokenSymbol: 'DEEDEE',
    tokenAddresses: {
      97: '0xDF5AabC5f4969f2544DFf89974D3D88b3e35FF09',
      56: '0x8F16A16EaCAA15D2e17Fd97657cbfAa8066626aE',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'DEEDEE-BUSD LP',
    lpAddresses: {
      97: '0x501d55D52EC02AfFFBE0b5056137D826Ec8B8F31',
      56: '0xCad824718eD4D711ad18c01b98E63267Fac4E3f5',
    },
    tokenSymbol: 'DEEDEE',
    tokenAddresses: {
      97: '0xDF5AabC5f4969f2544DFf89974D3D88b3e35FF09',
      56: '0x8F16A16EaCAA15D2e17Fd97657cbfAa8066626aE',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'DEEDEE',
    lpAddresses: {
      97: '0x501d55D52EC02AfFFBE0b5056137D826Ec8B8F31',
      56: '0xCad824718eD4D711ad18c01b98E63267Fac4E3f5', // DEEDEE-BUSD LP
    },
    tokenSymbol: 'DEEDEE',
    tokenAddresses: {
      97: '0xDF5AabC5f4969f2544DFf89974D3D88b3e35FF09',
      56: '0x8F16A16EaCAA15D2e17Fd97657cbfAa8066626aE',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '0xe0e92035077c39594793e61802a350347c320cf2',
      56: '0x58f876857a02d6762e0101bb5c46a8c1ed44dc16',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }
]

export default farms
