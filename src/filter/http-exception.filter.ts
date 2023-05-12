import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { throwError } from 'rxjs';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    async catch(exception: HttpException) {
        const error: any = exception.getResponse();
        return throwError(() =>  new RpcException({message :error.message,status : error.statusCode,statusCode: error.statusCode}));

    }
}