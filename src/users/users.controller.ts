import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { UserDto } from './users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  createUser(@Body() user: UserDto): Promise<UserDto> {
    return this.userService.save(user);
  }

  @Put(':id')
  updateUserById(@Param('id') id: string, user: UserDto) {
    return;
  }
}
