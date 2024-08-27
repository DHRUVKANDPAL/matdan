import Signin from '@/components/Signin'
import Signup from '@/components/Signup'
import Tabswitcher from '@/components/TabSwitcher'
import React from 'react'

const VoterAuth = () => {
  return (
   <div className="min-h-[500px] w-full max-w-screen-2xl flex justify-center py-10 mx-auto">
   <Tabswitcher
     signUpTab={<Signup></Signup>}
     signinTab={<Signin></Signin>}
   ></Tabswitcher>
 </div>
  )
}

export default VoterAuth