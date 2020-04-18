import Vue from 'vue'
import { Field, Entity } from '@/types/Games/Index'

export default class Games extends Vue {
  resolve = (path: string, gameData: any) => path.split('.').reduce((prev: any, curr: any) => prev ? prev[curr] : '', gameData || self)

  findField = (fields: Field[], clickedFieldId: string): Field | undefined => fields.find((field: Field): boolean => field.id === clickedFieldId)

  findEntity = (entities: Entity[], selectedEntityId: number): Entity | undefined => entities.find((entity: Entity): boolean => entity.value === selectedEntityId)

  onTextFieldChangeHandler = (entities: Entity[], selectedEntityId: number, field: Field, value: string): void => {
    const foundEntity = this.findEntity(entities, selectedEntityId)
    if (foundEntity) {
      foundEntity.data = { ...foundEntity.data, [field.id]: value }
      field.value = value
    }
  }

  updateField = (fields: Field[], clickedEntity: Entity, fieldId: string, property: string, isRate = false) => {
    const propertyValue = this.resolve(property, clickedEntity.data)
    const updatedFieldValue = clickedEntity.data?.[fieldId] || ''
    const foundField = this.findField(fields, fieldId)
    if (foundField) {
      if (updatedFieldValue) {
        foundField.value = updatedFieldValue
      } else {
        if (propertyValue) {
          foundField.value = isRate ? String(Math.floor((60 / propertyValue) * 10) / 10) : propertyValue
        } else {
          foundField.value = ''
        }
        clickedEntity.data = { ...clickedEntity.data, [fieldId]: foundField.value }
      }
    }
  }
}
