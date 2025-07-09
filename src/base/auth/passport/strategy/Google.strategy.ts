import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy, VerifyCallback } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(readonly configService: ConfigService) {
    super({
      clientID: configService.get('GOOGLE_LOGIN_ID'),
      clientSecret: configService.get('GOOGLE_LOGIN_SECRET'),
      callbackURL: configService.get('GOOGLE_LOGIN_CALLBACK_URI'),
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: VerifyCallback,
  ): Promise<any> {
    try {
      // 로컬 회원가입 되어있는 경우 경고
      // 처음 로그인 시 Users DB에 계정 추가
      // done(null, { loginAccount }); // req.user에 { loginAccount } 속성을 추가한다
    } catch (error) {
      console.error(error);
      done(error);
    }
  }
}
