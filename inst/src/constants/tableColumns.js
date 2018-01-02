
const tableColumns = {
  organisms: [
    {
      title: 'Organism Name',
      dataIndex: 'organismName',
      key: 'organismName',
      editable: 'true',
      type: 'select'
    }, {
      title: 'Species',
      dataIndex: 'species',
      key: 'species',
      editable: 'true',
      type: 'select'
    }, {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      editable: 'true',
      type: 'select'
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      editable: 'true',
      type: 'select'
    }, {
      title: 'Height',
      dataIndex: 'height',
      key: 'height',
      editable: 'true',
      type: 'select'
    }, {
      title: 'BW',
      dataIndex: 'bw',
      key: 'bw',
      editable: 'true',
      type: 'select'
    }, {
      title: 'BMI',
      dataIndex: 'bmi',
      key: 'bmi',
      editable: true,
      type: 'select'
    }, {
      title: 'BSA',
      dataIndex: 'bsa',
      key: 'bsa',
      editable: 'true',
      type: 'select'
    }
  ],
  exposure: [
    {
      title: 'Schedule Name',
      dataIndex: 'scheduleName',
      key: 'scheduleName',
      editable: 'true'
    }, {
      title: 'Route',
      dataIndex: 'route',
      key: 'route',
      editable: 'true'
    }, {
      title: 'Activity Site',
      dataIndex: 'site',
      key: 'site',
      editable: 'true'
    }, {
      title: 'Doses/day',
      dataIndex: 'doseDay',
      key: 'doseDay',
      editable: 'true'
    }, {
      title: 'Doses/week',
      dataIndex: 'doseWeek',
      key: 'doseWeek',
      editable: 'true'
    }, {
      title: 'Total Weight',
      dataIndex: 'totalWeight',
      key: 'totalWeight',
      editable: 'true'
    }, {
      title: 'Oral Dose',
      dataIndex: 'oralDose',
      key: 'oralDose',
      editable: 'true'
    }, {
      title: 'IV Dose',
      dataIndex: 'ivDose',
      key: 'ivDose',
      editable: 'true'
    }, {
      title: 'Air Conc.',
      dataIndex: 'airConc',
      key: 'airConc',
      editable: 'true'
    }, {
      title: 'Dermal Dose',
      dataIndex: 'dermalDose',
      key: 'dermalDose',
      editable: 'true'
    }, {
      title: 'Start Time',
      dataIndex: 'startTime',
      key: 'startTime',
      editable: 'true'
    }, {
      title: 'Duration',
      dataIndex: 'duration',
      key: 'duration',
      editable: 'true'
    }, {
      title: 'Interval',
      dataIndex: 'interval',
      key: 'interval',
      editable: 'true'
    }, {
      title: 'Exposed Skin Area',
      dataIndex: 'exposedSkinArea',
      key: 'exposedSkinArea',
      editable: 'true'
    }, {
      title: 'Skin Temp',
      dataIndex: 'skinTemp',
      key: 'skinTemp',
      editable: 'true'
    }, {
      title: 'Air Temp',
      dataIndex: 'airTemp',
      key: 'airTemp',
      editable: 'true'
    }
  ],
  compounds: [
    {
      title: 'Compound Name',
      dataIndex: 'compoundName',
      key: 'compoundName',
      editable: 'true'
    }, {
      title: 'MW',
      dataIndex: 'mw',
      key: 'mw',
      editable: 'true'
    }, {
      title: 'LogP',
      dataIndex: 'logP',
      key: 'logP',
      editable: 'true'
    }, {
      title: 'Ion Class',
      dataIndex: 'ionClass',
      key: 'ionClass',
      editable: 'true'
    }, {
      title: 'More Columns.....',
      dataIndex: 'moreColumns',
      key: 'moreColumns',
      editable: 'true'
    }
  ],
  reactions: [
    {
      title: 'Parent',
      dataIndex: 'parent',
      key: 'parent',
      editable: 'true'
    }, {
      title: 'Metabolite',
      dataIndex: 'metabolite',
      key: 'metabolite',
      editable: 'true'
    }, {
      title: 'Method',
      dataIndex: 'method',
      key: 'method',
      editable: 'true'
    }, {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      editable: 'true'
    }, {
      title: 'Organ',
      dataIndex: 'organ',
      key: 'organ',
      editable: 'true'
    }
  ],
  simulations: [
    {
      title: 'Include',
      dataIndex: 'simInclude',
      key: 'simInclude'
    }, {
      title: 'Scenario Name',
      dataIndex: 'simScenarioName',
      key: 'simScenarioName'
    }, {
      title: 'Organism',
      dataIndex: 'simOrganism',
      key: 'simOrganism'
    }, {
      title: 'Compound',
      dataIndex: 'simCompound',
      key: 'simCompound'
    }, {
      title: 'Exposure',
      dataIndex: 'simExposure',
      key: 'simExposure'
    }
  ]
}


export default tableColumns;
