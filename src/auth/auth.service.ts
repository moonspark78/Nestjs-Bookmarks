import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    login() {
        return { message: "I am logging in" };
    }

    signup() {
        return { message: "I am signing up" };
    }
}
