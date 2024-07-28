'use client'
import { SignUp } from '@clerk/nextjs'
import React from 'react'

export default function signUp() {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <SignUp />
        </div>
    )
}
