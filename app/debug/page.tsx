'use client'

import { useState, useEffect } from 'react'

export default function DebugPage() {
  const [envVars, setEnvVars] = useState<any>({})
  const [testResult, setTestResult] = useState<string>('Testing...')

  useEffect(() => {
    checkEnvironmentVariables()
  }, [])

  const checkEnvironmentVariables = () => {
    // Check if environment variables are available
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    setEnvVars({
      supabaseUrl: supabaseUrl || 'NOT SET',
      supabaseKey: supabaseKey ? `${supabaseKey.substring(0, 20)}...` : 'NOT SET',
      nextPublicKeys: Object.keys(process.env).filter(key => key.startsWith('NEXT_PUBLIC_'))
    })

    if (!supabaseUrl || !supabaseKey) {
      setTestResult('❌ Environment variables not set in Vercel')
    } else {
      setTestResult('✅ Environment variables found')
    }
  }

  const testSupabaseConnection = async () => {
    setTestResult('🔍 Testing Supabase connection...')

    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

      if (!supabaseUrl || !supabaseKey) {
        setTestResult('❌ Environment variables missing')
        return
      }

      // Test connection using fetch API
      const response = await fetch(`${supabaseUrl}/rest/v1/photos?select=*&order=created_at.desc`, {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        setTestResult(`❌ HTTP Error: ${response.status} ${response.statusText}`)
        return
      }

      const data = await response.json()
      setTestResult(`✅ Success! Found ${data.length} photos in database`)

      // Log the actual data for debugging
      console.log('📸 Photos data:', data)

    } catch (error: any) {
      setTestResult(`❌ Connection Error: ${error.message}`)
      console.error('Error details:', error)
    }
  }

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-red-600">🔧 Debug Page</h1>

        {/* Environment Variables Check */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Environment Variables:</h2>
          <div className="space-y-2">
            <p><strong>Supabase URL:</strong> {envVars.supabaseUrl}</p>
            <p><strong>Supabase Key:</strong> {envVars.supabaseKey}</p>
            <p><strong>Public Keys Found:</strong> {envVars.nextPublicKeys?.join(', ') || 'None'}</p>
          </div>
        </div>

        {/* Connection Test */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Supabase Connection Test:</h2>
          <p className="text-lg mb-4">{testResult}</p>
          <button
            onClick={testSupabaseConnection}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 mr-4"
          >
            Test Connection
          </button>
          <button
            onClick={() => window.location.href = '/photos'}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Go to Photos Page
          </button>
        </div>

        {/* Instructions */}
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
          <h3 className="text-lg font-semibold mb-2">🔧 If connection fails:</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li>Check Vercel environment variables are set correctly</li>
            <li>Verify Supabase URL and key match your project</li>
            <li>Check browser console for detailed errors</li>
            <li>Try redeploying on Vercel</li>
          </ol>
        </div>

        {/* Browser Console Test */}
        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h3 className="text-lg font-semibold mb-2">🖥️ Alternative: Browser Console Test</h3>
          <p className="mb-2">Open browser console (F12) and paste:</p>
          <code className="bg-gray-100 p-2 rounded text-sm block">
            {`fetch('https://mzchfqekwljzcsdtdefh.supabase.co/rest/v1/photos?select=*', {
  headers: {'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'}
}).then(r => r.json()).then(d => console.log('Photos:', d))`}
          </code>
        </div>
      </div>
    </div>
  )
}