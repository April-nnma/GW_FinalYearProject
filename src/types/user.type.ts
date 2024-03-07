export interface loginDto {
  email: string;
  password: string;
}

export interface registerDto {
  fullname: string;
  email: string;
  password: string;
  date_of_birth?: Date;
}
