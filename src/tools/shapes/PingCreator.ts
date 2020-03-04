import Konva from 'konva'
import { CanvasElement } from '@/types/Canvas'
import { Shape } from '@/tools/shapes/Shape'

export default class PingCreator implements Shape {
  private readonly amplitude = 25
  private readonly period = 500
  private ping: Konva.Circle
  constructor (public size?: number,
               public colour?: string) {
    this.ping = new Konva.Circle()
  }

  create = (canvasElement: CanvasElement, layer: Konva.Layer): void => {
    this.ping = this.createPingElement(canvasElement)
    layer.add(this.ping)
    this.runAnimation(this.ping, layer)
  }

  createPingElement = (canvasElement: CanvasElement, colour?: string, size?: number): Konva.Shape & Konva.Circle => {
    return new Konva.Circle({
      x: canvasElement.data[0],
      y: canvasElement.data[1],
      radius: 0,
      stroke: colour || this.colour,
      strokeWidth: size || this.size
    })
  }

  runAnimation = (ping: Konva.Circle, layer: Konva.Layer): void => {
    const animate = new Konva.Animation((frame) => {
      if (frame) {
        ping.radius(this.amplitude * Math.sin((frame.time * Math.PI) / 1000))
        ping.opacity(1.8 - (frame.time * Math.PI) / 1000)
      }
    }, layer)
    animate.start()
    setTimeout(() => {
      ping.destroy()
      animate.stop()
      layer.batchDraw()
    }, this.period)
  }
}