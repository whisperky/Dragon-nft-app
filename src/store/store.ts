import { configureStore } from '@reduxjs/toolkit'
import score from "./score.ts";

export const store = configureStore({
    reducer: {
        score: score,
    }
})