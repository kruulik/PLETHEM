export const generateConcPlotData = (concData = []) => {

  // 0 -> Time
  // 1 -> Lungs
  // 2 -> Heart
  // 3 -> Brain
  // 4 -> Skin
  // 5 -> Fat
  // 6 -> Muscle
  // 7 -> Bone
  // 8 -> Bone Marrow
  // 9 -> GI Tract
  // 10 -> Liver
  // 11 -> Kidney
  // 12 -> Arterial Blood
  // 13 -> Venous Blood

  const rData = concData.map(data => {
    let tempObj = {};
    for (let d = 0; d < data.length; d++) {
      switch(d) {
        case 0:
          tempObj['Time'] = {x: data[d], y: data[0]};
          break;
        case 1:
          tempObj['Lungs'] = {x: data[d], y: data[0]};
          break;
        case 2:
          tempObj['Heart'] = {x: data[d], y: data[0]};
          break;
        case 3:
          tempObj['Brain'] = {x: data[d], y: data[0]};
          break;
        case 4:
          tempObj['Skin'] = {x: data[d], y: data[0]};
          break;
        case 5:
          tempObj['Fat'] = {x: data[d], y: data[0]};
          break;
        case 6:
          tempObj['Muscle'] = {x: data[d], y: data[0]};
          break;
        case 7:
          tempObj['Bone'] = {x: data[d], y: data[0]};
          break;
        case 8:
          tempObj['Bone Marrow'] = {x: data[d], y: data[0]};
          break;
        case 9:
          tempObj['GI Tract'] = {x: data[d], y: data[0]};
          break;
        case 10:
          tempObj['Liver'] = {x: data[d], y: data[0]};
          break;
        case 11:
          tempObj['Kidney'] = {x: data[d], y: data[0]};
          break;
        case 12:
          tempObj['Arterial Blood'] = {x: data[d], y: data[0]};
          break;
        case 13:
          tempObj['Venous Blood'] = {x: data[d], y: data[0]};
          break;
      }
    }
    return tempObj;
  });
  return rData;
}
