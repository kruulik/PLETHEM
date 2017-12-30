#' @export
removeUser <- function(userId)
{
    # Open connection to the DB server
    db     <- dbConnect(RMySQL::MySQL(), user='plethem', password='plethem', host='localhost')

    # Delete the database associated with the user to be removed
    dbName <- databaseNameFromUserId(userId)
    sql    <- sprintf("DROP DATABASE IF EXISTS %s;", dbName)
    dbSendQuery(db, sql)

    # Delete this record from the system users table
    sql    <- sprintf("USE PPDBSYSTEM;")
    dbSendQuery(db, sql)

    sql <- sprintf('DELETE FROM Users WHERE id = %d;', userId)
    dbSendQuery(db, sql)

    dbDisconnect(db)
}
