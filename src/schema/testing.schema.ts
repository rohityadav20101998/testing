import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Types } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true })
  username: string;
  @Prop({ required: true })
  email: string;
  @Prop()
  age: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
