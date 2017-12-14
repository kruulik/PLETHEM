
// Dataset
export const CHANGE_DATASET = 'CHANGE_DATASET';

// Physiology
export const CHANGE_SPECIES = 'CHANGE_SPECIES';
export const CHANGE_AGEDEP = 'CHANGE_AGEDEP';
export const CHANGE_VARIABILITY = 'CHANGE_VARIABILITY';
export const CHANGE_POPSIZE = 'CHANGE_POPSIZE';
export const CHANGE_PERCMALE = 'CHANGE_PERCMALE';
export const CHANGE_MINAGE = 'CHANGE_MINAGE';
export const CHANGE_MAXAGE = 'CHANGE_MAXAGE';

// ADME
export const CHANGE_METPS = 'CHANGE_METPS';
export const CHANGE_IVASSAY = 'CHANGE_IVASSAY';
export const CHANGE_SATMET = 'CHANGE_SATMET';
export const CHANGE_RENALELIM = 'CHANGE_RENALELIM';
export const CHANGE_EHCCB = 'CHANGE_EHCCB';

// Simulation
export const CHANGE_TIMESTEP = 'CHANGE_TIMESTEP';
export const CHANGE_STARTAGE = 'CHANGE_STARTAGE';
export const CHANGE_DURATION = 'CHANGE_DURATION';


// Dataset
export const setDataset = value => {
debugger
  return{
    type: CHANGE_DATASET,
    value
}}

// Physiology
export const setSpecies = value => ({
    type: CHANGE_SPECIES,
    value
})

export const setAgeDep = value => ({
  type: CHANGE_AGEDEP,
  value
})

export const setVariability = value => ({
    type: CHANGE_VARIABILITY,
    value
})

export const setPopSize = value => ({
    type: CHANGE_POPSIZE,
    value
})

export const setPercMale = value => ({
    type: CHANGE_PERCMALE,
    value
})

export const setMinAge = value => ({
    type: CHANGE_MINAGE,
    value
})

export const setMaxAge = value => ({
    type: CHANGE_MAXAGE,
    value
})

// ADME
export const setMetParaSource = value => ({
    type: CHANGE_METPS,
    value
})

export const setIVAssay = value => ({
    type: CHANGE_IVASSAY,
    value
})

export const setSatMet = value => ({
    type: CHANGE_SATMET,
    value
})

export const setRenalElim = value => ({
    type: CHANGE_RENALELIM,
    value
})

export const setIncludeEhccb = value => ({
    type: CHANGE_EHCCB,
    value
})

// Simulation
export const setTimestep = value => ({
    type: CHANGE_TIMESTEP,
    value
})

export const setStartAge = value => ({
    type: CHANGE_STARTAGE,
    value
})

export const setDuration = value => ({
    type: CHANGE_DURATION,
    value
})
