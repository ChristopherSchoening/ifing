import React from 'react'
import { Card } from '@/components'
import { prismaClient } from '@/utils'

const getFasts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return prismaClient.fast.findMany()
}

type AppProps = unknown

const App: React.FC<AppProps> = async () => {
  const fasts = await getFasts()

  return <Card>{JSON.stringify(fasts)}</Card>
}

export default App
