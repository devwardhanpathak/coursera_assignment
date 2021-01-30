import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Dishes } from './dishes';
import { Leaders } from './leaders';
import { Comments } from './comments';
import { createForms } from 'react-redux-form';
import { Promotions } from './promotions';
import { DISHES } from '../shared/dishes';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { initiaFeedback } from './forms';

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: initiaFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}