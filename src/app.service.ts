import { Injectable } from '@nestjs/common';
import {User , UserDocument} from './user.models';
import {Model} from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable() //injects methods to controller
export class AppService {
  constructor(
    @InjectModel('User') private readonly userModel : Model<UserDocument>
  ){}

  //creating a user
  async createUser(createUserDto:CreateUserDto) : Promise<User>{
    const newUser = new this.userModel(createUserDto)
    return newUser.save()
  }

  //reading the user
  async readUser(){
    return this.userModel.find({})
    .then(user => {return user})
    .catch((err)=>console.log(err))
  }

  //updating the data
  async updateUser(id,data):Promise<User>{
    return this.userModel.findByIdAndUpdate(id,data,{new:true})
  }

  //deleting the data
  async deleteUser(id){
    return this .userModel.findByIdAndDelete(id)
  }
}
