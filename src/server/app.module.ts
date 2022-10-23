import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ViewModule } from './view/view.module';

@Module({
    imports: [ConfigModule.forRoot({ isGlobal: true }), ViewModule],
})
export class AppModule {}
