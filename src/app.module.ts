import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ormModule } from './core/typeorm.module';
import FormModule from './forms/form.module';
import { ScriptModule } from './scripts/script.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: false,
      ignoreEnvVars: true,
      envFilePath: ['./env', './env.development'],
    }),
    ormModule,
    ScriptModule,
    FormModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
