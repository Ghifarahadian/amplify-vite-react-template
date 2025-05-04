'use client'

import { Amplify } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import amplify_outputs from '../amplify_outputs.json'

Amplify.configure(amplify_outputs)

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Authenticator>
        {({ signOut, user }) => (
          <div>
            <h1>Hello {user?.username}</h1>
            <button onClick={signOut}>Sign out</button>
          </div>
        )}
      </Authenticator>
    </main>
  )
} 