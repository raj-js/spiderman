import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ormModule } from './core/TypeormModule';
import FormModule from './forms/FormModule';
import { ScriptModule } from './scripts/ScriptModule';

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
