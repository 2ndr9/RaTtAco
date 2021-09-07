import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  // jwtFromRequestで指定した方法でとってきたjwtがdecodeされて、それを引数にvalidateメソッドが実行される
  // ここでreturnしたものは、usreオブジェクトとして、headerに入る

  async validate(payload: any) {
    return { userID: payload.userID };
  }
}
