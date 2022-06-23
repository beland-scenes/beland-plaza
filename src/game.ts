import { placeDoors } from "./modules/doors";

let lobby = new Entity();
lobby.addComponent(new GLTFShape("models/Lobby.glb"));
lobby.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(lobby);

let adistop_Shop = new Entity();
adistop_Shop.addComponent(new GLTFShape("models/Adistop_Shop.glb"));
adistop_Shop.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(adistop_Shop);
let art = new Entity();
art.addComponent(new GLTFShape("models/Art.glb"));
art.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(art);
let art_01 = new Entity();
art_01.addComponent(new GLTFShape("models/Art_01.glb"));
art_01.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(art_01);
let bearbrick_Shop = new Entity();
bearbrick_Shop.addComponent(new GLTFShape("models/Bearbrick_Shop.glb"));
bearbrick_Shop.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(bearbrick_Shop);
let box_House = new Entity();
box_House.addComponent(new GLTFShape("models/Box_House.glb"));
box_House.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(box_House);
let cicle_Shop = new Entity();
cicle_Shop.addComponent(new GLTFShape("models/Cicle_Shop.glb"));
cicle_Shop.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(cicle_Shop);
let columeHouse = new Entity();
columeHouse.addComponent(new GLTFShape("models/ColumeHouse.glb"));
columeHouse.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(columeHouse);
let earth_House = new Entity();
earth_House.addComponent(new GLTFShape("models/Earth_House.glb"));
earth_House.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(earth_House);
let fly_Camera_Shop = new Entity();
fly_Camera_Shop.addComponent(new GLTFShape("models/Fly_Camera_Shop.glb"));
fly_Camera_Shop.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(fly_Camera_Shop);
let gara = new Entity();
gara.addComponent(new GLTFShape("models/Gara.glb"));
gara.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(gara);
let ground = new Entity();
ground.addComponent(new GLTFShape("models/Ground.glb"));
ground.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(ground);
let lotus_House = new Entity();
lotus_House.addComponent(new GLTFShape("models/Lotus_House.glb"));
lotus_House.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(lotus_House);
let media_Shop = new Entity();
media_Shop.addComponent(new GLTFShape("models/Media_Shop.glb"));
media_Shop.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(media_Shop);
let nike_Shop = new Entity();
nike_Shop.addComponent(new GLTFShape("models/Nike_Shop.glb"));
nike_Shop.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(nike_Shop);
let pentagon_House = new Entity();
pentagon_House.addComponent(new GLTFShape("models/Pentagon_House.glb"));
pentagon_House.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(pentagon_House);
let smart_Shop = new Entity();
smart_Shop.addComponent(new GLTFShape("models/Smart_Shop.glb"));
smart_Shop.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(smart_Shop);
let store = new Entity();
store.addComponent(new GLTFShape("models/Store.glb"));
store.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(store);
let street = new Entity();
street.addComponent(new GLTFShape("models/Street.glb"));
street.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(street);
let tokio_House = new Entity();
tokio_House.addComponent(new GLTFShape("models/Tokio_House.glb"));
tokio_House.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(tokio_House);
let tree_01 = new Entity();
tree_01.addComponent(new GLTFShape("models/Tree_01.glb"));
tree_01.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(tree_01);
let tree_02 = new Entity();
tree_02.addComponent(new GLTFShape("models/Tree_02.glb"));
tree_02.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(tree_02);
let tree_House = new Entity();
tree_House.addComponent(new GLTFShape("models/Tree_House.glb"));
tree_House.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(tree_House);
let tunnel = new Entity();
tunnel.addComponent(new GLTFShape("models/Tunnel.glb"));
tunnel.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(tunnel);
let wipbook_Shop = new Entity();
wipbook_Shop.addComponent(new GLTFShape("models/Wipbook_Shop.glb"));
wipbook_Shop.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(wipbook_Shop);

let collider = new Entity();
collider.addComponent(new GLTFShape("models/Collider.glb"));
collider.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
);
engine.addEntity(collider);

// Animations
const car01 = new Entity("car01");
engine.addEntity(car01);
const transform6 = new Transform({
  position: new Vector3(262, 0, 171),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
car01.addComponentOrReplace(transform6);
const carShape01 = new GLTFShape("models/Car01_Anim.glb");
carShape01.withCollisions = true;
carShape01.isPointerBlocker = true;
carShape01.visible = true;
car01.addComponentOrReplace(carShape01);

function addChandelier(name: string, position: Vector3) {
  const chandelier = new Entity(name);
  engine.addEntity(chandelier);
  const transform7 = new Transform({
    position: position,
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  });
  chandelier.addComponentOrReplace(transform7);
  const chandelierShape01 = new GLTFShape("models/Chandelier01_Anim.glb");
  chandelierShape01.withCollisions = true;
  chandelierShape01.isPointerBlocker = true;
  chandelierShape01.visible = true;
  chandelier.addComponentOrReplace(chandelierShape01);
}

addChandelier("Chandelier_01", new Vector3(262, 8, 172))
addChandelier("Chandelier_02", new Vector3(273, 8, 130))


placeDoors()


function addChandelier2(name: string, position: Vector3) {
  const chandelier = new Entity(name);
  engine.addEntity(chandelier);
  const transform7 = new Transform({
    position: position,
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  });
  chandelier.addComponentOrReplace(transform7);
  const chandelierShape01 = new GLTFShape("models/Chandelier02_Anim.glb");
  chandelierShape01.withCollisions = true;
  chandelierShape01.isPointerBlocker = true;
  chandelierShape01.visible = true;
  chandelier.addComponentOrReplace(chandelierShape01);
}

addChandelier2("Chandelier02_01", new Vector3(262, 10, 250))
