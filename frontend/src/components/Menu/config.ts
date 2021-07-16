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
        href: 'https://dappradar.com/binance-smart-chain/defi/deedee-s-room-dxl-finance',
      },
      {
        label: 'vfat.tools (In Progress)',
        href: '/',
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
    label: 'Audit by Techrate (In Progress)',
    icon: 'AuditIcon',
    href: '/',
  },
  {
    label: 'Review by Rugdoc',
    icon: 'AuditIcon',
    href: 'https://rugdoc.io/project/dexterlab-deedee-edition/',
  },
]

export default config
