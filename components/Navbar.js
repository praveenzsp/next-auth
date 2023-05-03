// import React from 'react'
// import {signIn,signOut,useSession} from 'next-auth/react'
// import { useRouter } from 'next/router'
// function Navbar() {
//     const {data:session, status} = useSession()
//     console.log(session,status)
//     const router=useRouter()
//   return (
//     <div className='w-full fixed bg-blue-300 h-24 flex top-0'>
//         {session?<p>User signed in</p>:<p>User is not signed in</p>}
//         <ul>
//             <button className='bg-green-500 rounded-xl p-5 mx-10'><a href='/api/auth/signin' onClick={e=>signIn('github')}>Sign in</a></button>
//         </ul>
//         <ul>
//             <button className='bg-green-500 rounded-xl p-5 mx-10'><a href='/api/auth/signout' onClick={e=>signOut('github')}>Sign out</a></button>
//         </ul>
//         <ul>
//             <button className='bg-green-500 rounded-xl p-5 mx-10'><a onClick={e=>router.push('/profile')}>Profile</a></button>
//         </ul>
//         <ul>
//             <button className='bg-green-500 rounded-xl p-5 mx-10'><a onClick={e=>router.push('/home')}>Home</a></button>
//         </ul>
//     </div>
//   )
// }

// export default Navbar

import { Navbar, Link, Text, Switch } from "@nextui-org/react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";


export default function NavbarComponent({theme, setTheme}) {
    const {session,status} =useSession()
    const router=useRouter()
    console.log(session,status)


  return (
    <>
      <Navbar className="navbar" isBordered variant='floating'>
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand>
          <h1>Next Auth</h1>
        </Navbar.Brand>

        <Navbar.Content hideIn="xs" enableCursorHighlight>
          <Navbar.Link>About</Navbar.Link>
          <Navbar.Link onClick={e=>router.push('/home')}>Home</Navbar.Link>
          <Navbar.Link onClick={e=>router.push('/profile')}>Profile</Navbar.Link>
          {status==='authenticated'?<Navbar.Link onClick={e=>signOut()}>Logout</Navbar.Link>:<Navbar.Link onClick={e=>signIn()}>Log In</Navbar.Link>}
        </Navbar.Content>

        <Navbar.Collapse>
          <Navbar.CollapseItem>About</Navbar.CollapseItem>
          <Navbar.CollapseItem>Home</Navbar.CollapseItem>
          <Navbar.CollapseItem>Profile</Navbar.CollapseItem>
          {status==='authenticated'?<Navbar.CollapseItem onClick={e=>signOut()}>Logout</Navbar.CollapseItem>:<Navbar.CollapseItem onClick={e=>signIn()}>Log In</Navbar.CollapseItem>}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
