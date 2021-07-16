import { useEffect, useState } from 'react'
import axios from "axios";

/*
 * Due to Cors the api was forked and a proxy was created
 * @see https://github.com/pancakeswap/gatsby-pancake-api/commit/e811b67a43ccc41edd4a0fa1ee704b2f510aa0ba
 */
export const baseUrl = 'https://api.pancakeswap.com/api/v2'

/* eslint-disable camelcase */

export interface TradePair {
  swap_pair_contract: string
  base_symbol: string
  quote_symbol: string
  last_price: number
  base_volume_24_h: number
  quote_volume_24_h: number
}

export interface ApiStatResponse {
  update_at: string
  '24h_total_volume': number
  total_value_locked: number
  total_value_locked_all: number
  trade_pairs: {
    [key: string]: TradePair
  }
}



export const dxlHeaders = {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
        }
      };

export const dxlPayload = `
     {
       ethereum(network: bsc) {
         dexTrades(
           baseCurrency: {is: "0x8f16a16eacaa15d2e17fd97657cbfaa8066626ae"}
           quoteCurrency: {is: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"}
           options: {desc: ["block.height", "transaction.index"], limit: 1}
         ) {
           block {
             height
             timestamp {
               time(format: "%Y-%m-%d %H:%M:%S")
             }
           }
           transaction {
             index
           }
           baseCurrency {
             symbol
           }
           quoteCurrency {
             symbol
           }
           quotePrice
         }
       }
     }`

export interface ApiDXLPriceResponse{
  data: {
    [key: string]: any
  }
}

export const useGetDXLPrice = () => {
  const [data, setData] = useState<ApiDXLPriceResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://graphql.bitquery.io",
          {
            query: dxlPayload
          },
          dxlHeaders
        );

        setData(response)
      } catch (error) {
        console.error('Unable to fetch data:', error)
      }
    }

    fetchData()
  }, [setData])

  return data
}

export const useGetStats = () => {
  const [data, setData] = useState<ApiStatResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseUrl}/stat`)
        const responsedata: ApiStatResponse = await response.json()

        setData(responsedata)
      } catch (error) {
        console.error('Unable to fetch data:', error)
      }
    }

    fetchData()
  }, [setData])

  return data
}
