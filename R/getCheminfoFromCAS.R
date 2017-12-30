#' @export
getCheminfoFromCAS <- function(cas)
{
  m = Wetmore.data
  sel = m[,"CAS"] == cas
  m2 = m[sel, ]
  if(dim(m2)[1] < 1) return(NA);
  return(jsonlite::toJSON(m2[1,]))
}
