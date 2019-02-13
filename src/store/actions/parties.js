import { ADD_PARTY, DELETE_PARTY } from './actionTypes';

export const addParty = (partyName, partyLocation, partyDate, partyTime, partySecret) => {
    return {
        type: ADD_PARTY,
        partyName: partyName,
        partyLocation: partyLocation,
        partyDate: partyDate,
        partyTime: partyTime,
        partySecret: partySecret
    };
};

export const deleteParty = (key) => {
    return {
        type: DELETE_PARTY,
        partyKey: key
    };
};
