import { Injectable } from '@nestjs/common';


@Injectable()
export class AuthService {
    signin() {
        return { message: "I am signing in" };
    }

    signup() {
        return { message: "I am signing up" };
    }
}
