createProject <- function(userId, projName)
{
  # Open connection to the DB server
  dbName <- databaseNameFromUserId(userId)
  db     <- dbConnect(RMySQL::MySQL(), user='plethem', password='plethem', host='localhost', dbname = dbName)

  # Insert a record for the new project
  sql <- sprintf('INSERT INTO Projects VALUES(NULL,"%s", NULL);', projName)
  res <- dbGetQuery(db, sql)

  # Return the id for the project that was just added
  res    <- dbGetQuery(db, "SELECT LAST_INSERT_ID() AS I;")
  projId <- res[1,1]

  dbDisconnect(db)

  return(projId)
}
