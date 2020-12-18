import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ApiResponse,
  Success,
  SuccessOrFailed,
  SuccessOrNotFound,
} from 'src/core/infrastructure/ApiResponse';
import { Paged } from 'src/core/infrastructure/Paging';
import { Like, Equal } from 'typeorm';
import CreateFormDto from './dto/CreateFormDto';
import CreateFormFieldsDto from './dto/CreateFormFieldsDto';
import FormDto from './dto/FormDto';
import FormFieldDto from './dto/FormFieldDto';
import QueryFormDto from './dto/QueryFormDto';
import UpdateFormDto from './dto/UpdateFormDto';
import UpdateFormFieldsDto from './dto/UpdateFormFieldsDto';
import FormFieldService from './FormFieldService';
import FormService from './FormService';

@ApiTags('表单')
@Controller('form')
export default class FormController {
  constructor(
    private readonly formService: FormService,
    private readonly formFieldService: FormFieldService,
  ) {}

  @ApiOperation({ summary: '创建表单' })
  @ApiOkResponse({ type: ApiResponse })
  @Post()
  async Create(@Body() reqDto: CreateFormDto): Promise<ApiResponse<FormDto>> {
    const form = await this.formService.Create(reqDto);
    return Success(form);
  }

  @ApiOperation({ summary: '删除表单' })
  @Delete(':id')
  async Delete(@Param('id') id: number): Promise<ApiResponse<boolean>> {
    return SuccessOrFailed({
      arg: await this.formService.Delete(id, true),
    });
  }

  @ApiOperation({ summary: '修改表单' })
  @Put()
  async Update(@Body() reqDto: UpdateFormDto): Promise<ApiResponse<boolean>> {
    return SuccessOrFailed({
      arg: await this.formService.Update(reqDto),
    });
  }

  @ApiOperation({ summary: '通过ID获取表单' })
  @ApiOkResponse({ type: ApiResponse })
  @Get(':id')
  async Get(@Param('id') id: number): Promise<ApiResponse<FormDto>> {
    const form = await this.formService.Get(id);
    return SuccessOrNotFound(form);
  }

  @ApiOperation({ summary: '分页查询表单数据' })
  @Get()
  async Paging(
    @Query() reqDto: QueryFormDto,
  ): Promise<ApiResponse<Paged<FormDto>>> {
    if (reqDto.Take < 0 || reqDto.Take > 1000) reqDto.Take = 10;
    if (reqDto.Name) reqDto.Where['Name'] = Like(`%${reqDto.Name}%`);
    if (reqDto.IsDeleted) reqDto.Where['IsDeleted'] = Equal(reqDto.IsDeleted);

    return Success(await this.formService.Paging(reqDto));
  }

  @ApiOperation({ summary: '获取表单字段' })
  @Get('fields/:id')
  async GetFormFields(
    @Param('id') id: number,
  ): Promise<ApiResponse<FormFieldDto[]>> {
    return Success(await this.formFieldService.GetFields(id));
  }

  @ApiOperation({ summary: '创建表单字段' })
  @Post('fields')
  async CreateFormFields(
    @Body() reqDto: CreateFormFieldsDto,
  ): Promise<ApiResponse<FormFieldDto[]>> {
    return SuccessOrNotFound(await this.formFieldService.CreateFields(reqDto));
  }

  @ApiOperation({ summary: '更新表单字段' })
  @Put('fields')
  async UpdateFormFields(
    @Body() reqDto: UpdateFormFieldsDto,
  ): Promise<ApiResponse<FormFieldDto[]>> {
    return SuccessOrNotFound(await this.formFieldService.UpdateFields(reqDto));
  }
}
