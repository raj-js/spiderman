import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CURLServiceBase } from 'src/core/CURLServiceBase';
import { Form } from 'src/core/entities';
import { Repository } from 'typeorm';
import CreateFormDto from './dto/create-form.dto';
import FormDto from './dto/form.dto';
import QueryFormDto from './dto/query-form.dto';
import UpdateFormDto from './dto/update-form.dto';

@Injectable()
export default class FormService extends CURLServiceBase<
  number,
  Form,
  FormDto,
  QueryFormDto,
  CreateFormDto,
  UpdateFormDto
> {
  constructor(
    @InjectRepository(Form)
    protected formRepository: Repository<Form>,
  ) {
    super(formRepository);
  }
}
