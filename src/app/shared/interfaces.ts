export interface CartOpened {
  opened: boolean
}

export interface User {
  username: string
  password: string
  isAdmin?: boolean
}

export interface Product {
  id?: string
  category: string
  productName: string
  price: number
  shortDescription: string
  fullDescription: string
  // images: Array<string>
  rating?: number
}

export interface MongoDbResponse {
  id: string
}

export interface Img {
  image: any
}
