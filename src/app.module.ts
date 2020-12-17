import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ormModule } from './app.dependencies';
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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
