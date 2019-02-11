import { ADD_PARTY, DELETE_PARTY } from './actionTypes';

export const addParty = (partyName) => {
    return {
        type: ADD_PARTY,
        partyName: partyName
    };
};

export const deleteParty = (key) => {
    return {
        type: DELETE_PARTY,
        partyKey: key
    };
};
