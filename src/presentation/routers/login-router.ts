import { HttpResponse } from '@/presentation/helpers'

export class LoginRouter {
  constructor(private readonly authUseCase?: any) {}
  route(httpRequest?: LoginRouter.Params): LoginRouter.Result | undefined {
    if (
      !httpRequest ||
      !httpRequest.body ||
      !this.authUseCase ||
      !this.authUseCase.auth
    ) {
      return HttpResponse.serverError()
    }
    const { email, password } = httpRequest.body
    if (!email) {
      return HttpResponse.badRequest('email')
    }
    if (!password) {
      return HttpResponse.badRequest('password')
    }
    this.authUseCase.auth(email, password)
    return HttpResponse.unauthorizedError()
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
