import { configureStore } from '@reduxjs/toolkit'
import score from "./score.ts";
import loading from "./loading.ts";
import user from "./user.ts";

export const store = configureStore({
    reducer: {
        score: score,
        loading: loading,
        user: user,
    }
})