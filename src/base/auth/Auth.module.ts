import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './passport/strategy/Jwt.strategy';
import { GoogleStrategy } from './passport/strategy/Google.strategy';
import { Module } from '@nestjs/common';
import { KakaoStrategy } from './passport/strategy/Kakao.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: ['jwt', 'google', 'kakao'] }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: {
          expiresIn: configService.get('JWT_EXPIRES_IN', '1h'),
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [JwtStrategy, GoogleStrategy, KakaoStrategy],
  exports: [JwtStrategy, PassportModule, GoogleStrategy, KakaoStrategy],
})
export class AuthModule {}
