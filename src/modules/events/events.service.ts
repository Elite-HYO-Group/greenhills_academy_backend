import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { CreateEventDto } from './dto/create.dto';
import { UpdateEventDto } from './dto/update.dto';


@Injectable()
export class EventsService {
  constructor(private readonly prismaService: PrismaService) {}

  async createEvent(createEventDto: CreateEventDto) {
    return this.prismaService.event.create({
      data: createEventDto,
    });
  }

  async getAllEvents() {
    return this.prismaService.event.findMany();
  }

  async getPublicEvents() {
    return this.prismaService.event.findMany({
      where: {
        isPublic: true,
      },
    });
  }

  async getEventById(id: string) {
    return this.findEventById(id);
  }

  async updateEvent(id: string, updateEventDto: UpdateEventDto) {
    const event = await this.findEventById(id);
    if(!event) throw new NotFoundException("Event not found")

    return this.prismaService.event.update({
      where: { id },
      data: updateEventDto,
    });
  }

  async deleteEvent(id: string) {
    const event = await this.findEventById(id);
    if(!event) throw new NotFoundException("Event not found")

    return this.prismaService.event.delete({
      where: { id },
    });
  }

  private async findEventById(id: string) {
    const event = await this.prismaService.event.findUnique({ where: { id } });

    if (!event) {
      throw new NotFoundException(`Event with ID ${id} not found`);
    }

    return event;
  }
}
