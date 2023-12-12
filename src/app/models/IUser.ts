export interface IUser {
    id: number,
    email: string,
    username: string,
    first_name: string,
    last_name: string,
    street_add: string,
    street_add_2: string,
    city: string,
    state: string,
    zipcode: number,
    phone: string,
    password: string,
    token: string,
    refreshToken: string
}

export interface IUserLogin {
    username: string,
    password: string,
    token: string,
    refreshToken: string
}