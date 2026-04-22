import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}
    signin() {
        return { message: "I am signing in" };
    }

    signup() {
        return { message: "I am signing up" };
    }
}
