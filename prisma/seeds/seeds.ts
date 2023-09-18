// seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function run() {
  try {
    // Create a user with associated roles
    const user = await prisma.user.create({
      data: {
        email: 'irabestverie@gmail.com',
        firstname: 'Best Verie',
        lastname: 'Iradukunda',
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
