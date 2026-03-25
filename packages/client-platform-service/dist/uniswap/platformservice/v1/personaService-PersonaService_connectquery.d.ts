import { MethodKind } from "@bufbuild/protobuf";
import { GetOrCreatePersonaRequest, GetOrCreatePersonaResponse, UpgradePersonaRequest, UpgradePersonaResponse } from "./personaService_pb.js";
/**
 * Internal endpoints for device-based persona management
 *
 * @generated from rpc uniswap.platformservice.v1.PersonaService.UpgradePersona
 */
export declare const upgradePersona: {
    readonly localName: "upgradePersona";
    readonly name: "UpgradePersona";
    readonly kind: MethodKind.Unary;
    readonly I: typeof UpgradePersonaRequest;
    readonly O: typeof UpgradePersonaResponse;
    readonly service: {
        readonly typeName: "uniswap.platformservice.v1.PersonaService";
    };
};
/**
 * @generated from rpc uniswap.platformservice.v1.PersonaService.GetOrCreatePersona
 */
export declare const getOrCreatePersona: {
    readonly localName: "getOrCreatePersona";
    readonly name: "GetOrCreatePersona";
    readonly kind: MethodKind.Unary;
    readonly I: typeof GetOrCreatePersonaRequest;
    readonly O: typeof GetOrCreatePersonaResponse;
    readonly service: {
        readonly typeName: "uniswap.platformservice.v1.PersonaService";
    };
};
