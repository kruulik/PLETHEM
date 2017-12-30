databaseNameFromUserId <- function(userId)
{
    # Each user has a separate database
    # The name of the db is the userName appended to "PPDB_"
    dbName <- sprintf("PPDB_USER_%d", userId)
    return(dbName)
}
