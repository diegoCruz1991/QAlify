import { combineReducers } from 'redux';
import ConfigurationReducer from './reducer_configuration';

const rootReducer = combineReducers({
  configuration: ConfigurationReducer
});

export default rootReducer;