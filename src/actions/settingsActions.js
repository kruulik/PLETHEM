export const CHANGE_DATASET = 'CHANGE_DATASET';
export const CHANGE_SPECIES = 'CHANGE_SPECIES';
export const CHANGE_AGEDEP = ' CHANGE_AGEDEP';
export const CHANGE_VARIABILITY = ' CHANGE_VARIABILITY';
export const CHANGE_POPSIZE = ' CHANGE_POPSIZE';
export const CHANGE_PERCMALE = ' CHANGE_PERCMALE';
export const CHANGE_MINAGE = ' CHANGE_MINAGE';
export const CHANGE_MAXAGE = ' CHANGE_MAXAGE';


export const setDataset = value => ({
    type: CHANGE_DATASET,
    value
})

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
