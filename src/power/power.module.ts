import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService],
  // by default the PowerService is private so we need to export it.
  exports: [PowerService],
  //step 1: this line above means we want to explicitly make this class available to other modules within our project
})
export class PowerModule {}
