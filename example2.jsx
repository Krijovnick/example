export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: data.slice(0, 7),
      width: 700,
      height: 400,
    };
  }
  render() {
    const {
      data: chartData, width, height,
    } = this.state;
    return (
      <Chart
        data={chartData}
        width={width}
        height={height}
      >

        <ArgumentAxis
          type={'band'}
        />
        <ValueAxis
          name="commits"
          min={0}
        />

        <BarSeries
          name="BarSeries"
          valueField='contributions'
          argumentField='login'
          axisName='commits'
          style={{ stroke: 'none', fill: 'darkblue' }}
        />
        <LineSeries
          name="LineSeries"
          valueField='contributions'
          argumentField='login'
          axisName='commits'
          style={{ stroke: 'none', fill: 'darkblue' }}
        />

        <ProcessingData/>
      </Chart>
    );
  }
}
