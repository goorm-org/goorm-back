import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3, config } from 'aws-sdk';

@Injectable()
export class AwsService {
  constructor(private readonly configService: ConfigService) {
    config.update({
      accessKeyId: configService.get('AWS_ACCESS_KEY'),
      secretAccessKey: configService.get('AWS_SECRET_KEY'),
      region: configService.get('AWS_REGION'),
    });

    this.s3 = new S3();
  }
  readonly s3: S3;

  /** @desc AWS S3에 엑셀파일 전송 */
  async uploadExcelFile(fileName: string, file: Buffer): Promise<string> {
    const uploadResult = await this.s3
      .upload({
        Bucket: 'bucketName',
        Key: fileName,
        Body: file,
      })
      .promise();

    const uploadLink = uploadResult.Location;

    return uploadLink;
  }
}
