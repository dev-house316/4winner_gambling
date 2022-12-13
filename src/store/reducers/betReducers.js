import { BET_SELECT, GET_MY_BETS } from '../../store/actions/actionTypes';

const initialState = { betCollectList: [], myBetData: [], isLoading: true }

export default function (state = initialState, action) {
    switch (action.type) {
        case BET_SELECT:
            return {
                ...state,
                betCollectList: [...action.payload.list],
            };
        case GET_MY_BETS:
            return {
                ...state,
                myBetData: [...action.payload.myBetData],
                isLoading: false
            };
        default:
            return state;
    }
}