const rotation = Events.timer(50) / 100;

const _positionsCss = ((positions, zIndex, r) => {
    let style = document.body.querySelector("#positions-css");
    if (!style) {
        style = document.createElement("style");
        style.id = "positions-css";
        document.body.appendChild(style);
    }

    const css = [...positions.map].map(([id, rect]) => `
[id="${id}-win"] {
    transform: translate(${rect.x}px, ${rect.y}px) rotate(${r}deg);
    width: ${rect.width}px;
    height: ${rect.height}px;
    z-index: ${zIndex.map.get(id)};
}`.trim()).join("\n");
    style.textContent = css;
})(positions, zIndex, rotation);
