const svg = document.getElementById("svg");
const center = document.getElementById("center");
const branches = document.querySelectorAll(".branch");

function centerOf(el) {
  const r = el.getBoundingClientRect();
  return {
    x: r.left + r.width / 2,
    y: r.top + r.height / 2,
  };
}

function drawLines() {
  svg.innerHTML = "";
  svg.setAttribute("width", window.innerWidth);
  svg.setAttribute("height", window.innerHeight);

  const c = centerOf(center);

  branches.forEach((b) => {
    const p = centerOf(b);

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

    line.setAttribute("x1", c.x);
    line.setAttribute("y1", c.y);
    line.setAttribute("x2", p.x);
    line.setAttribute("y2", p.y);
    line.setAttribute("stroke", "#333");
    line.setAttribute("stroke-width", "3");

    svg.appendChild(line);
  });
}

window.addEventListener("load", drawLines);
window.addEventListener("resize", drawLines);
