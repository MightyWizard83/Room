import { EntityInterface, Tracker } from '@/tools/Tool'
import Konva from 'konva'
import { CanvasElement } from '@/types/Canvas'
import uuid from 'uuid'
import throttle from 'lodash.throttle'
import EntityCreator from '@/tools/entities/EntityCreator'
import { CustomEvent, CustomStageEvent } from '@/util/PointerEventMapper'

export default class Entity implements EntityInterface {
  private entityCreator: EntityCreator
  constructor (public readonly name: string,
               public size: number,
               public colour: string,
               public temporary: boolean,
               public image: string,
               public owner: string,
               public entityName: string,
               public isVisible: boolean,
               public width: number,
               public height: number) {
    this.entityCreator = new EntityCreator(
      this.temporary,
      this.colour,
      this.size,
      this.image,
      this.owner,
      this.entityName,
      this.isVisible,
    )
  }

  // eslint-disable-next-line
  mouseDownAction = (_event: CustomEvent, _canvasElement: CanvasElement, _layer: Konva.Layer, _socket: WebSocket): void => {
    //
  }

  // eslint-disable-next-line
  mouseMoveAction = (_event: CustomEvent, _canvasElement: CanvasElement, _layer: Konva.Layer, _socket: WebSocket): void => {
    //
  }

  mouseUpAction = (event: CustomEvent, canvasElement: CanvasElement, layer: Konva.Layer, socket: WebSocket): void => {
    canvasElement.data = [event.globalOffset.x, event.globalOffset.y]
    canvasElement.id = uuid()
    canvasElement.hasMoved = true
    canvasElement.tracker = Tracker.ADDITION
    canvasElement.tool = {
      name: this.name,
      size: this.size,
      colour: this.colour,
      temporary: this.temporary,
      owner: this.owner,
      entityName: this.entityName,
      isVisible: this.isVisible,
      width: this.width,
      height: this.height
    }

    // this.entityCreator = new EntityCreator(
    //   this.temporary,
    //   this.size,
    //   this.colour
    // )
    // this.freedrawCreator.create(canvasElement, layer, event)
    // canvasElement.position = this.freedrawCreator.getGroup().position()
    
    
    // if (!canvasElement.hasMoved) {
    //   this.freedrawCreator.destroy(canvasElement, layer)
    // } else {
    //   if (canvasElement.tool.temporary) {
    //     this.freedrawCreator.runTemporaryAnimation(this.freedrawCreator.getGroup(), layer)
    //   }
    //   this.sendToWebSocket(canvasElement, socket)
    // }
  }

  renderCanvas = (canvasElement: CanvasElement, layer: Konva.Layer, event: CustomEvent | CustomStageEvent): void => {
    // if (canvasElement.hasMoved) {
    //   this.freedrawCreator = new EntityCreator(
    //     canvasElement.tool.temporary || this.temporary,
    //     canvasElement.tool.size || this.size,
    //     canvasElement.tool.colour || this.colour
    //   )
    //   this.freedrawCreator.create(canvasElement, layer, event)
    //   layer.batchDraw()
    //   if (canvasElement.tool.temporary) {
    //     this.freedrawCreator.runTemporaryAnimation(this.freedrawCreator.getGroup(), layer)
    //   }
    // }
  }

  sendToWebSocket = (canvasElement: CanvasElement, socket: WebSocket) => {
    const data: CanvasElement = {
      jti: 'SAM',
      id: canvasElement.id,
      layerId: canvasElement.layerId,
      tool: {
        name: this.name,
        colour: this.colour,
        size: this.size,
        temporary: this.temporary
      },
      data: canvasElement.data,
      tracker: Tracker.ADDITION,
      change: false,
      hasMoved: canvasElement.hasMoved,
      position: canvasElement.position
    }
    socket.send(JSON.stringify(data))
  }
}
