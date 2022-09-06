import { MissingParamError } from './missing-param-error'
import { UnauthorizedError } from './unauthorized-error'

export class HttpResponse {
  static ok(data: { accessToken: string }) {
    return {
      statusCode: 200,
      body: data
    }
  }

  static badRequest(paramName: string) {
    return {
      statusCode: 400,
      body: new MissingParamError(paramName)
    }
  }

  static unauthorizedError() {
    return {
      statusCode: 401,
      body: new UnauthorizedError()
    }
  }

  static serverError() {
    return {
      statusCode: 500
    }
  }
}
