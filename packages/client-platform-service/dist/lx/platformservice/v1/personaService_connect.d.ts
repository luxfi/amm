import { GetOrCreatePersonaRequest, GetOrCreatePersonaResponse, UpgradePersonaRequest, UpgradePersonaResponse } from "./personaService_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service uniswap.platformservice.v1.PersonaService
 */
export declare const PersonaService: {
    readonly typeName: "uniswap.platformservice.v1.PersonaService";
    readonly methods: {
        /**
         * Internal endpoints for device-based persona management
         *
         * @generated from rpc uniswap.platformservice.v1.PersonaService.UpgradePersona
         */
        readonly upgradePersona: {
            readonly name: "UpgradePersona";
            readonly I: typeof UpgradePersonaRequest;
            readonly O: typeof UpgradePersonaResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc uniswap.platformservice.v1.PersonaService.GetOrCreatePersona
         */
        readonly getOrCreatePersona: {
            readonly name: "GetOrCreatePersona";
            readonly I: typeof GetOrCreatePersonaRequest;
            readonly O: typeof GetOrCreatePersonaResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
