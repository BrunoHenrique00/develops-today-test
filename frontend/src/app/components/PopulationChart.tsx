"use client";

import { AxisOptions, Chart } from "react-charts";
import { Population } from "../[countryCode]/page";
import { useMemo } from "react";

interface Props {
  population: Population[];
}

function PopulationChart({ population }: Props) {
  const primaryAxis = useMemo(
    (): AxisOptions<Population> => ({
      getValue: (datum) => new Date(datum.year),
    }),
    [],
  );

  const secondaryAxes = useMemo(
    (): AxisOptions<Population>[] => [
      {
        getValue: (datum) => datum.value,
      },
    ],
    [],
  );
  return (
    <Chart
      options={{
        data: [
          {
            label: "Population",
            data: population,
          },
        ],
        primaryAxis,
        secondaryAxes,
      }}
    />
  );
}

export default PopulationChart;
