export interface IContactRequest {
  full_name: string
  number: string
  email: string
  userId: string
}

export interface IContact {
  id: string
  full_name: string
  email: string
  number: string
  createdAt: Date
  userId: string
}

export interface IDeleteContact {
  id: string,
  userId: string
}

export interface IContactUpdate {
  full_name: string,
  email: string,
  number: string,
  id: string,
  userId: string
}