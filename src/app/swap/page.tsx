"use client"

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { SwapWidget, Theme } from '@uniswap/widgets'

const mumbaiProvider = "https://rpc-mumbai.maticvigil.com"

const theme: Theme = {
  fontFamily: '"Helvetica"',
  accent: '#000000',
}

const defaultOutputTokenAddress="0x6Cca0E9b6CD4aD9607288130aE2780e74bC4c340"

const jsonRpcUrlMap = {
  80001: ['https://rpc-mumbai.matic.today'],
}

const CMC_TOKEN_LIST = [{"chainId":80001,"name":"Hilbert","address":"0x6Cca0E9b6CD4aD9607288130aE2780e74bC4c340","decimals":18,"symbol":"HILB","logoURI":"https://i.ibb.co/Mgk270K/Screen-Shot-2023-12-05-at-1-01-39-AM.png"}]
const HILB = "0x6Cca0E9b6CD4aD9607288130aE2780e74bC4c340"
const page = () => {
  return (
    <>
      <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
        <SwapWidget       
          defaultOutputTokenAddress={HILB}
          tokenList={CMC_TOKEN_LIST} 
          width="80%" 
          jsonRpcUrlMap={jsonRpcUrlMap} 
          theme={theme}/>
      </MaxWidthWrapper>
    </>
  )
}

export default page
