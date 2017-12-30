#' @export
getIndusChemFateCompoundData <- function() {
  library(httk)
  library(jsonlite)
  df = induschemfate_data
  return(jsonlite::toJSON(df))
}
