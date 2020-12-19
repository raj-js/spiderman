import { InjectRepository } from '@nestjs/typeorm';
import { CURServiceBase } from 'src/core/CURLServiceBase';
import { Form, FormField } from 'src/core/entities';
import { Repository } from 'typeorm';
import CreateFormFieldDto from './dto/create-form-field.dto';
import CreateFormFieldsDto from './dto/create-form-fields.dto';
import FormFieldDto from './dto/form-field.dto';
import UpdateFormFieldDto from './dto/update-form-field.dto';
import UpdateFormFieldsDto from './dto/update-form-fields.dto';

export default class FormFieldService extends CURServiceBase<
  number,
  FormField,
  FormFieldDto,
  CreateFormFieldDto,
  UpdateFormFieldDto
> {
  constructor(
    @InjectRepository(FormField)
    protected formFieldRepository: Repository<FormField>,
    @InjectRepository(Form)
    protected formRepository: Repository<Form>,
  ) {
    super(formFieldRepository);
  }

  async GetFields(formId: number): Promise<FormFieldDto[]> {
    let fields = await this.repository.find({
      FormId: formId,
    });

    let dto = {} as FormFieldDto;
    return fields.map((v, _, __) => Object.assign(dto, v));
  }

  async CreateFields(reqDto: CreateFormFieldsDto): Promise<FormFieldDto[]> {
    const formCount = await this.formRepository.count({
      Id: reqDto.FormId,
    });
    if (formCount == 0) return null;

    reqDto.Fields.forEach((v) => (v.FormId = reqDto.FormId));
    return this.CreateOrUpdateMultiple(reqDto.Fields);
  }

  async UpdateFields(reqDto: UpdateFormFieldsDto): Promise<FormFieldDto[]> {
    let entities = reqDto.Fields.map((v) => Object.assign({} as FormField, v));
    entities = await this.repository.save(entities, {
      reload: true,
      transaction: true,
    });
    return entities.map((v) => Object.assign({} as FormFieldDto, v));
  }
}
