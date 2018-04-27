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

        <ArgumentAxisState
          type={'band'}
        />

        <ValueAxisState
          name="commits"
          min={0}
        />

        <BarSeriesState
          name="BarSeries"
          valueField='contributions'
          argumentField='login'
          axisName='commits'
        />

        <LineSeriesState
          name="LineSeries"
          valueField='contributions'
          argumentField='login'
          axisName='commits'
        />

        <ArgumentAxis />
        <ValueAxis name="commits"/>

        <BarSeries
          name="BarSeries"
          style={{ stroke: 'none', fill: 'darkblue' }}
        />
        <LineSeries
          name="LineSeries"
          style={{ stroke: 'none', fill: 'darkblue' }}
        />
      </Chart>
    );
  }
}
