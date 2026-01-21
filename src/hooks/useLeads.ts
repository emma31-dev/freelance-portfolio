import { useState, useEffect } from 'react'
import { mockApi, Lead } from '../utils/mockApi'

export const useLeads = () => {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchLeads = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await mockApi.getLeads()
      setLeads(response.data)
    } catch (err) {
      setError('Failed to fetch leads')
      console.error('Error fetching leads:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLeads()
  }, [])

  return {
    leads,
    loading,
    error,
    refetch: fetchLeads
  }
}