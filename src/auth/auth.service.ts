import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { AuthDto } from './dto';
import * as argon from 'argon2';


@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}
    async signup(dto: AuthDto) {
        // generate the password hash
        const hash = await argon.hash(dto.password);
        // save the new user in the database
        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                hash,
            },
            select: {
                id: true,
                email: true,
                createdAt: true,
            }
        });
        // return the saved user
        return user;
    }

    async signin() {
        return { message: "I am signing in" };
    }

}
