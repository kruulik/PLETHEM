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
  let lines = {
    Time: [],
    Lungs: [],
    Heart: [],
    Brain: [],
    Skin: [],
    Fat: [],
    Muscle: [],
    Bone: [],
    BoneMarrow: [],
    GITract: [],
    Liver: [],
    Kidney: [],
    ArterialBlood: [],
    VenousBlood: []
  }

  concData.forEach(data => {
    // let lines. {};
    // debugger
    for (let d = 0; d < data.length; d++) {
      switch(d) {
        // case 0:
        //   lines.Time.push({x: data[d]});
        //   break;
        case 1:
          lines.Lungs.push({y: data[d], x: data[0]});
          break;
        case 2:
          lines.Heart.push({y: data[d], x: data[0]});
          break;
        case 3:
          lines.Brain.push({y: data[d], x: data[0]});
          break;
        case 4:
          lines.Skin.push({y: data[d], x: data[0]});
          break;
        case 5:
          lines.Fat.push({y: data[d], x: data[0]});
          break;
        case 6:
          lines.Muscle.push({y: data[d], x: data[0]});
          break;
        case 7:
          lines.Bone.push({y: data[d], x: data[0]});
          break;
        case 8:
          lines.BoneMarrow.push({y: data[d], x: data[0]});
          break;
        case 9:
          lines.GITract.push({y: data[d], x: data[0]});
          break;
        case 10:
          lines.Liver.push({y: data[d], x: data[0]});
          break;
        case 11:
          lines.Kidney.push({y: data[d], x: data[0]});
          break;
        case 12:
          lines.ArterialBlood.push({y: data[d], x: data[0]});
          break;
        case 13:
          lines.VenousBlood.push({y: data[d], x: data[0]});
          break;
      }
    }
    });
  return lines;
}
