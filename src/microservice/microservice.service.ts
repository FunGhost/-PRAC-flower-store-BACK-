import { Injectable } from '@nestjs/common';

@Injectable()
export class MicroserviceService {
  handleMessage(message: string) {
    return 'Microservice received message: ' + message;
  }
}
