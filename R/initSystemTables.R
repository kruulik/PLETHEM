initSystemTables <- function()
{
  # Open connection to the DB server
  db     <- dbConnect(RMySQL::MySQL(), user='plethem', password='plethem', host='localhost')

  # Create a new database for the system tables
  sql    <- sprintf("CREATE DATABASE IF NOT EXISTS %s;", "PPDBSYSTEM")
  dbSendQuery(db, sql)

  # Make this the active database before adding tables
  sql    <- sprintf("USE %s;", "PPDBSYSTEM")
  dbSendQuery(db, sql)

  # Add the Users table
  sql <- "CREATE TABLE Users(
          id integer auto_increment not null,
          name varchar(256),
          primary key (id)
          );"
  res = dbSendQuery(db, sql)
  dbClearResult(res)

  dbDisconnect(db)
}
