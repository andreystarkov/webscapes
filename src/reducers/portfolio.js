import { RECEIVE_PORTFOLIO } from '../actions';
import Immutable from 'immutable';

const defaultState = {
    items: []
};

export default function portfolio(state = defaultState, action) {
    switch(action.type) {
        case RECEIVE_PORTFOLIO:
            const { portfolio } = action.payload;

            console.log('RECEIVE_PORTFOLIO: ', action.payload);

            return Object.assign({}, state, {
                items: portfolio
            });

        default:
            return state;
    }

}
