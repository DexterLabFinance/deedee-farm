import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'DEEDEE-BNB LP',
    lpAddresses: {
      97: '0xEA6fD6fB7CBE33B820D131c3c3AF7140d3a1d47b',
      56: '0x42F04f0365F9a0e96bad824dFB25C9d8fA7C3247',
    },
    tokenSymbol: 'DEEDEE',
    tokenAddresses: {
      97: '0x6a2d5841Af581BB302082DE2Aa0117051e75F4ca',
      56: '0x71eee06829cf9B168ca2E4a5294f49Ecc949f16C',
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
      56: '0x97157107ce821c6eFC8f352456ADa659eCE4C47F',
    },
    tokenSymbol: 'DEEDEE',
    tokenAddresses: {
      97: '0x6a2d5841Af581BB302082DE2Aa0117051e75F4ca',
      56: '0x71eee06829cf9B168ca2E4a5294f49Ecc949f16C',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 12,
    risk: 5,
    lpSymbol: 'DEEDEE-DXL LP',
    lpAddresses: {
      97: '',
      56: '0x135CE8D4253C07c407b4c7bD951d81f1d64d0f43',
    },
    tokenSymbol: 'DEEDEE',
    tokenAddresses: {
      97: '',
      56: '0x71eee06829cf9B168ca2E4a5294f49Ecc949f16C',
    },
    quoteTokenSymbol: QuoteToken.DXL,
    quoteTokenAdresses: contracts.dxl,
  },
  {
    pid: 2,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'DEEDEE',
    lpAddresses: {
      97: '0xEBdAd3500A332Fff8e3834b96ed9EEdEf86448eb',
      56: '0x97157107ce821c6eFC8f352456ADa659eCE4C47F', // DEEDEE-BUSD LP
    },
    tokenSymbol: 'DEEDEE',
    tokenAddresses: {
      97: '0x6a2d5841Af581BB302082DE2Aa0117051e75F4ca',
      56: '0x71eee06829cf9B168ca2E4a5294f49Ecc949f16C',
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
  },
  {
    pid: 4,
    risk: 2,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x61eb789d75a95caa3ff50ed7e47b96c132fec082',
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 5,
    risk: 1,
    lpSymbol: 'DAI-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x66fdb2eccfb58cf098eaa419e5efde841368e489',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '',
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 6,
    risk: 4,
    lpSymbol: 'CAKE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x804678fa97d91B974ec2af3c843270886528a9E6',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 7,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'DXL',
    lpAddresses: {
      97: '0x4D4080CB5ff3F8D2c5bE84B4E2aE3ebD41b557A7',
      56: '0xCad824718eD4D711ad18c01b98E63267Fac4E3f5', // DXL-BUSD LP
    },
    tokenSymbol: 'DXL',
    tokenAddresses: {
      97: '0x63eF638Be1009c78B36582AacBB2b13d0E362B94',
      56: '0x8F16A16EaCAA15D2e17Fd97657cbfAa8066626aE',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 8,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'GOD',
    lpAddresses: {
      97: '',
      56: '0xa4dDd01b9682689E4D17642eD3D3e2dec68D036d', // GOD-BUSD LP
    },
    tokenSymbol: 'GOD',
    tokenAddresses: {
      97: '',
      56: '0x95a30f66c6585d8fc75a5645dbc9ef0b47257c84',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 9,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0xCad824718eD4D711ad18c01b98E63267Fac4E3f5', // DXL-BUSD LP
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 10,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD LP
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 11,
    risk: 4,
    isTokenOnly: true,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '',
      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458', // CAKE-BUSD LP
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }
]

export default farms
