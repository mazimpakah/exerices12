import { ERRORS, FIND_ALL_USERS, CREATE_USER, IUserType } from "./types";

const initialState = {
    users: [],
    errors: null,
    createdUser: null,
};

export const userReducer = (
    state = initialState,
    { type, payload }: IUserType
) => {
    switch (type) {
        case ERRORS:
            return { ...state, errors: payload, createdUser: null };
        case FIND_ALL_USERS:
            return { ...state, users: payload, errors: null }
        case CREATE_USER:
            return { ...state, createdUser: payload, errors: null }
        default:
            return state;
    }
};