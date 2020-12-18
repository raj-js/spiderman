import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CURLServiceBase } from 'src/core/CURLServiceBase';
import { Form } from 'src/core/entities';
import { Repository } from 'typeorm';
import CreateFormDto from './dto/CreateFormDto';
import FormDto from './dto/FormDto';
import QueryFormDto from './dto/QueryFormDto';
import UpdateFormDto from './dto/UpdateFormDto';

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
