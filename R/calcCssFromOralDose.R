#' @export
calcCssFromOralDose <- function(cas, odose, ndoses, dopbtk = "false") {
  # Have to use a string here to represent a boolean because of apparent deficience in OpenCPU API
  library(httk)
  library(jsonlite)
  print(dopbtk)
  if(dopbtk == "true"){
    out1 = calc_css(chem.cas = cas, daily.dose = odose, doses.per.day = ndoses)
    out2 = solve_pbtk(chem.cas = cas, days = 14, daily.dose = odose, doses.per.day = ndoses)
    out = list(css = out1$avg, time = out2[,"time"], plasma = out2[,"Cplasma"])
  }
  else{
    out1 = calc_css(chem.cas = cas, daily.dose = odose, doses.per.day = ndoses)
    out = list(css = out1$avg)
  }
  return(jsonlite::toJSON(out))
}
