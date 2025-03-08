import { createClient } from "@supabase/supabase-js"

// Initialize Supabase client with better error handling
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

// Create a mock client when credentials are missing
const createMockClient = () => {
  return {
    from: () => ({
      insert: async () => ({ error: null, data: null, count: 1, status: 201 }),
    }),
    // Add other methods as needed
  }
}

// Only create the real client if we have the required credentials
export const supabase =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : (createMockClient() as any)

export interface LeadData {
  name: string
  email: string
  phone: string
  zipCode: string
  insuranceType: string
  timestamp: string
}

export async function submitLeadToSupabase(leadData: LeadData) {
  try {
    // If Supabase is not configured, simulate a successful submission
    if (!supabaseUrl || !supabaseAnonKey) {
      console.log("Supabase not configured, simulating submission:", leadData)
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000))
      return { success: true }
    }

    const { error } = await supabase.from("leads").insert([leadData])

    if (error) throw error

    return { success: true }
  } catch (error) {
    console.error("Error submitting lead to Supabase:", error)
    throw error
  }
}

