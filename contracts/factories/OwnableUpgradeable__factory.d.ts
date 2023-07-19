import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { OwnableUpgradeable, OwnableUpgradeableInterface } from "@arbitrum/sdk/dist/lib/abi/OwnableUpgradeable";
export declare class OwnableUpgradeable__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): OwnableUpgradeableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OwnableUpgradeable;
}