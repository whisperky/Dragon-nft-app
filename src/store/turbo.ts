import {createSlice} from '@reduxjs/toolkit'
import {TurboSliceType} from "../types/store.ts";
import {randomTurboLevel} from "../helpers/helper.ts";

const turboSlice = createSlice({
    name: 'turbo',
    initialState: {
        taps: 0,
        power: 'off',
        ready: false,
        turbo: null,
        style: {
            display: 'none',
        },
        availableTurbos: [],
        turboMode: false,
        mineTurbo: false,
        timeout: null,
    } as TurboSliceType,
    reducers: {
        useTurbo: (state, action) => {
            if (state.availableTurbos.length > 0 && state.ready && state.power === 'on' && !state.turboMode) {
                state.ready = false;
                state.turbo = action.payload;
                state.turboMode = true;
                state.availableTurbos = state.availableTurbos.filter((x) => x.id !== action.payload.id);
                state.style = {
                    display: 'none',
                }
            }
        },
        hideTurbo: (state) => {
            state.ready = false;
            state.style = {
                display: 'none',
            }
        },
        activateTurbo: (state) => {
            if (state.availableTurbos.length > 0 && !state.ready && state.power === 'on' && !state.turboMode) {
                const random_lvl = randomTurboLevel(state.availableTurbos.length);
                const random1 = Math.floor(Math.random() * random_lvl);
                const random2 = Math.floor(Math.random() * random_lvl);
                if (random1 == random2) {
                    const randomHoz = Math.floor(Math.random() * 17);
                    const randomVer = Math.floor(Math.random() * 30);

                    state.ready = true;
                    state.style = {
                        display: 'block',
                        bottom: `${randomVer}rem`,
                        left: `${randomHoz}rem`,
                        animation: 'head-appear 5s forwards, shake 0.5s infinite',
                    }
                }
            }
        },
        setAvailableTurbos: (state, action) => {
            state.availableTurbos = action.payload;
        },
        turnOffTurbo: (state) => {
            state.power = 'off';
        },
        turnOnTurbo: (state) => {
            state.power = 'on';
        },
        turboModeOff: (state) => {
            state.turboMode = false;
            state.turbo = null;
            state.timeout = null;
        },
        incrementTurboTaps: (state) => {
            state.taps += 1;
        },
        resetTurboTaps: (state) => {
            state.taps = 0;
        },
        activateMineTurbo: (state) => {
            state.mineTurbo = true;
        },
        deactivateMineTurbo: (state) => {
            state.mineTurbo = false;
        },
        setTurboTimeout: (state, action) => {
            state.timeout = action.payload;
        }
    }
})

export const {
    setAvailableTurbos,
    useTurbo,
    hideTurbo,
    turnOnTurbo,
    turnOffTurbo,
    activateTurbo,
    turboModeOff,
    incrementTurboTaps,
    resetTurboTaps,
    activateMineTurbo,
    deactivateMineTurbo,
    setTurboTimeout
} = turboSlice.actions
export default turboSlice.reducer;