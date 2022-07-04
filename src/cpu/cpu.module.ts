import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerModule } from 'src/power/power.module';

@Module({
  imports: [PowerModule], //step 2 add in the power module in the cpu module
  providers: [CpuService],
  exports: [CpuService],
})
export class CpuModule {}
