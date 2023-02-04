export interface IUserLogin {
  email: string
  password: string
}

export interface IUser {
  id: string
  full_name: string
  email: string
  password: string
  number: string
  createdAt: Date
  contacts: IContact[]
}

export interface IUserRequest {
  full_name: string
  email: string
  password: string
  number: string
}
export interface IUserResponse extends IUserRequest {
  id: string
}

export interface IContact {
  full_name: string
  email: string
  number: string
  createdAt: Date
}

export interface IUserLogged {
  id: string,
  email: string
}

export interface IUserUpdate {
  id: string,
  full_name: string,
  email: string,
  password: string,
  number: string
}