import { LoginInput, User, UserInput } from "../generated/types";

export interface CreateUserResponse {
    CreateUser: User
}

export interface LoginUserResponse {
    LoginUser: User
}

export interface CreateUserRequest {
    input: UserInput
}

export interface LoginUserRequest {
    input: LoginInput
}

export interface GetMeResponse {
    GetMe: User
}

export interface GoogleLoginResponse{
    GoogleLogin: User
}

export interface LogoutResponse {
    Logout: User
}

export interface ForgotPasswordRequest {
    input: string
}

export interface ForgotPasswordResponse {
    ForgotPassword: User
}