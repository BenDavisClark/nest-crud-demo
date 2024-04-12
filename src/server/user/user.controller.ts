import { Controller, Get, Body, Delete, Param, Post, Put } from '@nestjs/common';
import { CreateUserDTO, EditUserDTO } from "./user.dto";
import { User } from './user.interface';
import { UserService } from './user.service'

interface UserResponse<T = unknown> {
  code: number;
  data?: T;
  message: string
}

@Controller('user')
export class UserController {
  constructor(private readonly userServive: UserService) {}
  // GET /user/users
  @Get('users')
  async findAll(): Promise<UserResponse<User[]>> {
    return {
      code: 200,
      data: await this.userServive.findAll(),
      message: 'Success',
    };
  }

  // GET /user/:_id
  @Get(':_id')
  async findOne(@Param('_id') _id: string): Promise<UserResponse<User>> {
    return {
      code: 200,
      data: await this.userServive.findOne(_id),
      message: 'Success',
    };
  }
  // POST /user
  @Post()
  async addOne(@Body() body: CreateUserDTO): Promise<UserResponse> {
    await this.userServive.addOne(body);
    return {
      code: 200,
      message: 'Success',
    };
  }

  // Post /user/:_id
  @Post(':_id')
  async editOne(
    @Param('_id') _id: string,
    @Body() body: EditUserDTO,
  ): Promise<UserResponse> {
    await this.userServive.editOne(_id, body);
    return {
      code: 200,
      message: 'Success',
    };
  }

  // Delete /user/:_id
  @Delete(':_id')
  async deleteOne(@Param('_id') _id: string): Promise<UserResponse> {
    await this.userServive.deleteOne(_id);
    return {
      code: 200,
      message: 'Success',
    };
  }
}
