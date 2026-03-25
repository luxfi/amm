import { CreateOrganizationRequest, CreateOrganizationResponse, GetOrganizationRequest, GetOrganizationResponse } from "./organizationService_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service uniswap.platformservice.v1.OrganizationService
 */
export declare const OrganizationService: {
    readonly typeName: "uniswap.platformservice.v1.OrganizationService";
    readonly methods: {
        /**
         * authed toward user through egw
         * User who created the org is admin
         *
         * @generated from rpc uniswap.platformservice.v1.OrganizationService.CreateOrganization
         */
        readonly createOrganization: {
            readonly name: "CreateOrganization";
            readonly I: typeof CreateOrganizationRequest;
            readonly O: typeof CreateOrganizationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc uniswap.platformservice.v1.OrganizationService.GetOrganization
         */
        readonly getOrganization: {
            readonly name: "GetOrganization";
            readonly I: typeof GetOrganizationRequest;
            readonly O: typeof GetOrganizationResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
