import axios from 'axios'

export const apiInstanceSchedule = axios.create({
    baseURL: "https://api.sportsdata.io/v3/mlb/scores/json"
})

export const apiKey = process.env.NEXT_PUBLIC_MLB_API_KEY;