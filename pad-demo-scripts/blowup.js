const decls = Renkon.findDecls(Renkon.scripts.join("\n")).map((d) => d.code);
const delayedTrigger = Events.once(Events.delay(decls, 250));

((decls) => {
  const code = new Map(decls.map((decl, id) => [`${id}`, decl]));
  const windows = decls.map((decl, id) => `${id}`);
  const positions = new Map(decls.map((decl, id) => [`${id}`, {id: `${id}`, x: id * 5, y: id * 5, width: 300, height: 200}]));
  const titles = new Map(decls.map((decl, id) => {
    const state = new Renkon.constructor(0);
    state.setupProgram([decl]);
    const keys = [...state.nodes.keys()];
    const last = keys[keys.length - 1];
    return [`${id}`, {id: `${id}`, state: false, title: last}];
  }));
  const windowTypes = new Map(decls.map((decl, id) => [`${id}`, "code"]));
  const padTitle = "Blown up";

  const loaded = {
    code,
    windows,
    positions: {map: positions},
    titles: {map: titles},
    windowTypes: {map: windowTypes},
    padTitle
  }

  Events.send(loadFromProgram, loaded);
})(delayedTrigger);


