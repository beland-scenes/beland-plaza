import { placeDoors } from "./modules/doors";

let collider = new Entity();
collider.addComponent(new GLTFShape("models/Collider.glb"));
collider.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(collider);


let collider1 = new Entity();
collider1.addComponent(new GLTFShape("models/Collider01.glb"));
collider1.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(collider1)


let ground = new Entity();
ground.addComponent(new GLTFShape("models/Ground.glb"));
ground.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(ground);

let tree01 = new Entity();
tree01.addComponent(new GLTFShape("models/Tree_01.glb"));
tree01.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(tree01);

let tree02 = new Entity();
tree02.addComponent(new GLTFShape("models/Tree_02.glb"));
tree02.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(tree02);

let street = new Entity();
street.addComponent(new GLTFShape("models/Street.glb"));
street.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(street);


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

let pentagonHouse = new Entity();
pentagonHouse.addComponent(new GLTFShape("models/Pentagon_House.glb"));
pentagonHouse.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(pentagonHouse);

let oneColumnHouse = new Entity();
oneColumnHouse.addComponent(new GLTFShape("models/OneColumnHouse.glb"));
oneColumnHouse.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(oneColumnHouse);



let lotusHouse = new Entity();
lotusHouse.addComponent(new GLTFShape("models/Lotus_House.glb"));
lotusHouse.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(lotusHouse);

let adistop = new Entity();
adistop.addComponent(new GLTFShape("models/Adistop.glb"));
adistop.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(adistop);

let smartStore = new Entity();
smartStore.addComponent(new GLTFShape("models/Smart_Store.glb"));
smartStore.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(smartStore);


let flyStore = new Entity();
flyStore.addComponent(new GLTFShape("models/Fly_Camera_Shop.glb"));
flyStore.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(flyStore);

let earthHouse = new Entity();
earthHouse.addComponent(new GLTFShape("models/Earth_House.glb"));
earthHouse.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(earthHouse);


let tokioHouse = new Entity();
tokioHouse.addComponent(new GLTFShape("models/Tokio_House.glb"));
tokioHouse.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(tokioHouse);



let shop = new Entity();
shop.addComponent(new GLTFShape("models/Shop.glb"));
shop.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(shop);



let circleShop = new Entity();
circleShop.addComponent(new GLTFShape("models/Circle_Shop.glb"));
circleShop.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(circleShop);

let artHouse = new Entity();
artHouse.addComponent(new GLTFShape("models/Art_House.glb"));
artHouse.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(artHouse);

let artHouse01 = new Entity();
artHouse01.addComponent(new GLTFShape("models/Art01_House.glb"));
artHouse01.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(artHouse01);

let mediaHouse = new Entity();
mediaHouse.addComponent(new GLTFShape("models/Media_House.glb"));
mediaHouse.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(mediaHouse);


let lobby = new Entity();
lobby.addComponent(new GLTFShape("models/Lobby.glb"));
lobby.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(lobby);

let boxHouse = new Entity();
boxHouse.addComponent(new GLTFShape("models/Box_House.glb"));
boxHouse.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(boxHouse);


let nikeShop = new Entity();
nikeShop.addComponent(new GLTFShape("models/Nike_Shop.glb"));
nikeShop.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(nikeShop);


let bearbrickStore = new Entity();
bearbrickStore.addComponent(new GLTFShape("models/Bearbrick_Store.glb"));
bearbrickStore.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(bearbrickStore);


let tunnel = new Entity();
tunnel.addComponent(new GLTFShape("models/Tunnel.glb"));
tunnel.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(tunnel);



let wipbookShop = new Entity();
wipbookShop.addComponent(new GLTFShape("models/Wipbook_Shop.glb"));
wipbookShop.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(wipbookShop);



placeDoors()
