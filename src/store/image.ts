import {createSlice} from "@reduxjs/toolkit";
import {ImageSliceType, MyLeagueImageTypes} from "../types/store.ts";
import {BoosterImageTypes, DailyBoosterImageTypes, LeagueImageTypes, SkinImageTypes} from "../types/data.ts";

const imageSlice = createSlice({
    name: 'image',
    initialState: {
        core: [],
        activeSkins: {},
        booster: [],
        dailyBooster: [],
        skin: [],
        others: [],
        league: [],
        coiners: [],
        optional: [],

        isCoreDone: false,
        isActiveSkinsDone: false,
        isBoosterDone: false,
        isDailyBoosterDone: false,
        isSkinDone: false,
        isOthersDone: false,
        isLeagueDone: false,
        isCoinersDone: false,
        isOptionalDone: false,
    } as ImageSliceType,
    reducers: {
        addCoreImages: (state, action) => {
            state.core.push(action.payload);
        },
        addActiveSkinsImages: (state, action) => {
            state.activeSkins = action.payload;
        },
        alterActiveSkinsImages: (state, action: { payload: SkinImageTypes }) => {
            state.activeSkins = state.skin.find((x) => x.name == action.payload);
        },
        addBoosterImages: (state, action: { payload: { name: BoosterImageTypes, img: any, type: 'big' | 'small' } }) => {
            state.booster.push(action.payload);
            const booster = state.booster.filter((x) => x.name == action.payload.name);
            if (booster.length > 0) {
                state.booster = state.booster.map((booster) => {
                    if (booster.name == action.payload.name) {
                        if (action.payload.type == 'big') {
                            booster.img.big = action.payload.img;
                        } else {
                            booster.img.small = action.payload.img;
                        }
                    }
                    return booster;
                });
            }
            else {
                state.booster.push({
                    name: action.payload.name,
                    img: {
                        big: action.payload.type == 'big' ? action.payload.img : null,
                        small: action.payload.type == 'small' ? action.payload.img : null
                    }
                });
            }
        },
        addDailyBoosterImages: (state, action: { payload: { name: DailyBoosterImageTypes, img: any, type: 'big' | 'small' } }) => {
            state.dailyBooster.push(action.payload);
            const dailyBooster = state.dailyBooster.filter((x) => x.name == action.payload.name);
            if (dailyBooster.length > 0) {
                state.dailyBooster = state.dailyBooster.map((dailyBooster) => {
                    if (dailyBooster.name == action.payload.name) {
                        if (action.payload.type == 'big') {
                            dailyBooster.img.big = action.payload.img;
                        } else {
                            dailyBooster.img.small = action.payload.img;
                        }
                    }
                    return dailyBooster;
                });
            }
            else {
                state.dailyBooster.push({
                    name: action.payload.name,
                    img: {
                        big: action.payload.type == 'big' ? action.payload.img : null,
                        small: action.payload.type == 'small' ? action.payload.img : null
                    }
                });
            }
        },
        addSkinImages: (state, action: { payload: { name: SkinImageTypes, img: any, type: 'normal' | 'turbo' | 'earn' } }) => {
            const skin = state.skin.filter((x) => x.name == action.payload.name);
            if (skin.length > 0) {
                state.skin = state.skin.map((skin) => {
                    if (skin.name == action.payload.name) {
                        if (action.payload.type == 'normal') {
                            skin.img.normal = action.payload.img;
                        }
                    }
                    return skin;
                });
            } else {
                state.skin.push({
                    name: action.payload.name,
                    img: {
                        normal: action.payload.type == 'normal' ? action.payload.img : null,
                        turbo: action.payload.type == 'turbo' ? action.payload.img : null,
                        earn: action.payload.type == 'earn' ? action.payload.img : null
                    }
                });
            }
        },
        addOthersImages: (state, action) => {
            state.others.push(action.payload);
        },
        addLeagueImages: (state, action: {payload: MyLeagueImageTypes}) => {
            state.league.push(action.payload as any);
        },
        addCoinersImages: (state, action) => {
            state.coiners.push(action.payload);
        },
        addOptionalImages: (state, action) => {
            state.optional.push(action.payload);
        },

        setCoreDone: (state, action) => {
            state.isCoreDone = action.payload;
        },
        setActiveSkinsDone: (state, action) => {
            state.isActiveSkinsDone = action.payload;
        },
        setBoosterDone: (state, action) => {
            state.isBoosterDone = action.payload;
        },
        setDailyBoosterDone: (state, action) => {
            state.isDailyBoosterDone = action.payload;
        },
        setSkinDone: (state, action) => {
            state.isSkinDone = action.payload;
        },
        setOthersDone: (state, action) => {
            state.isOthersDone = action.payload;
        },
        setLeagueDone: (state, action) => {
            state.isLeagueDone = action.payload;
        },
        setCoinersDone: (state, action) => {
            state.isCoinersDone = action.payload;
        },
        setOptionalDone: (state, action) => {
            state.isOptionalDone = action.payload;
        },
    }
});

export const {
    addCoreImages,
    addActiveSkinsImages,
    alterActiveSkinsImages,
    addBoosterImages,
    addDailyBoosterImages,
    addSkinImages,
    addOthersImages,
    addLeagueImages,
    addCoinersImages,
    addOptionalImages,

    setCoreDone,
    setActiveSkinsDone,
    setBoosterDone,
    setDailyBoosterDone,
    setSkinDone,
    setOthersDone,
    setLeagueDone,
    setCoinersDone,
    setOptionalDone,
} = imageSlice.actions;

export default imageSlice.reducer;