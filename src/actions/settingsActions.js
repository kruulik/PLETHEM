
// Analysis
export const CHANGE_ANALYSIS = 'CHANGE_ANALYSIS';
export const CHANGE_VARIABILITY = 'CHANGE_VARIABILITY';
export const CHANGE_POPSIZE = 'CHANGE_POPSIZE';

// Model
export const CHANGE_PCMETHOD = 'CHANGE_PCMETHOD';
export const CHANGE_ORALABS = 'CHANGE_ORALABS';
export const CHANGE_EHPMET = 'CHANGE_EHPMET';
export const CHANGE_METTRACK = 'CHANGE_METTRACK';
export const CHANGE_ACTIVETRANS = 'CHANGE_ACTIVETRANS';
export const CHANGE_INHIB = 'CHANGE_INHIB';

// Units
export const CHANGE_MASSUNIT = 'CHANGE_MASSUNIT';
export const CHANGE_VOLUNIT = 'CHANGE_VOLUNIT';
export const CHANGE_TIMEUNIT = 'CHANGE_TIMEUNIT';

// Simulation
export const CHANGE_TIMESTEP = 'CHANGE_TIMESTEP';
export const CHANGE_ALGORITHM = 'CHANGE_ALGORITHM';
export const CHANGE_RELERR = 'CHANGE_RELERR';
export const CHANGE_ABSERR = 'CHANGE_ABSERR';


// Analysis
export const setAnalysisType = value => {
  return{
    type: CHANGE_ANALYSIS,
    value
}}

export const setVariability = value => ({
    type: CHANGE_VARIABILITY,
    value
})

export const setPopSize = value => ({
  type: CHANGE_POPSIZE,
  value
})


// Model
export const setPCMethod = value => ({
  type: CHANGE_PCMETHOD,
  value
})

export const setOralAbsMethod = value => ({
  type: CHANGE_ORALABS,
  value
})

export const setEHPMet = value => ({
    type: CHANGE_EHPMET,
    value
})

export const setMetTracking = value => ({
  type: CHANGE_METTRACK,
  value
})

export const setActiveTransport = value => ({
  type: CHANGE_ACTIVETRANS,
  value
})

export const setInhib = value => ({
  type: CHANGE_INHIB,
  value
})


// Units
export const setMassUnit = value => ({
    type: CHANGE_MASSUNIT,
    value
})

export const setVolUnit = value => ({
    type: CHANGE_VOLUNIT,
    value
})

export const setTimeUnit = value => ({
    type: CHANGE_TIMEUNIT,
    value
})


// Simulation
export const setTimestep = value => ({
  type: CHANGE_TIMESTEP,
  value
})

export const setAlgorithm = value => ({
  type: CHANGE_ALGORITHM,
  value
})

export const setRelErr = value => ({
  type: CHANGE_RELERR,
  value
})

export const setAbsErr = value => ({
  type: CHANGE_ABSERR,
  value
})
