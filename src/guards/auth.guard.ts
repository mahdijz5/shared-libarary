import {
    CanActivate,
    ExecutionContext,
    Inject,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import {   ClientProxy } from '@nestjs/microservices';
import {  firstValueFrom } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        @Inject('AUTH_SERVICE') private readonly authService: ClientProxy,
    ) { }

    async canActivate(
        context: ExecutionContext,
    ): Promise<boolean>  {
        if (context.getType() !== 'http')return false;

        const request = context.switchToHttp().getRequest();

        const authHeader = request.headers['authorization'];

        if (!authHeader) return false;

        const authHeaderParts = (authHeader as string).split(' ');

        if (authHeaderParts.length !== 2) return false;

        const [, jwt] = authHeaderParts;
        try {
            await firstValueFrom(this.authService.send("auth", { jwt }))
            return true
        } catch (error) {
            throw false
        }
    }
}
