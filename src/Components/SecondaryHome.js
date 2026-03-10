import React from 'react'
import { RestHeader } from './RestHeader'
import { Outlet } from 'react-router'

export const SecondaryHome = () => {
  return (
    <>
    <RestHeader></RestHeader>
    <Outlet></Outlet>
    </>
  )
}
