
export const testOCPU = () => {
debugger
  const req = window.ocpu.rpc("getIndusChemFateCompoundData", null, (output) => {
    debugger
    console.log(JSON.parse(output))
  });
}

// export const testCurl = () => {
//   // this.showWaiting("Loading compound data... please wait.");
//
//   // Call R function to retrieve default data
//   var req = ocpu.rpc("getIndusChemFateCompoundData",null,
//       function(output)
//       {
//       //
//       //     this.library = JSON.parse(output);
//       //
//       //
//       // this.datasetsMap["IndusChemFate Compound Data"] = this.library;
//       //
//       // this.hideWaiting();
//
//       }.bind(this)
//   );
//
//   req.fail(function()
//   {
//       this.hideWaiting();
//       alert("R returned an error: " + req.responseText);
//   });
// }
