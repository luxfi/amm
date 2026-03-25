import { MethodKind } from "@bufbuild/protobuf";
import { CreateUserRequest, CreateUserResponse, DeleteUserRequest, DeleteUserResponse, GetUserByEmailRequest, GetUserByEmailResponse, GetUserRequest, GetUserResponse, ModifyUserRequest, ModifyUserResponse } from "./userService_pb.js";
/**
 * External facing & Authed endpoints - get UserID directly through ctx.auth.userID header
 *
 * @generated from rpc uniswap.platformservice.v1.UserService.CreateUser
 */
export declare const createUser: {
    readonly localName: "createUser";
    readonly name: "CreateUser";
    readonly kind: MethodKind.Unary;
    readonly I: typeof CreateUserRequest;
    readonly O: typeof CreateUserResponse;
    readonly service: {
        readonly typeName: "uniswap.platformservice.v1.UserService";
    };
};
/**
 * @generated from rpc uniswap.platformservice.v1.UserService.ModifyUser
 */
export declare const modifyUser: {
    readonly localName: "modifyUser";
    readonly name: "ModifyUser";
    readonly kind: MethodKind.Unary;
    readonly I: typeof ModifyUserRequest;
    readonly O: typeof ModifyUserResponse;
    readonly service: {
        readonly typeName: "uniswap.platformservice.v1.UserService";
    };
};
/**
 * Gets current user details and session info
 *
 * @generated from rpc uniswap.platformservice.v1.UserService.GetUser
 */
export declare const getUser: {
    readonly localName: "getUser";
    readonly name: "GetUser";
    readonly kind: MethodKind.Unary;
    readonly I: typeof GetUserRequest;
    readonly O: typeof GetUserResponse;
    readonly service: {
        readonly typeName: "uniswap.platformservice.v1.UserService";
    };
};
/**
 * @generated from rpc uniswap.platformservice.v1.UserService.DeleteUser
 */
export declare const deleteUser: {
    readonly localName: "deleteUser";
    readonly name: "DeleteUser";
    readonly kind: MethodKind.Unary;
    readonly I: typeof DeleteUserRequest;
    readonly O: typeof DeleteUserResponse;
    readonly service: {
        readonly typeName: "uniswap.platformservice.v1.UserService";
    };
};
/**
 * Internal service-to-service endpoint - get user by email
 *
 * @generated from rpc uniswap.platformservice.v1.UserService.GetUserByEmail
 */
export declare const getUserByEmail: {
    readonly localName: "getUserByEmail";
    readonly name: "GetUserByEmail";
    readonly kind: MethodKind.Unary;
    readonly I: typeof GetUserByEmailRequest;
    readonly O: typeof GetUserByEmailResponse;
    readonly service: {
        readonly typeName: "uniswap.platformservice.v1.UserService";
    };
};
