export interface RefreshToken {
    userId: number;
    token: string;
    refreshCount: number;
    expiryDate: Date;
  }
  
  //Interface for the Login Response 
  export interface LoginResponse {
    accessToken: string;
    refreshToken: RefreshToken;
    tokenType: string;
  }
  
  //Interface for the Login Request 
  export interface LoginRequest {
    username: string;
    password: string;
  }
  
  //Interface for the Register Request 
  export interface RegisterRequest {
    email: string;
    username: string;
    firstname: string;
    lastname: string;
    street_add: string,
    street_add_2: string,
    city: string,
    state: string,
    zipcode: number,
    phone: string
    password: string;
  }
  
  //Interface for the Register Response 
  export interface RegisterResponse {
    status: number;
    message: string;
  }