import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { EditLabelDto, Label, LabelDocument } from '../schemas/label.schema'

@Injectable()
export class LabelService {
  constructor(@InjectModel(Label.name) private labelModel: Model<LabelDocument>) {}
  async findOne(id: string): Promise<Label> {
    return this.labelModel.findById(id).exec()
  }

  async findAll(): Promise<Label[]> {
    return this.labelModel.find().exec()
  }

  async create(labelDto: EditLabelDto): Promise<Label> {
    const label = new this.labelModel({
      ...labelDto,
      createdAt: Date.now()
    })
    return label.save()
  }

  async edit({ name, color }: EditLabelDto, id: string): Promise<Label> {
    const label = await this.labelModel.findById(id).exec()
    label.set('name', name)
    label.set('color', color)
    return label.save()
  }

  async delete(id: string): Promise<Label> {
    return this.labelModel.findByIdAndDelete(id).exec()
  }
}
