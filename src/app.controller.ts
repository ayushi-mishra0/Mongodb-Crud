import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.models';
import { UserUpdateDto } from './userUpdate.dto';
import  { CreateUserDto } from './dto/create-user.dto';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('createUser')
  async  createUser(@Body()  createUserDto: CreateUserDto) {
    return this.appService.createUser(createUserDto);
  }

  @Get()
  readUser(){
  return this.appService.readUser() 
  }

  @Put(':id')
  async updateUser(
    @Param('id') id:string,@Body() updateData:UserUpdateDto)
    :Promise<User>{
    return this.appService.updateUser(id,updateData)
  }
  @Delete(':id')
  async deleteUser(@Param('id') id:string){
    return this.appService.deleteUser(id)
  }
  
}
