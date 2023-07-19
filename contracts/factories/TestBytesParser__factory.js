"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestBytesParser__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "bytes",
                name: "input",
                type: "bytes",
            },
        ],
        name: "bytesToString",
        outputs: [
            {
                internalType: "bool",
                name: "success",
                type: "bool",
            },
            {
                internalType: "string",
                name: "res",
                type: "string",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "input",
                type: "bytes",
            },
        ],
        name: "bytesToUint8",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b506104da806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806339614e4f1461003b5780633c74a7ab14610162575b600080fd5b6100df6004803603602081101561005157600080fd5b810190602081018135600160201b81111561006b57600080fd5b82018360208201111561007d57600080fd5b803590602001918460018302840111600160201b8311171561009e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610223945050505050565b604051808315151515815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561012657818101518382015260200161010e565b50505050905090810190601f1680156101535780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b6102066004803603602081101561017857600080fd5b810190602081018135600160201b81111561019257600080fd5b8201836020820111156101a457600080fd5b803590602001918460018302840111600160201b831117156101c557600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061023a945050505050565b60408051921515835260ff90911660208301528051918290030190f35b6000606061023083610246565b915091505b915091565b60008061023083610451565b6000606082516000141561025d5760009150610235565b8251602014156103835782516000908490601f90811061027957fe5b01602001516001600160f81b031916146102965760009150610235565b6001915060205b6000811180156102ce57508351600090859060001984019081106102bd57fe5b01602001516001600160f81b031916145b156102dc576000190161029d565b60608167ffffffffffffffff811180156102f557600080fd5b506040519080825280601f01601f191660200182016040528015610320576020820181803683370190505b50905060005b828160ff16101561037957858160ff168151811061034057fe5b602001015160f81c60f81b828260ff168151811061035a57fe5b60200101906001600160f81b031916908160001a905350600101610326565b5091506102359050565b6001915082806020019051602081101561039c57600080fd5b8101908080516040519392919084600160201b8211156103bb57600080fd5b9083019060208201858111156103d057600080fd5b8251600160201b8111828201881017156103e957600080fd5b82525081516020918201929091019080838360005b838110156104165781810151838201526020016103fe565b50505050905090810190601f1680156104435780820380516001836020036101000a031916815260200191505b506040525050509050915091565b600080825160201461046857506000905080610235565b600083806020019051602081101561047f57600080fd5b5051905060ff811115610499575060009150819050610235565b60019250905091509156fea2646970667358221220ace98648441bc3ebed3631c828d6727a80a0b53922db0d712f08ca3accae946a64736f6c634300060b0033";
const isSuperArgs = (xs) => xs.length > 1;
class TestBytesParser__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
        this.contractName = "TestBytesParser";
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.TestBytesParser__factory = TestBytesParser__factory;
TestBytesParser__factory.bytecode = _bytecode;
TestBytesParser__factory.abi = _abi;
