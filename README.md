# PLETHEM

## Running locally

npm install

To run dev:
npm run start

open on localhost:3000

open dev console in chrome to see redux-logger

### Functionality

All settings panel UI elements affect the redux store directly. This can be seen in the stringified JSON and redux logger. Saving project downloads the state from localStorage as timestamped JSON file. Uploading a json file will update the state and UI to the correct parameters.  

## Overview
This application is used to predict the health effects arising from exposure to various chemicals.  To do this, assorted lists of necessary input information are specified by the user in tables and other input fields in the UI.  These values are sent to the computational backend, which returns a variety of scalar and vector values to be displayed in other tables and plots within the UI.  It will be possible to perform analyses in “batch mode,” meaning the necessary information for a group of chemicals can be supplied and submitted to the backend for processing in parallel.  As such, it will be important for the UI to support asynchronous computation of predictions and resulting presentation of results, the details of which will be described in the following sections.

## Backend
The computational backend consists of the the R statistical computing environment running on the OpenCPU platform on a Linux server on the Amazon EC2.  OpenCPU exposes the R functions which execute the predictive models as web services.  In general, web services will be provided for running a single prediction, and running a batch of predictions, as mentioned above.  Web services will also be supplied for database operations on data presented in tables.  All necessary input information will be packages into an input structure; all results will similarly be packages into and output structure will will be returned by the web service.  OpenCPU will handle implementation of web services and management of R sessions.  However, services will need to be developed user authentication and access control.

## Frontend
The frontend will likely be implemented as a single-page web application.  Besides standard web page components, the UI will require the following components:

- An editable, hierarchical table/grid control which supports numeric, combobox and checkbox table cells; each row in this table will (loosely) correspond to a record in a database
- A “spreadsheet” (or grid) control which is not table-row oriented; i.e. rows in this table do not correspond to rows in a database table
- A plot control capable of producing line plots, scatter plots, bar plots (histograms), and pie charts
Vertical and horizontal splitter control which can be used to resize pairs of vertically or horizontally split panels
- An “accordion” control which can be used to show/hide panels containing plots
Numeric input fields which can be used to impose validation rules on numeric inputs, and support scientific notation

The web page should have a consistent look and feel across all popular desktop web browsers and operating systems.

## Overall UI Layout
The user interface will be comprised of three primary components (Figure 1).  An area at the top of the application will host a toolbar/menubar (or equivalent) from which common tasks may be be initiated, including: opening/saving files, importing/exporting data, starting/stopping/pausing a run, and any other tasks TBD.  We anticipate needing around 10 buttons (or menu items), and will provide details.  The remainder of the UI will be split between a vertical panel on the left side of the application from which project-wide settings are specified, and whose width can be adjusted via a vertical splitter bar, and a set of tabbed panels containing the tables and plots from which input information and results are presented.

## Settings page
The panel on the left side of the UI (Figure 1) will contain a vertical list of groups of settings (arranged in a 2-column grid), where each group has a title and a way of delimiting the groups (e.g., a horizontal rule).  Each input field will be comprised of one of the following elements, arranged in two columns:
- A label on the left and combobox on the right
- A label on the left on numeric input field on the right
- A checkbox which check square on left and label on right, spanning both fields)
- Other elements TBD
We anticipate needing about 6 groups of settings, with each group containing as many as 5 or 6 input fields, meaning this part of the UI will likely need to be scrollable.

## Tabbed Documentation Area
The tabbed area which encompasses most of the UI will tentatively consist of seven tabs.  The contents of each tab are described in the sections below.
###Scenarios Tab
This tab will contain a single table with 4 columns (Figure 1).  Rows will be grouped to form “scenarios,” where a scenario is identified by a unique name, and a list of references to named compounds and exposure schedules.  The first column will contain an checkbox which can be used to include/exclude a scenario from a study.  The second column will contain a user-specified string providing the name of the scenario.  The third column will contain a list of combo boxes containing the names of all chemicals in the database (presented in another tab).  The fourth column will contain another list of combo boxes containing the names of all exposure schedules (defined in another table).  A scenario may contain one or more chemical/schedule pairs, so the row containing the scenario name will optionally be followed by additional row belonging to the same scenario.  Buttons will be available at the top right side of the table for adding new scenarios, adding a new chemical to an existing scenario, and removing the selected row (scenario or individual chemical).

### Exposure Schedules Tab
This tab will contain a table used to specify exposure schedules.  An exposure schedule is a lost of exposure events, where each event is defined by a start time, dose route, duration, number of repetition, etc. (Figure 2)  Note that the specific columns shown in the figure are not inclusive.  We anticipate as many as 20 values associated with an exposure event, meaning this table may need to display 20 columns at a time.  To constrain the number of input fields presented to the user, the following will be implemented:
- A “filter” (or “select columns”) button (not shown in the figure) at the top left of the table, which when clicked will present a check list of available columns; the user will be able to use this control to indicate which columns will be visible
- An ability to programmatically limit the particular columns available to the end user depending on the selections made in the project settings panel on the left side of the web page.  Some table columns will be irrelevant depending on the settings made in this panel, so these should column should not be available for selection
- A “details” view (not shown in Figure 2) on the bottom half (separated by a horizontal splitter) of the screen which will contain the same types of input field groups used in the project settings panel, and which can be used to set all available fields for the record associated with the selected row in the table above.  As the use moves through records in the table (the “master” view), the fields in the lower half of the screen (the “details” view) are updated.  Fields in the table and the details view are synchronized such that any change in one is immediately reflected in the other.

### Compounds Tab
Compounds Tab
The compounds tab (Figure 4) will be functionally very similar to the exposure schedule tab, with the exception that the table will be flat.  The record for each compound will likely have a large number of fields (perhaps several dozen), however, so it will be necessary to allow the user to easily adjust the specific columns visible at any given time.  We anticipate that this will be most easily accomplished by conceptually having the column categorized hierarchically, and presenting this hierarchy in the checkable tree view when the “select columns” button (not shown) is pushed.  Selecting a non-leaf node in the tree will make all descendant columns under that level of the tree visible.  Alternatively, selecting a leaf in the tree will make only the columns in that leaf visible.

As in the exposure schedules view, a “details” pane will be presented on the bottom half of the page (not shown), containing inputs for all fields in the selected record.  These will be updated as the user navigates through records in the database, and fields contained in the table will be synchronized with the corresponding fields in the details view.

It will be possible to specify values for certain fields in this table by either entering a numeric value directly, or by clicking a button embedded in an adjacent column to invoke a modal dialog which will prompt the user for other input values which will be used to calculate the value for the cell.

Note that the number of compounds in the database may exceed thousands, so it may be necessary to add a paging control to assist in navigating the database.  It should also be possible to horizontally scroll the table.

### Physiology Tab
This tab will contain a spreadsheet with certain cell editable, and will be used to specify parameters which apply to all scenarios in the study (no screen shot provided presently).   The spreadsheet will have pages organized into tabs (as in Excel), where each tab will correspond to a particular category of settings (e.g., general physiology, tissue composition, GI parameters, etc).  Above the spreadsheet, buttons will be provided to select the species, gender and age associated with these values.  If a cell in the spreadsheet is edited to override its default value, a visual indication will be provided (e.g., different cell background color), and a mechanism will be provided for resetting the cell to the default value.  On the bottom half of the spreadsheet, a line plot will be provided to show the age dependence and variability of the parameter associated with the selected cell in the spreadsheet.  Web services will be provided to get/set any of the values presented/specified in this table.

### Interactions Tab
This tab will contain two tables contained in expandable “accordion” controls so that each may be hidden/exposed as desired by user or warranted by project settings (Figure 5).  Buttons will be provided at the top right corner of the table for inserting/removing rows from the table.  Column names and datatypes TBD, will be provided ASAP.

### Results Tab
The results tab (no screen shot) will be structurally similar to the scenarios tab, but will provide additional columns and will not be editable.  Columns in this table will correspond to scalar output quantities computed by backend services.  There will likely be a large number of these, so the visibility of columns will have to be specified by allowing selection of hierarchically organized column names as in the compound table.

### PK Data Tab (not shown)
A table will be provided summarizing observed/experimental PK data sets imported by the user.  Each row in the table will correspond to a single data set, and will have columns indicating dataset name, species, exposure route and compound.  The lower half of the page will contain a plot which will allow the selected dataset to be quickly plotted (scatter plot) as the user navigates through the table.

### Plots Tab
The plots tab (Figure 6) will provide and accordion control containing plots which depict the various trajectories of chemical amounts/concentrations and exposure quantities provided by backend services. Each section will contain the following elements:
- The plot itself
- A small toolbar (not shown) above the plot for adjusting plot setting (potentially via small modal pop-up dialogs): log/linear axes, plot title, axis titles, axis ranges, etc.
- Optional plot titles and axis titles on the plot itself (not shown)
- A check list on the right side of the plot indicating what categories of items are available for plotting (e.g., available tissues for concentration/amount plots, or available routes for exposure plots)
- A checkable drop-down list (now shown) indicating the scenarios/compound for which predictions have been computed. Note that this list will be hierarchical: scenarios will group compound/schedule pairs.  Users should be able to select with individual compounds for plotting, or all compounds within a scenario.  For the concentrations plot, this list will also contain the available PK data sets (as shown in the PK data sets tab).  Selecting an element in this list will cause it to appear on the corresponding plot.

## Additional User Interface
We will additionally need user interface developed for a login screen, screens for managing the files related to user work (which will be persisted online), and various simple dialogs for performing calculations needed to compute input quantities in table cells.
