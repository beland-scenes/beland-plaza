let center = new Entity()
center.addComponent(new GLTFShape('models/center.glb'))
center.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 0, 0),
  })
)
engine.addEntity(center)