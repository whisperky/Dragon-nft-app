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
        leagueTempData: [],
        isLoading: false,
    } as LeagueSliceType,
    reducers: {
        setLeague: (state, action) => {
            state.league = numberToLeague(action.payload.no);
            state.type = action.payload.league.type;
            state.no = action.payload.no;
            state.leagueData = action.payload.league;
            state.topUsers = action.payload.users;
            state.userTop = 0;
            state.isLoading = false;
            if (state.leagueTempData.find((x) => x.no === state.no) === undefined) {
                state.leagueTempData.push({
                    no: state.no,
                    type: state.type,
                    leagueData: action.payload.league,
                    topUsers: action.payload.users,
                    userTop: 0,
                });
            }
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
            if (state.no < 8 && !state.isLoading) {
                state.no = leagueToNumber(state.league) + 1;
                state.league = numberToLeague(state.no);
                state.type = 'miner';
                state.time = 'day';
                state.userTop = 0;
                state.isLoading = true;
            }
        },
        prevLeague: (state) => {
            if (state.no > 1 && !state.isLoading) {
                state.no = leagueToNumber(state.league) - 1;
                state.league = numberToLeague(state.no);
                state.type = 'miner';
                state.time = 'day';
                state.userTop = 0;
                state.isLoading = true;
            }
        },
        setUserTop: (state, action) => {
            state.userTop = action.payload;
            if (state.leagueTempData.find((x) => x.no === state.no) === undefined) {
                state.leagueTempData.push({
                    no: state.no,
                    type: state.type,
                    leagueData: state.leagueData,
                    topUsers: state.topUsers,
                    userTop: state.userTop,
                });
            } else {
                state.leagueTempData.find((x) => x.no === state.no).userTop = action.payload;
            }
        },
        useTemp: (state, action) => {
            const temp = state.leagueTempData.find((x) => x.no === action.payload);
            if (temp !== undefined) {
                state.leagueData = temp.leagueData;
                state.topUsers = temp.topUsers;
                state.userTop = temp.userTop;
                state.isLoading = false;
            }
        },
        loadLeague: (state) => {
            state.isLoading = true;
        }
    }
})

export const {setLeague,changeLeagueType, changeTime, nextLeague, prevLeague, setUserTop, setUserLeague, setLeagueNo, useTemp, loadLeague} = leagueSlice.actions
export default leagueSlice.reducer;