'use client'

import Button from './Button'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LoginButton = () => {
  const { status } = useSession();
  const router = useRouter()
  
  const handleClick = () => {
    switch(status){
      case 'authenticated': 
        router.push("/dashboard")
        break
      case 'unauthenticated':
        router.push("/auth/signin")
        break
      default: break
    }
  }
  
  return (
    <Button 
      action={handleClick} 
      text={status === "loading" ? "Loading..." : (status === "authenticated" ? "Dashboard" : "Get Started")} 
    />
  )
}

export default LoginButton