import {createSlice} from '@reduxjs/toolkit'
import {FrenSliceType, LeagueSliceType} from "../types/store.ts";
import {leagueToNumber, numberToLeague, showToast} from "../helpers/helper.ts";

const leagueSlice = createSlice({
    name: 'league',
    initialState: {
        userLeague: {
            id: '',
            name: 'Bronze',
            score: '0',
            type: 'miner',
            description: '',
            preset: 'BRONZE_MINER',
        },
        league: 'BRONZE',
        type: 'miner',
        time: 'day',
        userTop: 0,
        no: 1,
        leagueData: {
            id: '',
            name: 'Bronze',
            score: '0',
            type: 'miner',
            description: '',
            preset: 'BRONZE_MINER',
        },
        topUsers: [],
        leagueList: [],
    } as LeagueSliceType,
    reducers: {
        setLeague: (state, action) => {
            state.league = numberToLeague(action.payload.no);
            state.type = action.payload.league.type;
            state.no = action.payload.no;
            state.leagueData = action.payload.league;
            state.topUsers = action.payload.users;
            state.userTop = 0;
        },
        setUserLeague: (state, action) => {
            state.userLeague = action.payload;
        },
        setLeagueNo: (state, action) => {
            state.no = action.payload;
        },
        changeLeagueType: (state, action) => {
            if (action.payload === 'miner' || action.payload === 'squad') {
                state.type = action.payload;
                state.time = 'day';
                state.userTop = 0;
            }
        },
        changeTime: (state, action) => {
            if (action.payload === 'day' || action.payload === 'week') {
                state.time = action.payload;
            }
        },
        nextLeague: (state) => {
            if (state.no < 8) {
                state.no = leagueToNumber(state.league) + 1;
                state.league = numberToLeague(state.no);
                state.type = 'miner';
                state.time = 'day';
                state.userTop = 0;
            }
        },
        prevLeague: (state) => {
            if (state.no > 1) {
                state.no = leagueToNumber(state.league) - 1;
                state.league = numberToLeague(state.no);
                state.type = 'miner';
                state.time = 'day';
                state.userTop = 0;
            }
        },
        setUserTop: (state, action) => {
            state.userTop = action.payload;
        }
    }
})

export const {setLeague,changeLeagueType, changeTime, nextLeague, prevLeague, setUserTop, setUserLeague, setLeagueNo} = leagueSlice.actions
export default leagueSlice.reducer;