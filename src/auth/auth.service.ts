import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { AuthDto } from './dto';
import * as argon from 'argon2';
import { Prisma } from '@prisma/client';


@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}
    async signup(dto: AuthDto) {
        // generate the password hash
        const hash = await argon.hash(dto.password);
        // save the new user in the database
        try {
        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                hash,
            },
            select: {
                id: true,
                email: true,
                createdAt: true,
                updatedAt: true,
                firstName: true,
                lastName: true,
            }
        });
        // return the saved user
        return user;
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ForbiddenException('Credentials taken');
                }
            }
            throw error;
        }
    }

    async signin() {
        // find the user by email
        //if user does not exist throw exception
        return { message: "I am signing in" };
    }

}
