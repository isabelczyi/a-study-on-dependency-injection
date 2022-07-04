import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  computer(a: number, b: number) {
    this.powerService.supplyPower(10); //just an example to make use of the service in some way
    return a + b;
  }
}
