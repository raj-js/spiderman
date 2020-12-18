import { InjectRepository } from '@nestjs/typeorm';
import { CURServiceBase } from 'src/core/CURLServiceBase';
import { Form, FormField } from 'src/core/entities';
import { Repository } from 'typeorm';
import CreateFormFieldDto from './dto/CreateFormFieldDto';
import SaveFormFieldsDto from './dto/SaveFormFieldsDto';
import FormFieldDto from './dto/FormFieldDto';
import UpdateFormFieldDto from './dto/UpdateFormFieldDto';

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

  async CreateFields(reqDto: SaveFormFieldsDto): Promise<FormFieldDto[]> {
    const formCount = await this.formRepository.count({
      Id: reqDto.FormId,
    });
    if (formCount == 0) return null;

    reqDto.Fields.forEach((v) => (v.FormId = reqDto.FormId));
    return this.CreateOrUpdateMultiple(reqDto.Fields);
  }
}
