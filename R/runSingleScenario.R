#' @export
runSingleScenario <- function(age, gender, species, compounds) {

  sol = vector('list', nrow(compounds));

  # Compounds : dataframe of odose, ivdose, mw, kow, kabs, fabs, vmax, km, etc...
  for(i in 1:nrow(compounds)) {
    s1 = plethempbpk::pbpk(age, gender, species,
                           compounds[i,'odose'],
                           compounds[i,'ivdose'],
                           compounds[i,'mw'],
                           compounds[i,'kow'],
                           compounds[i,'kowsk'],
                           compounds[i,'pvap'],
                           compounds[i,'tgas'],
                           compounds[i,'density'],
                           compounds[i,'swat'],
                           compounds[i,'kabs'],
                           compounds[i,'fabs'],
                           compounds[i,'vmax'],
                           compounds[i,'km'],
                           compounds[i,'kbil'])   # kbil
    sol[[i]] = s1
  }

  return(jsonlite::toJSON(sol, digits=8, use_signif = TRUE))
}
