import {
  CHANGE_DATASET,
  CHANGE_SPECIES,
  CHANGE_AGEDEP,
  CHANGE_VARIABILITY,
  CHANGE_POPSIZE,
  CHANGE_PERCMALE,
  CHANGE_MINAGE,
  CHANGE_MAXAGE
} from '../actions/settingsActions';

import merge from 'lodash/merge';

const initialState = {};

const settings = ( state = initialState, action ) => {
  Object.freeze( state );

  switch ( action.type ) {
    case CHANGE_DATASET:
      return merge( {}, state, { dataset: action.value } );;
    case CHANGE_SPECIES:
      return merge( {}, state, { species: action.value } );;
    case CHANGE_AGEDEP:
      return merge( {}, state, { ageDep: action.value } );;
    case CHANGE_VARIABILITY:
      return merge( {}, state, { variability: action.value } );;
    case CHANGE_POPSIZE:
      return merge( {}, state, { popSize: action.value } );;
    case CHANGE_PERCMALE:
      return merge( {}, state, { percMale: action.value } );;
    case CHANGE_MINAGE:
      return merge( {}, state, { minAge: action.value } );;
    case CHANGE_MAXAGE:
      return merge( {}, state, { maxAge: action.value } );;
    default:
      return state;
  }
};

export default settings;
