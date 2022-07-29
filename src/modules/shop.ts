type Item = {
  shape: GLTFShape;
  position: number;
  url: string;
};

let positions: Transform[] = [
  new Transform({
    position: new Vector3(188.8, 2.5, 262.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  }),

  new Transform({
    position: new Vector3(188.8, 2.2, 265.2),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  }),

  new Transform({
    position: new Vector3(188.8, 2.5, 267.9),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  }),

  new Transform({
    position: new Vector3(171.5, 1.5, 259.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  }),
];

let items: Item[] = [
  {
    shape: new GLTFShape("models/shop/item1.glb"),
    position: 0,
    url: "https://market.beland.io",
  },
  {
    shape: new GLTFShape("models/shop/item1.glb"),
    position: 1,
    url: "https://market.beland.io",
  },
  {
    shape: new GLTFShape("models/shop/item1.glb"),
    position: 2,
    url: "https://market.beland.io",
  },
  {
    shape: new GLTFShape("models/shop/item1.glb"),
    position: 3,
    url: "https://market.beland.io",
  },
];

export function buildShopItems() {
  items.map(buildItem);
}

function buildItem(item: Item) {
  let itemEntity = new Entity();
  itemEntity.addComponent(item.shape);
  itemEntity.addComponent(positions[item.position]);
  itemEntity.addComponent(
    new OnPointerDown((e) => {
      openExternalURL(item.url);
    })
  );
  engine.addEntity(itemEntity);
}
