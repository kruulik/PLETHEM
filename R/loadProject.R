#' @export
loadProject <- function(userId, projId)
{
  # Open connection to the DB server
  dbName <- databaseNameFromUserId(userId)
  db     <- dbConnect(RMySQL::MySQL(), user='plethem', password='plethem', host='localhost', dbname = dbName)

  # Insert a record for the new project
  sql <- sprintf('SELECT data FROM Projects WHERE id = %d;', projId)
  res <- dbGetQuery(db, sql)

  # Return the project JSON string
  json = res[1, 1]

  dbDisconnect(db)

  return(json)
}
