initUserTables <- function(db)
{
    # Add the Projects table
    sql <- "CREATE TABLE Projects(
          id integer auto_increment not null,
          name varchar(256),
          data LONGTEXT,
          primary key (id)
          );"
    res = dbSendQuery(db, sql)
    dbClearResult(res)
}
