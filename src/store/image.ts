import {createSlice} from "@reduxjs/toolkit";
import {ImageSliceType} from "../types/store.ts";
import {SkinImageTypes} from "../types/data.ts";

const imageSlice = createSlice({
    name: 'image',
    initialState: {
        core: [],
        activeSkins: {},
        booster: [],
        dailyBooster: [],
        skin: [],
        others: [],

        isCoreDone: false,
        isActiveSkinsDone: false,
        isBoosterDone: false,
        isDailyBoosterDone: false,
        isSkinDone: false,
        isOthersDone: false,
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
        addBoosterImages: (state, action) => {
            state.booster.push(action.payload);
        },
        addDailyBoosterImages: (state, action) => {
            state.dailyBooster.push(action.payload);
        },
        addSkinImages: (state, action: { payload: { name: SkinImageTypes, img: any, type: 'normal' | 'turbo' } }) => {
            const skin = state.skin.filter((x) => x.name == action.payload.name);
            if (skin.length > 0) {
                state.skin = state.skin.map((skin) => {
                    if (skin.name == action.payload.name) {
                        if (action.payload.type == 'normal') {
                            skin.img.normal = action.payload.img;
                        } else {
                            skin.img.turbo = action.payload.img;
                        }
                    }
                    return skin;
                });
            } else {
                state.skin.push({
                    name: action.payload.name,
                    img: {
                        normal: action.payload.type == 'normal' ? action.payload.img : null,
                        turbo: action.payload.type == 'turbo' ? action.payload.img : null
                    }
                });
            }
        },
        addOthersImages: (state, action) => {
            state.others.push(action.payload);
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

    setCoreDone,
    setActiveSkinsDone,
    setBoosterDone,
    setDailyBoosterDone,
    setSkinDone,
    setOthersDone,
} = imageSlice.actions;

export default imageSlice.reducer;