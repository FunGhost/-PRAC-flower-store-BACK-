import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const isAuthenticated = request.headers.authorization === 'secret';
    if (!isAuthenticated) {
      throw new UnauthorizedException('Unauthorized');
    }
    return isAuthenticated;
  }
}
