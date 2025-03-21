import { Module } from '@nestjs/common';
import { ExampleModule } from './example/example.module';
import { PromotionModule } from './merchant/promotion/promotion.module';

@Module({
  imports: [ExampleModule, PromotionModule],
})
export class AppModule {}
