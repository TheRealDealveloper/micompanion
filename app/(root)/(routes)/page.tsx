import { UserButton } from '@clerk/nextjs'
import React from 'react'

const RootPage = () => {
  return (
    <div>
      <UserButton afterSignOutUrl='/'></UserButton>
    </div>
  )
}

export default RootPage
