import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Form, FormField } from 'src/core/entities';
import FormController from './form.controller';
import FormFieldService from './form-field.service';
import FormService from './form.service';

@Module({
  imports: [TypeOrmModule.forFeature([Form, FormField])],
  providers: [FormService, FormFieldService],
  controllers: [FormController],
  exports: [TypeOrmModule],
})
export default class FormModule {}
