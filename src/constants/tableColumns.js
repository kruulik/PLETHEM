
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
      key: 'scheduleName'
    }, {
      title: 'Route',
      dataIndex: 'route',
      key: 'route'
    }, {
      title: 'Activity Site',
      dataIndex: 'site',
      key: 'site'
    }, {
      title: 'Doses/day',
      dataIndex: 'doseDay',
      key: 'doseDay'
    }, {
      title: 'Doses/week',
      dataIndex: 'doseWeek',
      key: 'doseWeek'
    }, {
      title: 'Total Weight',
      dataIndex: 'totalWeight',
      key: 'totalWeight'
    }, {
      title: 'Oral Dose',
      dataIndex: 'oralDose',
      key: 'oralDose'
    }, {
      title: 'IV Dose',
      dataIndex: 'ivDose',
      key: 'ivDose'
    }, {
      title: 'Air Conc.',
      dataIndex: 'airConc',
      key: 'airConc'
    }, {
      title: 'Dermal Dose',
      dataIndex: 'dermalDose',
      key: 'dermalDose'
    }, {
      title: 'Start Time',
      dataIndex: 'startTime',
      key: 'startTime'
    }, {
      title: 'Duration',
      dataIndex: 'duration',
      key: 'duration'
    }, {
      title: 'Interval',
      dataIndex: 'interval',
      key: 'interval'
    }, {
      title: 'Exposed Skin Area',
      dataIndex: 'exposedSkinArea',
      key: 'exposedSkinArea'
    }, {
      title: 'Skin Temp',
      dataIndex: 'skinTemp',
      key: 'skinTemp'
    }, {
      title: 'Air Temp',
      dataIndex: 'airTemp',
      key: 'airTemp'
    }
  ],
  compounds: [
    {
      title: 'Compound Name',
      dataIndex: 'compoundName',
      key: 'compoundName'
    }, {
      title: 'MW',
      dataIndex: 'mw',
      key: 'mw'
    }, {
      title: 'LogP',
      dataIndex: 'logP',
      key: 'logP'
    }, {
      title: 'Ion Class',
      dataIndex: 'ionClass',
      key: 'ionClass'
    }, {
      title: 'More Columns.....',
      dataIndex: 'moreColumns',
      key: 'moreColumns'
    }
  ],
  reactions: [
    {
      title: 'Parent',
      dataIndex: 'parent',
      key: 'parent'
    }, {
      title: 'Metabolite',
      dataIndex: 'metabolite',
      key: 'metabolite'
    }, {
      title: 'Method',
      dataIndex: 'method',
      key: 'method'
    }, {
      title: 'Type',
      dataIndex: 'type',
      key: 'type'
    }, {
      title: 'Organ',
      dataIndex: 'organ',
      key: 'organ'
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
