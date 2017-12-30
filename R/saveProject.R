#' @export
saveProject <- function(userId, projId, projData)
{
    # Open connection to the DB server
    dbName <- databaseNameFromUserId(userId)
    db     <- dbConnect(RMySQL::MySQL(), user='plethem', password='plethem', host='localhost', dbname = dbName)

    # Insert a record for the new project
    sql <- sprintf('UPDATE Projects SET data="%s" WHERE id=%d;', projData, projId)
    res <- dbGetQuery(db, sql)
}
