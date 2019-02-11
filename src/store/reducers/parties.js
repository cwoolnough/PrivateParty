import { ADD_PARTY, DELETE_PARTY } from '../actions/actionTypes';

const initialState = {
    parties: []
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PARTY:
            return {
                ...state,
                parties: state.parties.concat({
                    key: Math.random(),
                    name: action.partyName
                })
            }
        case DELETE_PARTY:
            return {
                ...state,
                parties: state.parties.filter(party => {
                    return place.key !== action.partyKey;
                })
            };
        default:
            return state;
    } 
};

export default reducer;