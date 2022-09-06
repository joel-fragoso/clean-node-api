import { HttpResponse } from '@/presentation/helpers'

export class LoginRouter {
  route(httpRequest?: LoginRouter.Params): LoginRouter.Result | undefined {
    if (!httpRequest || !httpRequest.body) {
      return HttpResponse.serverError()
    }
    const { email, password } = httpRequest.body
    if (!email) {
      return HttpResponse.badRequest('email')
    }
    if (!password) {
      return HttpResponse.badRequest('password')
    }
  }
}

export namespace LoginRouter {
  export type Params = {
    body: {
      email?: string
      password?: string
    }
  }
  export type Result = {
    statusCode: number
    body?: any
  }
}
