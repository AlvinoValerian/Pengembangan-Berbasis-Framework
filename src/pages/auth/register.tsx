import React from 'react'
import Link from 'next/link'
import style from './register.module.css'
import FloatingLines from '../FloatingLines/floatingLines'
import TampilanRegister from '@/views/auth/register'

const halamanRegister = () => {
  return (
    <div>
      <TampilanRegister/>
    </div>

  )
}

export default halamanRegister;