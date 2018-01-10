export const requestCompounds = () => {
  // const req = window.ocpu.rpc("getIndusChemFateCompoundData", null,
  // (output) => {
  //   return JSON.parse(output);
  // });
  // debugger
  return window.ocpu.rpc("getIndusChemFateCompoundData", null);

};
