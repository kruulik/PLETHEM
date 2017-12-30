#' @export
addUser <- function(userName)
{
    # Open connection to the DB server
    db     <- dbConnect(RMySQL::MySQL(), user='plethem', password='plethem', host='localhost')

    # Add entry to the users database
    sql    <- sprintf("USE PPDBSYSTEM;")
    dbSendQuery(db, sql)

    # Add the user
    sql <- sprintf('INSERT INTO Users VALUES(NULL,"%s");', userName)
    dbSendQuery(db, sql)

    # Get the id for the user that was just added
    res    <- dbGetQuery(db, "SELECT LAST_INSERT_ID() AS I;")
    userId <- res[1,1]

    # Create a new database for the user to be added
    dbName <- databaseNameFromUserId(userId)
    sql    <- sprintf("CREATE DATABASE IF NOT EXISTS %s;", dbName)
    dbSendQuery(db, sql)

    # Make this database active so we can add the tables
    sql    <- sprintf("USE %s;", dbName)
    dbSendQuery(db, sql)

    # Add tables
    initUserTables(db);

    dbDisconnect(db)

    return(userId);
}
