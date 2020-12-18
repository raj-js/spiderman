import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Form, FormField } from 'src/core/entities';
import FormController from './FormController';
import FormFieldService from './FormFieldService';
import FormService from './FormService';

@Module({
  imports: [TypeOrmModule.forFeature([Form, FormField])],
  providers: [FormService, FormFieldService],
  controllers: [FormController],
  exports: [TypeOrmModule],
})
export default class FormModule {}
