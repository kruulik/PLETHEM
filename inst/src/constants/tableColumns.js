const tableColumns = {
  organisms: [
    {
      title: 'Organism Name',
      dataIndex: 'organismName',
      key: 'organismName',
      editable: 'true',
      type: 'text',
      width: 170
    }, {
      title: 'Species',
      dataIndex: 'species',
      key: 'species',
      editable: 'true',
      type: 'select',
      width: 140,
      options: [
        'Human',
        'Mouse',
        'Rat',
        'Guinea PigGuin eaPig',
        'Rabbit',
        'Dog',
        'Mokey'
      ]
    }, {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      editable: 'true',
      type: 'select',
      width: 110,
      options: [ 'Male', 'Female' ]
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      editable: 'true',
      type: 'numeric'
    }
  ],
  exposure: [
    {
      title: 'Schedule Name',
      dataIndex: 'scheduleName',
      key: 'scheduleName',
      editable: 'true',
      type: 'text',
      width: 150,
    }, {
      title: 'Route',
      dataIndex: 'route',
      key: 'route',
      editable: 'true',
      type: 'select',
      options: [
        "Intravenous",
        "Oral",
        "Inhalation",
        "Dermal"
      ]
    }, {
      title: 'Activity Site',
      dataIndex: 'site',
      key: 'site',
      editable: 'true',
      type: 'select',
      options: [
        "Resting",
        "Light Work",
      ]
    }, {
      title: 'Doses/day',
      dataIndex: 'doseDay',
      key: 'doseDay',
      editable: 'true',
      type: 'numeric',
    }, {
      title: 'Doses/week',
      dataIndex: 'doseWeek',
      key: 'doseWeek',
      editable: 'true',
      type: 'numeric',
    }, {
      title: 'Total Weight',
      dataIndex: 'totalWeight',
      key: 'totalWeight',
      editable: 'true',
      type: 'numeric',
    }, {
      title: 'Oral Dose',
      dataIndex: 'oralDose',
      key: 'oralDose',
      editable: 'true',
      type: 'numeric',
    }, {
      title: 'IV Dose',
      dataIndex: 'ivDose',
      key: 'ivDose',
      editable: 'true',
      type: 'numeric',
    }, {
      title: 'Air Conc.',
      dataIndex: 'airConc',
      key: 'airConc',
      editable: 'true',
      type: 'numeric',
    }, {
      title: 'Dermal Dose',
      dataIndex: 'dermalDose',
      key: 'dermalDose',
      editable: 'true',
      type: 'numeric',
    }, {
      title: 'Start Time',
      dataIndex: 'startTime',
      key: 'startTime',
      editable: 'true',
      type: 'numeric',
    }, {
      title: 'Duration',
      dataIndex: 'duration',
      key: 'duration',
      editable: 'true',
      type: 'numeric',
    }, {
      title: 'Interval',
      dataIndex: 'interval',
      key: 'interval',
      editable: 'true',
      type: 'numeric',
    }, {
      title: 'Exposed Skin Area',
      dataIndex: 'exposedSkinArea',
      key: 'exposedSkinArea',
      editable: 'true',
      type: 'numeric',
    }, {
      title: 'Skin Temp',
      dataIndex: 'skinTemp',
      key: 'skinTemp',
      editable: 'true',
      type: 'numeric',
    }, {
      title: 'Air Temp',
      dataIndex: 'airTemp',
      key: 'airTemp',
      editable: 'true',
      type: 'numeric',
    }
  ],
  compounds: [
    {
      title: 'Compound Name',
      dataIndex: 'Compound',
      key: 'Compound',
      editable: 'true',
      type: 'text',
      width: 170, 
    }, {
      title: 'MW',
      dataIndex: 'MW',
      key: 'MW',
      editable: 'true',
      type: 'numeric'
    }, {
      title: 'LogP_7',
      dataIndex: 'LogP_7p4',
      key: 'LogP_7p4',
      editable: 'true',
      type: 'numeric'
    }, {
      title: 'Vapor Pressure',
      dataIndex: 'VaporPressure',
      key: 'VaporPressure',
      editable: 'true',
      type: 'numeric'
    }, {
      title: 'AqSolubility',
      dataIndex: 'AqSolubility',
      key: 'AqSolubility',
      editable: 'true',
      type: 'numeric'
    }, {
      title: 'VMax Liver',
      dataIndex: 'Vmax_Liver_Total',
      key: 'Vmax_Liver_Total',
      editable: 'true',
      type: 'numeric'
    }, {
      title: 'F Ech',
      dataIndex: 'F_ehc',
      key: 'F_ehc',
      editable: 'true',
      type: 'numeric'
    },
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
