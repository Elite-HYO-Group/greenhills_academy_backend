import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { EventsService } from './events.service';
import { ApiTags, ApiParam, ApiBody } from '@nestjs/swagger';
import { CreateEventDto } from './dto/create.dto';
import { UpdateEventDto } from './dto/update.dto';

@Controller('/api/v1/events')
@ApiTags('/api/v1/events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  @ApiBody({ type: CreateEventDto })
  async createEvent(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.createEvent(createEventDto);
  }

  @Get()
  async getAllEvents() {
    return this.eventsService.getAllEvents();
  }

  @Get('public')
  async getPublicEvents() {
    return this.eventsService.getPublicEvents();
  }

  @Get(':id')
  @ApiParam({ name: 'id' })
  async getEventById(@Param('id') id: string) {
    return this.eventsService.getEventById(id);
  }

  @Put(':id')
  @ApiParam({ name: 'id' })
  @ApiBody({ type: UpdateEventDto })
  async updateEvent(
    @Param('id') id: string,
    @Body() updateEventDto: UpdateEventDto,
  ) {
    return this.eventsService.updateEvent(id, updateEventDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id' })
  async deleteEvent(@Param('id') id: string) {
    return this.eventsService.deleteEvent(id);
  }
}
