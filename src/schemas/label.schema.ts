import { Document } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export type EditLabelDto = {
  name: string
  color: string
}

export type LabelDocument = Label & Document

@Schema()
export class Label {
  @Prop()
  name: string

  @Prop()
  createdAt: string

  @Prop()
  color: string
}

export const LabelSchema = SchemaFactory.createForClass(Label)
