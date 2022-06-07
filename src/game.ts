let gara = new Entity();
gara.addComponent(new GLTFShape("models/gara.glb"));
gara.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(gara);

let treeHouse = new Entity();
treeHouse.addComponent(new GLTFShape("models/Tree_House.glb"));
treeHouse.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(treeHouse);

let tree = new Entity();
tree.addComponent(new GLTFShape("models/Tree.glb"));
tree.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(tree);

let street = new Entity();
street.addComponent(new GLTFShape("models/Street.glb"));
street.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(street);

let pentagonHouse = new Entity();
pentagonHouse.addComponent(new GLTFShape("models/Pentagon_House.glb"));
pentagonHouse.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(pentagonHouse);

let bookStore = new Entity();
bookStore.addComponent(new GLTFShape("models/BookStore.glb"));
bookStore.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(bookStore);

let oneColumnHouse = new Entity();
oneColumnHouse.addComponent(new GLTFShape("models/OneColumnHouse.glb"));
oneColumnHouse.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(oneColumnHouse);

let ground = new Entity();
ground.addComponent(new GLTFShape("models/Ground.glb"));
ground.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(ground);

let lotusHouse = new Entity();
lotusHouse.addComponent(new GLTFShape("models/Lotus_House.glb"));
lotusHouse.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(lotusHouse);

let adidas = new Entity();
adidas.addComponent(new GLTFShape("models/Adidas.glb"));
adidas.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(adidas);

let smartStore = new Entity();
smartStore.addComponent(new GLTFShape("models/Smart_Store.glb"));
smartStore.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(smartStore);
