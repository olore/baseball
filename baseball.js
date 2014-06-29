function coverFirstBase(who) {
  d3.select(who)
    .transition()
    .attr("cy", 420)
    .attr("cx", 660)
    .delay(800)
    .duration(1000);
}

function coverSecondBase(who) {
  d3.select(who)
    .transition()
    .attr("cy", 330)
    .attr("cx", 500)
    .delay(800)
    .duration(2000);
}
function backupFirstBase(who) {
  d3.select(who)
    .transition()
    .attr("cy", 380)
    .attr("cx", 720)
    .delay(800)
    .duration(3000);
}

function backupFirstBaseOF(who) {
  d3.select(who)
    .transition()
    .attr("cy", 300)
    .attr("cx", 840)
    .delay(800)
    .duration(4000);
}

function coverThirdBase(who) {
  d3.select(who)
    .transition()
    .attr("cx", 330)
    .attr("cy", 420)
    .delay(800)
    .duration(1000);
}

function throwToFirstBase(delay) {
  d3.select('#ball')
    .transition()
    .delay(delay)
    .duration(1000)
    .attr('cx', 660 )
    .attr('cy', 420 );
}
