import { Metadata } from 'next';
import React from 'react'

type Props = {}
export const metadata: Metadata = {
  title: 'Customers',
};

function Page({}: Props) {
  return (
    <p>Customers Page</p>
  )
}

export default Page