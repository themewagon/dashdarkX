import ReactECharts from 'echarts-for-react';
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import RateChip from "components/chips/RateChip";
import DateSelect from "./DateSelect";

const StackedBarChart = () => {
    const data = {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
          {
            name: 'Current clients',
            data: [14000, 30000, 38000, 36000, 16000, 24000, 10000, 44000, 12000, 6000, 12000, 24000]
          },
          {
            name: 'Subscribers',
            data: [12000, 20000, 26000, 12000, 10000, 32000, 6000, 8000, 12000, 18000, 16000, 6000]
          },
          {
            name: 'New customers',
            data: [12000, 26000, 24000, 24000, 8000, 14000, 0, 38000, 14000, 30000, 16000, 28000]
          }
        ]
    };

    const options = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            top: 40,
            bottom: 70,
            left: 50,
            right: 0,
          },
        //   legend: {
        //     data: data.series.map((serie) => serie.name)
        //   },
          xAxis: {
            type: 'category',
            data: data.categories,
            axisTick: {
                show: false,
              },
              axisLine: {
                show: false,
              },
              axisLabel: {
                color: '#AEB9E1',
                fontSize: '12px',
                margin: 24,
                fontFamily: 'Questrial'
              },
          },
          yAxis: {
            type: 'value',
            axisLabel: {
                color: '#AEB9E1',
                fontSize: '12px',
                fontFamily: 'Questrial',
                formatter: (value: number) => {
                  if (value === 0) {
                    return '0K';
                  } else if (value === 20000) {
                    return '20K';
                  } else if (value === 40000) {
                    return '40K';
                  } else if (value === 60000) {
                    return '60K';
                  } else if (value === 80000) {
                    return '80K';
                  } else if (value === 100000) {
                    return '100K';
                  } else {
                    return value; // Return original value for other ticks
                  }
                }
            },
            splitLine: {
                show: false,
              },
            interval: 20000, // Set the interval to 20k
            max: 100000 // Set the maximum value to 100k
          },
          series: data.series.map((serie, index) => ({
            name: serie.name,
            type: 'bar',
            stack: 'total',
            barWidth: 8,
            label: {
              show: false
            },
            emphasis: {
              focus: 'series'
            },
            itemStyle: {
                color: ['#CB3CFF', '#0E43FB', '#00C2FF'][index]
            },
            data: serie.data
        }))
    };
      
      
    return (
        <Box component={Paper} sx={{height: 500}}>
            <Typography variant="subtitle1" color="text.secondary">Revenue by customer type</Typography>
            <Stack justifyContent="space-between" mt={1}>
                <Stack alignItems="center" gap={0.8}>
                    <Typography variant="h4" sx={{ fontWeight: 600, letterSpacing: 1 }}>
                        $240.8K
                    </Typography>
                    <RateChip rate={"14.8%"} isPositive={true} />
                </Stack>

                <Stack spacing={2}>
                    <Stack spacing={0.5} alignItems="center">
                        <Box sx={{height: 8, width: 8, bgcolor: 'primary.main', borderRadius: 1}}></Box>
                        <Typography variant='body2' color="text.secondary" sx={{fontFamily: 'Work Sans'}}>Current clients</Typography>
                    </Stack>
                    <Stack spacing={0.5} alignItems="center">
                        <Box sx={{height: 8, width: 8, bgcolor: 'info.light', borderRadius: 1}}></Box>
                        <Typography variant='body2' color="text.secondary" sx={{fontFamily: 'Work Sans'}}>Subscribers</Typography>
                    </Stack>
                    <Stack spacing={0.5} alignItems="center">
                        <Box sx={{height: 8, width: 8, bgcolor: 'secondary.light', borderRadius: 1}}></Box>
                        <Typography variant='body2' color="text.secondary" sx={{fontFamily: 'Work Sans'}}>New customers</Typography>
                    </Stack>
                    <DateSelect/>
                </Stack>
            </Stack>

            <ReactECharts option={options} style={{height: '400px'}} />
        </Box>
    );
}

export default StackedBarChart;