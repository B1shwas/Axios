import { Card, Divider, Flex, Text } from "@chakra-ui/react";
import Chart from "react-apexcharts";

const ChartBar = () => {
  const options = {
    series: [12, 3, 5],
    labels: ["Present", "Absent", "Late"],
    colors: ["#00BF91", "#E35F55", "#F4C65A"],
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: "70%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total Days",
              fontSize: "14px",
              color: "#333333",
            },
            value: {
              fontSize: "34px",
            },
            style: {
              fontFamily: "Noto Sans",
            },
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 500,
        options: {
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: false,
                },
              },
            },
          },
        },
      },
    ],
    dataLabels: {
      enabled: false,
      style: {
        fontFamily: "Noto Sans",
      },
    },
  };

  const series = [12, 3, 5];

  return (
    <Card p="16px" h="261px">
      <Text fontSize="16px" lineHeight="24px">
        Attendance
      </Text>
      <Divider maxW="361px" my="12px" />
      <Flex gap="48px">
        <Chart
          options={options}
          series={series}
          type="donut"
          w="180px"
          h="180px"
          className="chart"
        />
      </Flex>
    </Card>
  );
};

export default ChartBar;
