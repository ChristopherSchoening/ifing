'use client'

import { NextUIProvider } from '@nextui-org/react'

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <NextUIProvider>{children}</NextUIProvider>
)

export default Providers
