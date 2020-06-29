import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { ErrorResponse } from '../../models/response.model';

@Catch()
export class CatchAllFilter<T> implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse();

    let status: number, msg: string;
    if (exception instanceof HttpException) {
      status = exception.getStatus();
      msg = exception.message || 'Internal Server Error';
    } else {
      status = 500;
      msg = 'Internal Server Error';
    }

    const data =
      process.env.NODE_ENV === 'development' ? exception.message : null;
    const response: ErrorResponse<any> = { msg, ok: false, data };

    res.status(status).json(response);
  }
}
