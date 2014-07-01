function hitToPitcher() {

  d3.select('#foo').append("svg:circle")
    .attr("id", "ball")
    .attr("cx", 500)
    .attr("cy", 600)
    .attr("r", 5)
    .style("fill", 'gold')
    .style("stroke", 'black')
    .transition()
    .duration(2000)
    .attr('cy', 540);

  throwToFirstBase(2050);

  coverFirstBase('#firstbaseman');
  coverSecondBase('#shortstop');
  coverThirdBase('#thirdbaseman');

  backupFirstBase('#secondbaseman');
  backupFirstBaseOF('#rf');

  centerFielderRunIn();
  leftFielderRunIn();

  d3.select('#p')
    .transition()
    .attr("cy", 538)
    .delay(800)
    .duration(1000);

  d3.select('#c')
    .transition()
    .attr("cy", 580)
    .delay(1000)
    .duration(1500);

  d3.select('#c')
    .transition()
    .delay(2050)
    .attr('cy', 610)
    .duration(1500);
}


function hitToThirdBase() {

  d3.select('#foo').append("svg:circle")
    .attr("id", "ball")
    .attr("cx", 500)
    .attr("cy", 600)
    .attr("r", 5)
    .style("fill", 'gold')
    .style("stroke", 'black')
    .transition()
    .duration(2000)
    .attr('cx', 400)
    .attr('cy', 440);

  throwToFirstBase(2050);

  coverFirstBase('#firstbaseman');
  coverSecondBase('#secondbaseman');

  backupFirstBaseOF('#rf');

  centerFielderRunIn();
  leftFielderRunIn();

  coverThirdBase('#shortstop');

  d3.select('#p')
    .transition()
    .attr("cx", 420)
    .attr("cy", 470)
    .delay(800)
    .duration(2000);

  d3.select('#thirdbaseman')
    .transition()
    .attr("cx", 400)
    .attr("cy", 440)
    .delay(800)
    .duration(1000);

  d3.select('#c')
    .transition()
    .attr("cy", 580)
    .delay(1000)
    .duration(1500);

  d3.select('#c')
    .transition()
    .delay(2050)
    .attr('cy', 610)
    .duration(1500);
}


