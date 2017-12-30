# README #

PLETHEM-HTTK

R package which implements the PLETHEM modeling platform.

Setup

* Install the opencpu R package
* Load the plethembase.Rproj R project
* Rebuild/reload the package
* From R command prompt: library(opencpu), then ocpu_start_server()
* Open a web browser and navigate to: http://localhost:5656/ocpu/library/plethembase

Notes
* Uses a modified version of m-react-splitters.  See code in the m-react-splitters folder under the node_modules directory.
* Must be built using npm version 5.1.0.  Later versions break the build process.
