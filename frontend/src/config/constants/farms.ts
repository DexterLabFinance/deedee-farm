import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'DEEDEE-BNB LP',
    lpAddresses: {
      97: '0xEA6fD6fB7CBE33B820D131c3c3AF7140d3a1d47b',
      56: '',
    },
    tokenSymbol: 'DEEDEE',
    tokenAddresses: {
      97: '0x6a2d5841Af581BB302082DE2Aa0117051e75F4ca',
      56: '',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'DEEDEE-BUSD LP',
    lpAddresses: {
      97: '0xEBdAd3500A332Fff8e3834b96ed9EEdEf86448eb',
      56: '',
    },
    tokenSymbol: 'DEEDEE',
    tokenAddresses: {
      97: '0x6a2d5841Af581BB302082DE2Aa0117051e75F4ca',
      56: '',
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
      97: '0xEBdAd3500A332Fff8e3834b96ed9EEdEf86448eb',
      56: '', // DEEDEE-BUSD LP
    },
    tokenSymbol: 'DEEDEE',
    tokenAddresses: {
      97: '0x6a2d5841Af581BB302082DE2Aa0117051e75F4ca',
      56: '',
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
