export const generateConcPlotData = (concData = []) => {

  let lines = {
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
    for (let d = 0; d < data.length; d++) {
      switch(d) {
        case 1:
          lines.Lungs.push({y: data[d], x: data[0], color: 'red', title: 'Lungs'});
          break;
        case 2:
          lines.Heart.push({y: data[d], x: data[0], color: 'orange', title: 'Heart'});
          break;
        case 3:
          lines.Brain.push({y: data[d], x: data[0], color: 'yellow', title: 'Brain'});
          break;
        case 4:
          lines.Skin.push({y: data[d], x: data[0], color: 'green', title: 'Skin'});
          break;
        case 5:
          lines.Fat.push({y: data[d], x: data[0], color: 'blue', title: 'Fat'});
          break;
        case 6:
          lines.Muscle.push({y: data[d], x: data[0], color: 'violet', title: 'Muscle'});
          break;
        case 7:
          lines.Bone.push({y: data[d], x: data[0], color: 'cyan', title: 'Bone'});
          break;
        case 8:
          lines.BoneMarrow.push({y: data[d], x: data[0], color: 'magenta', title: 'Bone Marrow'});
          break;
        case 9:
          lines.GITract.push({y: data[d], x: data[0], color: 'purple', title: 'GI Tract'});
          break;
        case 10:
          lines.Liver.push({y: data[d], x: data[0], color: 'teal', title: 'Liver'});
          break;
        case 11:
          lines.Kidney.push({y: data[d], x: data[0], color: 'brown', title: 'Kidney'});
          break;
        case 12:
          lines.ArterialBlood.push({y: data[d], x: data[0], color: 'lightgray', title: 'Arterial Blood'});
          break;
        case 13:
          lines.VenousBlood.push({y: data[d], x: data[0], color: 'darkred', title: 'Venous Blood'});
          break;
      }
    }
    });
  return {rows: Object.keys(lines), data: lines};
}
