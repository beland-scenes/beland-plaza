import * as utils from '@beland/ecs-scene-utils'
import { sceneMessageBus } from './serverHandler'

let open = new AudioClip('sounds/door-open.mp3')
let close = new AudioClip('sounds/door-close.mp3')
open.volume = 1
open.loop = false
close.volume = 1
close.loop = false

/// Reusable class for all platforms
export class Door extends Entity {
  animationOpen: AnimationState
  animationClose: AnimationState
  isOpen: boolean = false
  isPlayerIn: boolean = false

  constructor(
    model: GLTFShape,
    doorPos: TranformConstructorArgs,
    triggerPos: TranformConstructorArgs,
    triggerScale: Vector3,
    animationOpen: string,
    animationClose: string,
    messageBusHandle: string,
    withTrigger: boolean = true
  ) {
    super()
    engine.addEntity(this)

    this.addComponent(model)
    this.addComponent(new Transform(doorPos))

    this.addComponent(new Animator())

    this.animationOpen = new AnimationState(animationOpen, { looping: false })
    this.getComponent(Animator).addClip(this.animationOpen)

    this.animationClose = new AnimationState(animationClose, {
      looping: false,
    })
    this.getComponent(Animator).addClip(this.animationClose)

    this.addComponent(new AudioSource(open))

    if (withTrigger) {
      const triggerEntity = new Entity()
      triggerEntity.addComponent(new Transform(triggerPos))

      let triggerBox = new utils.TriggerBoxShape(triggerScale, Vector3.Zero())

      triggerEntity.addComponent(
        new utils.TriggerComponent(
          triggerBox, //shape
          {
            onCameraEnter: () => {
              log('open door')
              this.isPlayerIn = true
              sceneMessageBus.emit(messageBusHandle, { open: true })
            },
            onCameraExit: () => {
              log('close door')
              this.isPlayerIn = false
              sceneMessageBus.emit(messageBusHandle, { open: false })
            },
            //enableDebug: true,
          }
        )
      )
      engine.addEntity(triggerEntity)
    }

    this.animationOpen.stop()
  }

  public open(): void {
    if (this.isOpen) return
    this.animationClose.stop()
    this.animationOpen.stop()

    this.animationOpen.play()

    this.isOpen = true

    const source = new AudioSource(open)
    this.addComponentOrReplace(source)
    source.playing = true
  }

  public close(): void {
    if (!this.isOpen || this.isPlayerIn) return
    this.animationOpen.stop()
    this.animationClose.stop()

    this.animationClose.play()
    this.isOpen = false

    const source = new AudioSource(close)
    this.addComponentOrReplace(source)
    source.playing = true
  }
}

export function placeDoors() {
  let main_door1 = new Door(
    new GLTFShape('models/Media_Door.glb'),
    { rotation: Quaternion.Euler(0, 180, 0) },
    { position: new Vector3(262, 0, 220) },
    new Vector3(16, 8, 8),
    'mo',
    'dong',
    'mainDoor'
  )

  sceneMessageBus.on('mainDoor', (e) => {
    if (e.open) {
      main_door1.open()
    } else {
      main_door1.close()
    }
  })
}