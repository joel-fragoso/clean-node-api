import { HttpResponse } from '@/presentation/helpers'

export class LoginRouter {
  constructor(private readonly authUseCase?: any) {}
  route(httpRequest: LoginRouter.Params): LoginRouter.Result | undefined {
    try {
      const { email, password } = httpRequest.body
      if (!email) {
        return HttpResponse.badRequest('email')
      }
      if (!password) {
        return HttpResponse.badRequest('password')
      }
      const accessToken = this.authUseCase.auth(email, password)
      if (!accessToken) {
        return HttpResponse.unauthorizedError()
      }

      return HttpResponse.ok({ accessToken })
    } catch (error) {
      return HttpResponse.serverError()
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
