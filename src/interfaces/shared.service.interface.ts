import {  RmqContext, RmqOptions,  } from '@nestjs/microservices';

export interface SharedServiceInterface {
  getRmqOptions(customer: string): RmqOptions;
  acknowledgeMessage(context: RmqContext): void;
}
