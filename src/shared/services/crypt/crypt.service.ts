import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';


@Injectable()
export class CryptService {

  async crypt(value: string) {
    const saltResult = await bcrypt.genSalt(10);
    const hashResult = await bcrypt.hash(value, saltResult);

    return hashResult;
  }

  compare(value: string, encrypted: string){
    const result = bcrypt.compareSync(value, encrypted);
    return result;
  }
}
