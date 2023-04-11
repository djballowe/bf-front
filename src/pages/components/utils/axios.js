import axios from "axios";

export const apiInstanceSchedule = axios.create({
  baseURL: "https://api.sportsdata.io/v3/mlb/scores/json",
});

export const apiKey = process.env.NEXT_PUBLIC_MLB_API_KEY;

export const s3BaseUrl =
  "https://ballpark-factor.s3.us-west-1.amazonaws.com/bp";
