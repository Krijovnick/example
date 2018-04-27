export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: data.slice(0, 7),
      width: 700,
      height: 400,
      axesSettings: [{ name: 'commits', min: 0 }, { name: 'login', type: 'band' }],
      seriesSettings: [
        {
          valueField: 'contributions',
          argumentField: 'login',
          axisName: 'commits',
          name: 'BarSeries',
        },
      ],
    };
  }
  render() {
    const {
      data: chartData, width, height, seriesSettings, axesSettings,
    } = this.state;
    return (
      <Chart
        data={chartData}
        width={width}
        height={height}
        axesSettings={axesSettings}
        seriesSettings={seriesSettings}
      >

        <ArgumentAxis />
        <ValueAxis name="commits" />

        <BarSeries
          name="BarSeries"
          style={{ stroke: 'none', fill: 'darkblue' }}
        />
      </Chart>
    );
  }
}
