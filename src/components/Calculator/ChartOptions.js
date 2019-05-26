export default {
      animationEnabled: true,
      theme: "light2",
      title: {
        text: "Costs"
      },
      data: [
        {
          type: "pie",
          indexLabel: "{label}: {y} (#percent)%",
          startAngle: 45,
          showInLegend: "true",
          legendText: "{label}",
          indexLabelFontSize: 16,
          indexLabel: "{label} ${y} (#percent)%",
          dataPoints: [
            {y: 0, label: "Personnel"},
            {y: 0, label: "Equipment"},
            {y: 0, label: "Ammunition"},
            {y: 0, label: "Facilities"}
          ]
        },
      ],
      colorSet: "customColorSet",
    }