#' @export
removeProject <- function(userId, projectId)
{
    # Open connection to the DB server
    dbName <- databaseNameFromUserId(userId)
    db     <- dbConnect(RMySQL::MySQL(), user='plethem', password='plethem', host='localhost', dbname = dbName)

    # Remove record for the project
    sql <- sprintf('DELETE FROM Projects WHERE id = %d;', projectId)
    res <- dbSendQuery(db, sql)

    dbDisconnect(db)
}
