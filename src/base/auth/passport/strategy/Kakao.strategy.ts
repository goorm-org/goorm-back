import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Profile, Strategy } from 'passport-kakao';

@Injectable()
export class KakaoStrategy extends PassportStrategy(Strategy, 'kakao') {
  constructor(readonly configService: ConfigService) {
    super({
      clientID: configService.get('KAKAO_API_KEY'),
      callbackURL: configService.get('KAKAO_LOGIN_CALLBACK_URI'),
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: any,
  ): Promise<any> {
    try {
      // 유저 검색
      // 처음 로그인 시 Users DB에 계정 추가
      // done(null, { loginAccount }); // req.user에 { loginAccount } 속성을 추가한다
    } catch (error) {
      console.error(error);
      done(error);
    }
  }
}
