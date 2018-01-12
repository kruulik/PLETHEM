export const columns = [
    {
      title: 'Parameter',
      dataIndex: 'parameter',
      key: 'parameter',
      editable: false,
      type: 'text',
      width: 170,
    }, {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
      editable: true,
      type: 'numeric',
    }, {
      title: 'Distribution',
      dataIndex: 'distribution',
      key: 'distribution',
      editable: true,
      type: 'select',
      options: [
        'Fixed',
        'Uniform',
        'Normal',
        'Lognormal'
      ]
    }, {
      title: 'Mean',
      dataIndex: 'mean',
      key: 'mean',
      editable: true,
      type: 'numeric',
    }, {
      title: 'Variability',
      dataIndex: 'variability',
      key: 'variability',
      editable: true,
      type: 'numeric',
    }, {
      title: 'Min',
      dataIndex: 'min',
      key: 'min',
      editable: true,
      type: 'numeric',
    }, {
      title: 'Max',
      dataIndex: 'max',
      key: 'max',
      editable: true,
      type: 'numeric',
    }
  ]
