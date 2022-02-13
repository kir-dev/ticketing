import { Module } from '@nestjs/common'
import { LabelService } from './label.service'
import { LabelController } from './label.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { Label, LabelSchema } from '../schemas/label.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: Label.name, schema: LabelSchema }])],
  providers: [LabelService],
  controllers: [LabelController]
})
export class LabelModule {}
