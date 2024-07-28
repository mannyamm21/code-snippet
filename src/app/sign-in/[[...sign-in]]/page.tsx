'use client'
import { SignIn } from '@clerk/nextjs'
import React from 'react'

export default function signIn() {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <SignIn />
        </div>
    )
}
