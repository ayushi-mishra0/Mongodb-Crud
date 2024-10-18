import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    username: string;

    @Prop()
    email: string;  // Add email property

    @Prop()
    password: string;  // Add password property

    @Prop({ default: Date.now })
    date_added: Date;

    @Prop()
    description?: string;  // Ensure it's optional in the schema as well
}

export const UserSchema = SchemaFactory.createForClass(User);
