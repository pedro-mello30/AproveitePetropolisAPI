import { Module } from '@nestjs/common';
import { CryptService } from './services/crypt/crypt.service';

@Module({
  providers: [CryptService],
  exports: [CryptService]
})
export class SharedModule {}
