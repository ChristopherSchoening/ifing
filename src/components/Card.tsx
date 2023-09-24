import React, { useState } from 'react'

type CardProps = {
  children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ children }) => {
  const [val] = useState(0)
  return (
    <>
      iamCard-{val}
      {children}
    </>
  )
}

export { Card }
