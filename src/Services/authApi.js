import axios from "axios";

// URL Project Supabase milikmu
const SUPABASE_URL = "https://qnsamwatrvogfyvjohzx.supabase.co";

// API Key/Anon Key proyekmu yang valid
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuc2Ftd2F0cnZvZ2Z5vmpvaHp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2MzY0NDYsImV4cCI6MjA5NzIxMjQ0Nn0.GauK5krmh554kgK1wEiXZd7VffdFzlZXArRIZcFNoiQ";

export const authAPI = {
  login: async (email, password) => {
    const response = await axios.post(
      `${SUPABASE_URL}/auth/v1/token?grant_type=password`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
          "apikey": API_KEY,
        },
      }
    );
    // Mengembalikan data token (access_token, user, dll)
    return response.data;
  },
};