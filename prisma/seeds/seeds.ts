// seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
import * as bcrypt from 'bcrypt';


async function run() {
  try {
    const hashedPassword = await bcrypt.hash('admin@123', 10); 

    const user = await prisma.user.create({
      data: {
        email: 'irabestverie@gmail.com',
        firstname: 'Best Verie',
        lastname: 'Iradukunda',
        password: hashedPassword,
        role: {
          create: {
            name: 'ADMIN', 
          },
        },
      },
      include: {
        role: true, 
      },
    });

    console.log('Seed data inserted successfully.');
    console.log('User:', user);
  } catch (error) {
    console.error('Error during seeding:', error);
  } finally {
    await prisma.$disconnect();
  }
}

run();
