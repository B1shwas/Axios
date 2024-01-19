import { Box } from "@chakra-ui/react";
import ReactApexChart from "react-apexcharts";

const AreaChart = () => {
  const options = {
    chart: {
      id: "spline-area-chart",
    },
    xaxis: {
      categories: [
        "English",
        "Nepali",
        "Byakaran",
        "Math",
        "Social Studies",
        "Science",
        "HPE",
        "Geography",
        "History",
        "Health",
        "Sanskrit",
        "Grammar",
      ],
    },
    fill: {
      opacity: 0.5,
    },
    markers: {
      size: 5,
    },
    dataLabels: {
      enabled: false,
    },
  };

  const series = [
    {
      name: "First Term",
      data: [56, 70, 87, 76, 90, 65, 90, 70, 67, 87, 54, 87],
      color: "#29ABE2",
    },
    {
      name: "Second Term",
      data: [76, 87, 76, 90, 70, 73, 78, 76, 79, 78, 90, 60],
      color: "#7E8AC7",
    },
  ];
  return (
    <Box>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height="397px"
      />
    </Box>
  );
};

export default AreaChart;
