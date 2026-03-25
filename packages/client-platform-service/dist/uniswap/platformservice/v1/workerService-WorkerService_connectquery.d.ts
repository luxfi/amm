import { MethodKind } from "@bufbuild/protobuf";
import { LocationUpdateS3Request, LocationUpdateS3Response, MigrateExistingApikeyRequest, MigrateExistingApikeyResponse } from "./workerService_pb.js";
/**
 * @generated from rpc uniswap.platformservice.v1.WorkerService.UpdateLocationS3
 */
export declare const updateLocationS3: {
    readonly localName: "updateLocationS3";
    readonly name: "UpdateLocationS3";
    readonly kind: MethodKind.Unary;
    readonly I: typeof LocationUpdateS3Request;
    readonly O: typeof LocationUpdateS3Response;
    readonly service: {
        readonly typeName: "uniswap.platformservice.v1.WorkerService";
    };
};
/**
 * @generated from rpc uniswap.platformservice.v1.WorkerService.MigrateExistingApikey
 */
export declare const migrateExistingApikey: {
    readonly localName: "migrateExistingApikey";
    readonly name: "MigrateExistingApikey";
    readonly kind: MethodKind.Unary;
    readonly I: typeof MigrateExistingApikeyRequest;
    readonly O: typeof MigrateExistingApikeyResponse;
    readonly service: {
        readonly typeName: "uniswap.platformservice.v1.WorkerService";
    };
};
