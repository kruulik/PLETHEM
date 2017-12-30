#' @export
getDefaultCompoundData <- function() {
  library(httk)
  library(jsonlite)
  df = chem.physical_and_invitro.data
  return(jsonlite::toJSON(df))
}
