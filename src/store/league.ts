import {createSlice} from '@reduxjs/toolkit'
import {FrenSliceType, LeagueSliceType} from "../types/store.ts";
import {leagueName, leagueToNumber, numberToLeague, showToast} from "../helpers/helper.ts";

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
        squadTop: 0,
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
        topSquads: [],
        leagueList: [],
        leagueTempData: [],
        isLoading: false,
        haveLoadAtLeastOnce: false,
        pageLCount: 0,
        loadLeaguePage: false,
    } as LeagueSliceType,
    reducers: {
        setLeague: (state, action) => {
            state.league = numberToLeague(action.payload.no);
            state.type = action.payload.league.type;
            state.no = action.payload.no;
            state.leagueData = action.payload.league;
            state.topUsers = action.payload.users ?? [];
            state.topSquads = action.payload.squads ?? [];
            state.userTop = 0;
            state.squadTop = 0;
            state.isLoading = false;
            if (state.haveLoadAtLeastOnce == false)
                state.haveLoadAtLeastOnce = true;
            if (state.leagueTempData.find((x) => x.no === state.no && x.type === state.type) === undefined) {
                state.leagueTempData.push({
                    no: state.no,
                    type: state.type,
                    leagueData: action.payload.league,
                    topUsers: action.payload.users ?? [],
                    topSquads: action.payload.squads ?? [],
                    userTop: 0,
                    squadTop: 0,
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
                const tempData = state.leagueTempData.find((x) => x.type == action.payload && x.no == state.no);
                if (tempData !== undefined) {
                    state.userTop = tempData.userTop;
                }
            }
        },
        changeTime: (state, action) => {
            if (action.payload === 'day' || action.payload === 'week') {
                state.time = action.payload;
            }
        },
        nextLeague: (state) => {
            if (state.no < 8 && !state.isLoading) {
                state.pageLCount = 2;
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
                state.pageLCount = 2;
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
                    topSquads: state.topSquads,
                    userTop: state.userTop,
                    squadTop: state.squadTop,
                });
            } else {
                state.leagueTempData.find((x) => x.no === state.no).userTop = action.payload;
            }
        },
        setSquadTop: (state, action) => {
            state.squadTop = action.payload;
            if (state.leagueTempData.find((x) => x.no === state.no && x.type === state.type) === undefined) {
                state.leagueTempData.push({
                    no: state.no,
                    type: state.type,
                    leagueData: state.leagueData,
                    topUsers: state.topUsers,
                    userTop: state.userTop,
                    topSquads: state.topSquads,
                    squadTop: state.squadTop,
                });
            } else {
                state.leagueTempData.find((x) => x.no === state.no && x.type === state.type).squadTop = action.payload;
            }
        },
        useTemp: (state) => {
            const temp = state.leagueTempData.find((x) => x.no === state.no && x.type === state.type);
            if (temp !== undefined) {
                state.league = numberToLeague(state.no);
                state.leagueData = temp.leagueData;
                state.topUsers = temp.topUsers;
                state.userTop = temp.userTop;
                state.squadTop = temp.squadTop;
                state.topSquads = temp.topSquads;
                state.isLoading = false;
            } else {
                state.isLoading = false;
            }
        },
        loadLeague: (state) => {
            state.isLoading = true;
        },
        loadedLeague: (state) => {
            state.isLoading = false;
        },
        increasePageLCount: (state) => {
            state.pageLCount += 1;
        },
        resetPageLCount: (state) => {
            state.pageLCount = 0;
        },
        setLoadLeaguePage: (state, action) => {
            state.loadLeaguePage = action.payload;
        }
    }
})

export const {
    setLeague,
    changeLeagueType,
    changeTime,
    nextLeague,
    prevLeague,
    setUserTop,
    setUserLeague,
    setLeagueNo,
    useTemp,
    loadLeague,
    setSquadTop,
    increasePageLCount,
    resetPageLCount,
    setLoadLeaguePage,
    loadedLeague
} = leagueSlice.actions
export default leagueSlice.reducer;