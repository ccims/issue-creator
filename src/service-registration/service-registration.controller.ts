import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { IService } from 'src/schema/service.schema';
import { ServiceRegistrationService } from './service-registration.service';

@Controller('service-registration')
export class ServiceRegistrationController {
  constructor(private serviceRegistration: ServiceRegistrationService) {}

  /**
   * @returns all registered services in the database
   */
  @Get('/all') // ? Warum funktioniert @Get() nicht
  getServices() {
    return this.serviceRegistration.getAllServices();
  }

  /**
   * Receives requests to add a service to be registered to the database
   *
   * @param service to be monitored
   * 
   * @return the added service
   */
  @Post()
  addService(@Body() service: IService) {
    return this.serviceRegistration.addService(service);
  }

  /**
   * Receives requests to delete monitored services by id
   *
   * @param id of a registered Service
   * 
   * @return true if was deleted and false if not
   */
  @Delete('/:id')
  deleteService(@Param('id') id: string) {
    return this.serviceRegistration.deleteService(id);
  }
}
