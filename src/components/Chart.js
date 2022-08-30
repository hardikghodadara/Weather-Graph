import React from "react";
import BarChart from "react-bar-chart";

export default function Chart({ data, yLabel }) {
    return (
        <BarChart
            data={data}
            ylabel={"Rain in " + yLabel}
            width={500}
            height={500}
            margin={{
                top: 20,
                right: 20,
                bottom: 30,
                left: 40
            }}
        />
    );
}
