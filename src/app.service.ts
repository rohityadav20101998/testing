import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/testing.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}
  // create(data: any): any {
  //   return this.userModel.create(data);
  // }
  async create(data: any) {
    // @ts-ignore
    const result = await this.userModel.createIndexes({ username: -1 });
    console.log(`Index created: ${result}`);
    return result;
  }
}
