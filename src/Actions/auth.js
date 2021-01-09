import { types } from "../types/types"


export const login = (uid, displayName) => {
    console.log(types.login)
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

