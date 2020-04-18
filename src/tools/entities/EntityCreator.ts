import Konva from 'konva'
import { CanvasElement } from '@/types/Canvas'
import Shape, { EntityCreatorInterface } from '@/tools/shapes/Shape'
import { CustomEvent, CustomStageEvent } from '@/util/PointerEventMapper'

export default class EntityCreator extends Shape implements EntityCreatorInterface {
  private entity: Konva.Image
  constructor (public temporary: boolean,
               public colour: string,
               public size: number,
               public image: string,
               public owner: string,
               public entityName: string,
               public isVisible: boolean) {
    super()
    this.entity = new Konva.Image()
  }

  create = (canvasElement: CanvasElement, layer: Konva.Layer, event: CustomEvent | CustomStageEvent): void => {
    this.group.attrs.temporary = this.temporary
    this.group.id(canvasElement.id)
    this.createEntityElement(canvasElement, event, layer)
  }

  createEntityElement = (canvasElement: CanvasElement, event: CustomEvent | CustomStageEvent,layer: Konva.Layer, colour?: string, size?: number): void => {
    Konva.Image.fromURL(canvasElement.tool.image, (image: Konva.Image) => {
      image.setAttrs({
        width: canvasElement.tool.width,
        height: canvasElement.tool.height,
        x: this.formatX(canvasElement.data[0], event),
        y: this.formatY(canvasElement.data[1], event)
      })
      this.entity = image
      this.group.add(this.entity)
      layer.add(this.group)
    })
  }
}
