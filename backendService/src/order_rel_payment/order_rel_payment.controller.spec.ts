import { Test, TestingModule } from '@nestjs/testing';
import { OrderRelPaymentController } from './order_rel_payment.controller';
import { OrderRelPaymentService } from './order_rel_payment.service';

describe('OrderRelPaymentController', () => {
  let controller: OrderRelPaymentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderRelPaymentController],
      providers: [OrderRelPaymentService],
    }).compile();

    controller = module.get<OrderRelPaymentController>(OrderRelPaymentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
