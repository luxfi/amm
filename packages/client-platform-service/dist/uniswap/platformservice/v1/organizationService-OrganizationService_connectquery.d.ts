import { MethodKind } from "@bufbuild/protobuf";
import { CreateOrganizationRequest, CreateOrganizationResponse, GetOrganizationRequest, GetOrganizationResponse } from "./organizationService_pb.js";
/**
 * authed toward user through egw
 * User who created the org is admin
 *
 * @generated from rpc uniswap.platformservice.v1.OrganizationService.CreateOrganization
 */
export declare const createOrganization: {
    readonly localName: "createOrganization";
    readonly name: "CreateOrganization";
    readonly kind: MethodKind.Unary;
    readonly I: typeof CreateOrganizationRequest;
    readonly O: typeof CreateOrganizationResponse;
    readonly service: {
        readonly typeName: "uniswap.platformservice.v1.OrganizationService";
    };
};
/**
 * @generated from rpc uniswap.platformservice.v1.OrganizationService.GetOrganization
 */
export declare const getOrganization: {
    readonly localName: "getOrganization";
    readonly name: "GetOrganization";
    readonly kind: MethodKind.Unary;
    readonly I: typeof GetOrganizationRequest;
    readonly O: typeof GetOrganizationResponse;
    readonly service: {
        readonly typeName: "uniswap.platformservice.v1.OrganizationService";
    };
};
