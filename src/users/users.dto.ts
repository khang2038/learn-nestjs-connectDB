import { Transform } from 'class-transformer';

export class UserDto {
  id: string;

  firstName: string;
  lastName: string;

  @Transform(({ obj }) => obj.firstName + ' ' + obj.lastName)
  isActive: boolean;
}
