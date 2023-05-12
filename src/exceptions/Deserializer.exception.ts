import { HttpException } from "@nestjs/common";


/** This Exception make error that is came from microservice meanningful. */
export class ExceptionDeserializer extends HttpException {
    constructor(error : {error : {message:string,statusCode : number, status?: number}}) {
      super(error.error.message, error.error.statusCode);
    }
  }