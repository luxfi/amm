import { CreateUserRequest, CreateUserResponse, DeleteUserRequest, DeleteUserResponse, GetUserByEmailRequest, GetUserByEmailResponse, GetUserRequest, GetUserResponse, ModifyUserRequest, ModifyUserResponse } from "./userService_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service uniswap.platformservice.v1.UserService
 */
export declare const UserService: {
    readonly typeName: "uniswap.platformservice.v1.UserService";
    readonly methods: {
        /**
         * External facing & Authed endpoints - get UserID directly through ctx.auth.userID header
         *
         * @generated from rpc uniswap.platformservice.v1.UserService.CreateUser
         */
        readonly createUser: {
            readonly name: "CreateUser";
            readonly I: typeof CreateUserRequest;
            readonly O: typeof CreateUserResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc uniswap.platformservice.v1.UserService.ModifyUser
         */
        readonly modifyUser: {
            readonly name: "ModifyUser";
            readonly I: typeof ModifyUserRequest;
            readonly O: typeof ModifyUserResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Gets current user details and session info
         *
         * @generated from rpc uniswap.platformservice.v1.UserService.GetUser
         */
        readonly getUser: {
            readonly name: "GetUser";
            readonly I: typeof GetUserRequest;
            readonly O: typeof GetUserResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc uniswap.platformservice.v1.UserService.DeleteUser
         */
        readonly deleteUser: {
            readonly name: "DeleteUser";
            readonly I: typeof DeleteUserRequest;
            readonly O: typeof DeleteUserResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Internal service-to-service endpoint - get user by email
         *
         * @generated from rpc uniswap.platformservice.v1.UserService.GetUserByEmail
         */
        readonly getUserByEmail: {
            readonly name: "GetUserByEmail";
            readonly I: typeof GetUserByEmailRequest;
            readonly O: typeof GetUserByEmailResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
