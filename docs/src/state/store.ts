import { configureStore } from "@reduxjs/toolkit"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage" // defaults to localStorage for web
import { getPersistConfig } from "redux-deep-persist"

import { reduxDevToolsOptions } from "@app/util"
import { rootReducer } from "./root-reducer"
import type { RootState } from "./types"

const persistList: NestedKeyOf<RootState>[] = [
    "Core.drawerOpened",
    "Core.openedDrawerSections",
    "Core.darkModeEnabled",
]

const persistConfig = getPersistConfig({
    rootReducer,
    key: "svg4react",
    version: 1,
    storage: storage,
    // @ts-ignore: next-line
    whitelist: persistList,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: reduxDevToolsOptions,
    // @ts-ignore: next-line
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [ FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ],
        },
    }),
})

export const persistor = persistStore(store)
