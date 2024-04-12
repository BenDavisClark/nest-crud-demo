export class CreateUserDTO {
  readonly _id: string;
  readonly username: string;
  readonly password: string;
}

export class EditUserDTO {
  readonly username: string;
  readonly password: string;
}
