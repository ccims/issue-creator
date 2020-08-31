import { Test, TestingModule } from '@nestjs/testing';
import { LogReceiverController } from './log-receiver.controller';
import { LogReceiverService } from './log-receiver.service';
import { getModelToken } from '@nestjs/mongoose';
import { HttpModule} from '@nestjs/common';
import { dbMock } from '../db-mock-data/database-mock';
import { ServiceRegistrationService } from '../service-registration/service-registration.service';
import { ConfigModule } from '@nestjs/config';

describe('LogReceiver Controller', () => {
  let controller: LogReceiverController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, ConfigModule],
      controllers: [LogReceiverController],
      providers: [
        LogReceiverService,
        ServiceRegistrationService,
        {
          provide: getModelToken('logs'),
          useValue: dbMock,
        },
      ],
    }).compile();

    controller = module.get<LogReceiverController>(LogReceiverController);
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
