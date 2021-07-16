import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Editions',
    icon: 'IfoIcon',
    items: [
      {
        label: 'Dexter',
        href: 'https://dexterlab.finance',
      },
      {
        label: 'DeeDee',
        href: 'https://deedee.dexterlab.finance',
      },
      {
        label: 'Mandark (In Progress)',
        href: '/',
      }
    ],
  },
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x71eee06829cf9b168ca2e4a5294f49ecc949f16c',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/add/BNB/0x71eee06829cf9b168ca2e4a5294f49ecc949f16c',
      },
      {
        label: 'Swap',
        href: 'https://swap.dexterlab.finance',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x71eee06829cf9b168ca2e4a5294f49ecc949f16c',
      },
      {
        label: 'DEEDEE Chart',
        href: 'https://poocoin.app/tokens/0x71eee06829cf9b168ca2e4a5294f49ecc949f16c',
      },
      {
        label: 'Dappradar',
        href: 'https://dappradar.com/binance-smart-chain/defi/DEEDEE-cartoonish-yield-farm',
      },
      {
        label: 'dapp.com',
        href: 'https://www.dapp.com/app/dexter-s-lab',
      },
      {
        label: 'vfat.tools',
        href: 'https://vfat.tools/bsc/dexterlab/',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Docs',
        href: 'https://dexterlabfinance.gitbook.io'
      }
    ],
  },
  {
    label: 'Audit by Techrate',
    icon: 'AuditIcon',
    href: 'https://github.com/TechRate/Smart-Contract-Audits/blob/main/DexterLab%20Standart%20Smart%20Contract%20Security%20Audit.pdf',
  },
  {
    label: 'Review by Rugdoc',
    icon: 'AuditIcon',
    href: 'https://rugdoc.io/project/dexterlab/',
  },
]

export default config
