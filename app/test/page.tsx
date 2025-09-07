'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function TestPage() {
  const [testResult, setTestResult] = useState<string>('Testing...')
  const [photos, setPhotos] = useState<any[]>([])

  useEffect(() => {
    testSupabaseConnection()
  }, [])

  const testSupabaseConnection = async () => {
    try {
      // Test 1: Check if we can connect to Supabase
      const { data: connectionTest, error: connectionError } = await supabase
        .from('photos')
        .select('count', { count: 'exact', head: true })

      if (connectionError) {
        setTestResult(`❌ Connection Error: ${connectionError.message}`)
        return
      }

      // Test 2: Try to fetch actual photos
      const { data: photosData, error: photosError } = await supabase
        .from('photos')
        .select('*')
        .order('created_at', { ascending: false })

      if (photosError) {
        setTestResult(`❌ Photos Fetch Error: ${photosError.message}`)
        return
      }

      setPhotos(photosData || [])
      setTestResult(`✅ Success! Found ${photosData?.length || 0} photos in database`)

    } catch (err: any) {
      setTestResult(`❌ Unexpected Error: ${err.message}`)
    }
  }

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Supabase Connection Test</h1>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Connection Status:</h2>
          <p className="text-lg">{testResult}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Photos in Database:</h2>
          {photos.length === 0 ? (
            <p className="text-gray-500">No photos found in database</p>
          ) : (
            <div className="space-y-4">
              {photos.map((photo, index) => (
                <div key={photo.id} className="border p-4 rounded">
                  <h3 className="font-semibold">Photo {index + 1}</h3>
                  <p><strong>Title:</strong> {photo.title || 'No title'}</p>
                  <p><strong>Description:</strong> {photo.description || 'No description'}</p>
                  <p><strong>URL:</strong> {photo.image_url}</p>
                  <p><strong>Uploaded by:</strong> {photo.uploaded_by || 'Unknown'}</p>
                  <p><strong>Created:</strong> {new Date(photo.created_at).toLocaleString()}</p>
                  <img src={photo.image_url} alt={photo.title || 'Photo'} className="w-32 h-32 object-cover mt-2" />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-8">
          <button
            onClick={testSupabaseConnection}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Test Again
          </button>
        </div>
      </div>
    </div>
  )
}