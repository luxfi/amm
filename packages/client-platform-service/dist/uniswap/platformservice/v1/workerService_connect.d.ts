import { LocationUpdateS3Request, LocationUpdateS3Response, MigrateExistingApikeyRequest, MigrateExistingApikeyResponse } from "./workerService_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * Service definition
 *
 * @generated from service uniswap.platformservice.v1.WorkerService
 */
export declare const WorkerService: {
    readonly typeName: "uniswap.platformservice.v1.WorkerService";
    readonly methods: {
        /**
         * @generated from rpc uniswap.platformservice.v1.WorkerService.UpdateLocationS3
         */
        readonly updateLocationS3: {
            readonly name: "UpdateLocationS3";
            readonly I: typeof LocationUpdateS3Request;
            readonly O: typeof LocationUpdateS3Response;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc uniswap.platformservice.v1.WorkerService.MigrateExistingApikey
         */
        readonly migrateExistingApikey: {
            readonly name: "MigrateExistingApikey";
            readonly I: typeof MigrateExistingApikeyRequest;
            readonly O: typeof MigrateExistingApikeyResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
