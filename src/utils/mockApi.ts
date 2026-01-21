// Mock API to simulate 3rd party API due to network downtime
export interface Lead {
  id: string
  title: string
  description: string
  location: string
  urgency: 'low' | 'medium' | 'high'
  estimatedRevenue: string
  distance: string
  createdAt: Date
}

export interface ApiResponse<T> {
  data: T
  status: number
  message: string
}

const mockLeads: Lead[] = [
  {
    id: '1',
    title: 'Emergency Burst Pipe',
    description: 'Urgent repair needed for burst pipe in kitchen',
    location: 'Bondi, NSW',
    urgency: 'high',
    estimatedRevenue: '$450 - $600',
    distance: '2km',
    createdAt: new Date()
  },
  {
    id: '2',
    title: 'Hot Water System Install',
    description: 'New hot water system installation required',
    location: 'Surry Hills, NSW',
    urgency: 'medium',
    estimatedRevenue: '$2,200+',
    distance: '5km',
    createdAt: new Date()
  },
  {
    id: '3',
    title: 'Bathroom Renovation Quote',
    description: 'Full bathroom renovation plumbing quote needed',
    location: 'Paddington, NSW',
    urgency: 'low',
    estimatedRevenue: '$15k - $25k',
    distance: '12km',
    createdAt: new Date()
  }
]

export const mockApi = {
  async getLeads(): Promise<ApiResponse<Lead[]>> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800))
    
    return {
      data: mockLeads,
      status: 200,
      message: 'Success'
    }
  },

  async getLead(id: string): Promise<ApiResponse<Lead | null>> {
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const lead = mockLeads.find(l => l.id === id)
    
    return {
      data: lead || null,
      status: lead ? 200 : 404,
      message: lead ? 'Success' : 'Lead not found'
    }
  },

  async submitQuote(leadId: string, quote: any): Promise<ApiResponse<any>> {
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    return {
      data: { leadId, quote, submittedAt: new Date() },
      status: 201,
      message: 'Quote submitted successfully'
    }
  }
}