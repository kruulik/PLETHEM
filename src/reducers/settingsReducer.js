import {
  CHANGE_ANALYSIS,
  CHANGE_PCMETHOD,
  CHANGE_ORALABS,
  CHANGE_VARIABILITY,
  CHANGE_POPSIZE,
  CHANGE_EHPMET,
  CHANGE_METTRACK,
  CHANGE_ACTIVETRANS,
  CHANGE_MASSUNIT,
  CHANGE_VOLUNIT,
  CHANGE_TIMEUNIT,
  CHANGE_TIMESTEP,
  CHANGE_ALGORITHM,
  CHANGE_RELERR,
  CHANGE_INHIB,
  CHANGE_ABSERR
} from '../actions/settingsActions';


import merge from 'lodash/merge';

const initialState = {};

const settings = ( state = initialState, action ) => {
  Object.freeze( state );

  switch ( action.type ) {

    // Analysis
    case CHANGE_ANALYSIS:
      return merge( {}, state, { analysis: action.value } );
    case CHANGE_VARIABILITY:
      return merge( {}, state, { variability: action.value } );
    case CHANGE_POPSIZE:
      return merge( {}, state, { popSize: action.value } );

    // Model
    case CHANGE_PCMETHOD:
      return merge( {}, state, { pcModel: action.value } );
    case CHANGE_ORALABS:
      return merge( {}, state, { oralAbsMethod: action.value } );
    case CHANGE_EHPMET:
      return merge( {}, state, { EHPMet: action.value } );
    case CHANGE_METTRACK:
      return merge( {}, state, { metTrack: action.value } );
    case CHANGE_ACTIVETRANS:
      return merge( {}, state, { activeTrans: action.value } );
    case CHANGE_INHIB:
      return merge( {}, state, { inhib: action.value } );

    // Units
    case CHANGE_MASSUNIT:
      return merge( {}, state, { massUnit: action.value } );
    case CHANGE_VOLUNIT:
      return merge( {}, state, { volUnit: action.value } );
    case CHANGE_TIMEUNIT:
      return merge( {}, state, { timeUnit: action.value } );

    // Simulation
    case CHANGE_TIMESTEP:
      return merge( {}, state, { timestep: action.value } );
    case CHANGE_ALGORITHM:
      return merge( {}, state, { algorithm: action.value } );
    case CHANGE_RELERR:
      return merge( {}, state, { relErr: action.value } );
    case CHANGE_ABSERR:
      return merge( {}, state, { absErr: action.value } );

    // Return Default State
    default:
      return state;
  }
};

export default settings;
