import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { AuthDto } from './dto';


@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}
    signup(dto: AuthDto) {
        return { message: "I am signing up" };
    }
    
    signin() {
        return { message: "I am signing in" };
    }

}
