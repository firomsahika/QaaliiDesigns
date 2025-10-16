import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const page = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="space-y-8 px-5 py-6 w-sm h-80 shadow-2xl flex flex-col items-center rounded-3xl ">
        <p className="font-bold text-2xl ">Login</p>
        <div className="w-xs flex flex-col space-y-3 px-6">
          <Input type='email' placeholder="email" className="bg-gray-100" />
          <Input type='password' placeholder="password" className="bg-gray-100" />
          <Button>Login</Button>
        </div>

        <div className="flex gap-x-4">
          <p>Don't have an account? </p>
          <Link href="/auth/register" className="text-blue-400 font-medium">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page
