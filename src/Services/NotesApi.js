import axios from 'axios'

const API_URL = "https://qnsamwatrvogfyvjohzx.supabase.co/rest/v1/Notes"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuc2Ftd2F0cnZvZ2Z5dmpvaHp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2MzY0NDYsImV4cCI6MjA5NzIxMjQ0Nn0.GauK5krmh554kgK1wEiXZd7VffdFzlZXArRIZcFNoiQ"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },
    async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    }
}
