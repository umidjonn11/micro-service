import { Injectable } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  @MessagePattern({cmd:"orders"})
  getAllOrders(){
    return [
      {
        id:1,
        userId:2,
        product:"apple",
        price:100
      }
    ]
  }
}
