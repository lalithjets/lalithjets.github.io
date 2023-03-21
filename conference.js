var chart;
var chart2;

window.onload = function () {
    var chart = new CanvasJS.Chart("conference_chart",
    {
      title:{
        text: "Conference",
        fontFamily: "Impact",
        fontWeight: "normal",
        horizontalAlign: "center",
        verticalAlign: "center"
      },

      legend:{
        verticalAlign: "bottom",
        horizontalAlign: "left"
      },
      data: [
      {
       startAngle: 270,
       indexLabelFontSize: 16,
       indexLabelFontFamily: "Garamond",
       indexLabelFontColor: "black",
       indexLabelLineColor: "darkgrey",
       indexLabelPlacement: "outside",
       type: "doughnut",
       showInLegend: false,
    
       dataPoints: [
       {  y: 2, text:"2", legendText:"MICCAI", indexLabel: "MICCAI: 2" },
       {  y: 2, text: "2", legendText:"ICRA + RA-L*", indexLabel: "ICRA + RA-L*: 2" },
       {  y: 1, text: "1", legendText:"ICRA%", indexLabel: "ICRA: 1" },
       {  y: 1, text: "1", legendText:"WS, ICML", indexLabel: "WS, ICML: 1" },
       {  y: 2, text: "2", legendText:"Others", indexLabel: "Others: 2" }
       ],
     }
     ]
   });

    var chart2 = new CanvasJS.Chart("journal_chart",
    {
      title:{
        text: "Journal",
        fontFamily: "Impact",
        fontWeight: "normal",
        horizontalAlign: "center",
        verticalAlign: "center"
      },

      legend:{
        verticalAlign: "bottom",
        horizontalAlign: "left"
      },
      data: [
      {
       startAngle: 270,
       indexLabelFontSize: 16,
       indexLabelFontFamily: "Garamond",
       indexLabelFontColor: "black",
       indexLabelLineColor: "darkgrey",
       indexLabelPlacement: "outside",
       type: "doughnut",
       showInLegend: false,
    
       dataPoints: [
       {  y: 2, text:"2", legendText:"IJCARS", indexLabel: "IJCARS: 2" },
       {  y: 2, text: "2", legendText:"ICRA + RA-L*", indexLabel: "ICRA + RA-L*: 2" },
       {  y: 1, text: "1", legendText:"Adv. Intell. Syst.", indexLabel: "Adv. Intell. Syst.: 1" },
       {  y: 1, text: "1", legendText:"Sensors", indexLabel: "Sensors: 1" },
       {  y: 3, text: "3", legendText:"Others", indexLabel: "Others: 2" }
       ],
     }
     ]
   });

   chart.render();
   chart2.render();

   // re-render chart for all clicks
   window.addEventListener('click', function () {
    chart.render();
    chart2.render();
   })
  }