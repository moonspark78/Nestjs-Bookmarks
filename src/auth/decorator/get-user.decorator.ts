import { createParamDecorator, type ExecutionContext } from "@nestjs/common";

export const GetUser = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {})