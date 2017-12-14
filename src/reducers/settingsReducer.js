import {
  CHANGE_DATASET,
  CHANGE_SPECIES,
  CHANGE_AGEDEP,
  CHANGE_VARIABILITY,
  CHANGE_POPSIZE,
  CHANGE_PERCMALE,
  CHANGE_MINAGE,
  CHANGE_MAXAGE,
  CHANGE_METPS,
  CHANGE_IVASSAY,
  CHANGE_SATMET,
  CHANGE_RENALELIM,
  CHANGE_EHCCB,
  CHANGE_TIMESTEP,
  CHANGE_STARTAGE,
  CHANGE_DURATION
} from '../actions/settingsActions';


import merge from 'lodash/merge';

const initialState = {};

const settings = ( state = initialState, action ) => {
  Object.freeze( state );

  switch ( action.type ) {

    // Dataset
    case CHANGE_DATASET:
      return merge( {}, state, { dataset: action.value } );;

    // Physiology
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

    // ADME
    case CHANGE_METPS:
      return merge( {}, state, { metParaSource: action.value } );;
    case CHANGE_IVASSAY:
      return merge( {}, state, { ivAssay: action.value } );;
    case CHANGE_SATMET:
      return merge( {}, state, { satMet: action.value } );;
    case CHANGE_RENALELIM:
      return merge( {}, state, { renalElim: action.value } );;
    case CHANGE_EHCCB:
      return merge( {}, state, { includeehccb: action.value } );;
    case CHANGE_TIMESTEP:
      return merge( {}, state, { timestep: action.value } );;
    case CHANGE_STARTAGE:
      return merge( {}, state, { startAge: action.value } );;
    case CHANGE_DURATION:
      return merge( {}, state, { duration: action.value } );;
    default:
      return state;
  }
};

export default settings;
