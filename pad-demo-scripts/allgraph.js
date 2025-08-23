const graph = ((positions, padView, analyzed, hoveredB, showGraph) => {
  if (hoveredB === null) {return [];}
  if (!showGraph) {return [];}

  const outEdges = [];

  for (const [id, edges] of analyzed) {
    const outE = edges.edgesOut.map((edge) => {
      const ind = edges.exports.indexOf(edge.id);
      let p1 = positions.map.get(id);
      p1 = {x: p1.x + p1.width, y: p1.y};
      p1 = {x: p1.x, y: p1.y + ind * 20 + 10};
      p1 = {x: (p1.x + padView.x) * padView.scale, y: (p1.y + padView.y) * padView.scale};
      let p2 = positions.map.get(edge.dest);
      p2 = {x: p2.x, y: p2.y + 10};
      p2 = {x: (p2.x + padView.x) * padView.scale, y: (p2.y + padView.y) * padView.scale};
      return line(p1, p2, "#88d", edge.id);
    });
    outEdges.push(...outE);
  }

  return html`<svg viewBox="0 0 ${window.innerWidth} ${window.innerHeight}" xmlns="http://www.w3.org/2000/svg">${outEdges}</svg>`;
})(positions, padView, analyzed, hoveredB, showGraph);
