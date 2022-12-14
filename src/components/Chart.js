import { useQuery } from 'react-query';
import { getCoinChart } from '../api';
import PropTypes from 'prop-types';
import ApexChart from 'react-apexcharts';
import Loader from './Loader';

const Chart = ({ coinId }) => {
  const { isLoading, data } = useQuery([['coin', 'chart']], () =>
    getCoinChart(coinId)
  );

  return isLoading ? (
    <Loader />
  ) : (
    <ApexChart
      type='line'
      series={[
        {
          name: 'sales',
          data: data.map((price) => price.close),
        },
      ]}
      options={{
        chart: {
          height: 400,
          width: 350,
          toolbar: {
            show: false,
          },
        },
      }}
    />
  );
};

Chart.propTypes = {
  coinId: PropTypes.string.isRequired,
};

export default Chart;
