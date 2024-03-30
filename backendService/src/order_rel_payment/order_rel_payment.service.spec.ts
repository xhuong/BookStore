import { Test, TestingModule } from '@nestjs/testing';
import { OrderRelPaymentService } from './order_rel_payment.service';

describe('OrderRelPaymentService', () => {
  let service: OrderRelPaymentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderRelPaymentService],
    }).compile();

    service = module.get<OrderRelPaymentService>(OrderRelPaymentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
