"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BridgeUnproxied__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "stored",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "received",
                type: "uint256",
            },
        ],
        name: "BadSequencerMessageNumber",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "outbox",
                type: "address",
            },
        ],
        name: "InvalidOutboxSet",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "NotContract",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "NotDelayedInbox",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "NotOutbox",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "address",
                name: "rollup",
                type: "address",
            },
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "NotRollupOrOwner",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "NotSequencerInbox",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "outbox",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "BridgeCallTriggered",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "inbox",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "enabled",
                type: "bool",
            },
        ],
        name: "InboxToggle",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "messageIndex",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "beforeInboxAcc",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "address",
                name: "inbox",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint8",
                name: "kind",
                type: "uint8",
            },
            {
                indexed: false,
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "messageDataHash",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "baseFeeL1",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint64",
                name: "timestamp",
                type: "uint64",
            },
        ],
        name: "MessageDelivered",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "outbox",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "enabled",
                type: "bool",
            },
        ],
        name: "OutboxToggle",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "newSequencerInbox",
                type: "address",
            },
        ],
        name: "SequencerInboxUpdated",
        type: "event",
    },
    {
        inputs: [],
        name: "acceptFundsFromOldBridge",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "activeOutbox",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "allowedDelayedInboxList",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "inbox",
                type: "address",
            },
        ],
        name: "allowedDelayedInboxes",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "allowedOutboxList",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "outbox",
                type: "address",
            },
        ],
        name: "allowedOutboxes",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "delayedInboxAccs",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "delayedMessageCount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint8",
                name: "kind",
                type: "uint8",
            },
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "messageDataHash",
                type: "bytes32",
            },
        ],
        name: "enqueueDelayedMessage",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "dataHash",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "afterDelayedMessagesRead",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "prevMessageCount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "newMessageCount",
                type: "uint256",
            },
        ],
        name: "enqueueSequencerMessage",
        outputs: [
            {
                internalType: "uint256",
                name: "seqMessageIndex",
                type: "uint256",
            },
            {
                internalType: "bytes32",
                name: "beforeAcc",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "delayedAcc",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "acc",
                type: "bytes32",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "executeCall",
        outputs: [
            {
                internalType: "bool",
                name: "success",
                type: "bool",
            },
            {
                internalType: "bytes",
                name: "returnData",
                type: "bytes",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IOwnable",
                name: "rollup_",
                type: "address",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "rollup",
        outputs: [
            {
                internalType: "contract IOwnable",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "sequencerInbox",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "sequencerInboxAccs",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "sequencerMessageCount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "sequencerReportedSubMessageCount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "inbox",
                type: "address",
            },
            {
                internalType: "bool",
                name: "enabled",
                type: "bool",
            },
        ],
        name: "setDelayedInbox",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "outbox",
                type: "address",
            },
            {
                internalType: "bool",
                name: "enabled",
                type: "bool",
            },
        ],
        name: "setOutbox",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_sequencerInbox",
                type: "address",
            },
        ],
        name: "setSequencerInbox",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "newMsgCount",
                type: "uint256",
            },
        ],
        name: "setSequencerReportedSubMessageCount",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "messageDataHash",
                type: "bytes32",
            },
        ],
        name: "submitBatchSpendingReport",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60a06040523060805234801561001457600080fd5b50600580546001600160a01b03199081166001600160a01b031790915560088054909116331790556080516116866100576000396000610cd601526116866000f3fe6080604052600436106101345760003560e01c8063ab5d8943116100ab578063d5719dc21161006f578063d5719dc2146103a1578063e76f5c8d146103c1578063e77145f4146101e9578063eca067ad146103e1578063ee35f327146103f6578063f81ff3b31461041657600080fd5b8063ab5d8943146102ef578063ae60bd1314610304578063c4d66de814610341578063cb23bcb514610361578063cee3d7281461038157600080fd5b80635fca4a16116100fd5780635fca4a161461020b5780637a88b1071461022157806386598a56146102415780638db5993b14610281578063945e1147146102945780639e5d4c49146102c157600080fd5b806284120c1461013957806316bf55791461015d578063413b35bd1461017d57806347fb24c5146101c95780634f61f850146101eb575b600080fd5b34801561014557600080fd5b506007545b6040519081526020015b60405180910390f35b34801561016957600080fd5b5061014a61017836600461134c565b610436565b34801561018957600080fd5b506101b961019836600461137d565b6001600160a01b031660009081526002602052604090206001015460ff1690565b6040519015158152602001610154565b3480156101d557600080fd5b506101e96101e436600461139a565b610457565b005b3480156101f757600080fd5b506101e961020636600461137d565b610762565b34801561021757600080fd5b5061014a600a5481565b34801561022d57600080fd5b5061014a61023c3660046113d8565b610887565b34801561024d57600080fd5b5061026161025c366004611404565b6108cd565b604080519485526020850193909352918301526060820152608001610154565b61014a61028f366004611436565b610a34565b3480156102a057600080fd5b506102b46102af36600461134c565b610a7f565b604051610154919061147d565b3480156102cd57600080fd5b506102e16102dc366004611491565b610aa9565b60405161015492919061151a565b3480156102fb57600080fd5b506102b4610c01565b34801561031057600080fd5b506101b961031f36600461137d565b6001600160a01b03166000908152600160208190526040909120015460ff1690565b34801561034d57600080fd5b506101e961035c36600461137d565b610c27565b34801561036d57600080fd5b506008546102b4906001600160a01b031681565b34801561038d57600080fd5b506101e961039c36600461139a565b610d9b565b3480156103ad57600080fd5b5061014a6103bc36600461134c565b6110c9565b3480156103cd57600080fd5b506102b46103dc36600461134c565b6110d9565b3480156103ed57600080fd5b5060065461014a565b34801561040257600080fd5b506009546102b4906001600160a01b031681565b34801561042257600080fd5b506101e961043136600461134c565b6110e9565b6007818154811061044657600080fd5b600091825260209091200154905081565b6008546001600160a01b0316331461052f5760085460408051638da5cb5b60e01b815290516000926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b1580156104ae57600080fd5b505afa1580156104c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e69190611579565b9050336001600160a01b0382161461052d57600854604051630739600760e01b81526105249133916001600160a01b03909116908490600401611596565b60405180910390fd5b505b6001600160a01b0382166000818152600160208181526040928390209182015492518515158152919360ff90931692917f6675ce8882cb71637de5903a193d218cc0544be9c0650cb83e0955f6aa2bf521910160405180910390a28080156105945750825b806105a65750801580156105a6575082155b156105b15750505050565b821561063f57604080518082018252600380548252600160208084018281526001600160a01b038a166000818152928490529582209451855551938201805460ff1916941515949094179093558154908101825591527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b0180546001600160a01b031916909117905561075b565b6003805461064f906001906115b9565b8154811061065f5761065f6115de565b6000918252602090912001548254600380546001600160a01b0390931692909190811061068e5761068e6115de565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555081600001546001600060038560000154815481106106dc576106dc6115de565b60009182526020808320909101546001600160a01b031683528201929092526040019020556003805480610712576107126115f4565b60008281526020808220830160001990810180546001600160a01b03191690559092019092556001600160a01b03861682526001908190526040822091825501805460ff191690555b50505b5050565b6008546001600160a01b031633146108315760085460408051638da5cb5b60e01b815290516000926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b1580156107b957600080fd5b505afa1580156107cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107f19190611579565b9050336001600160a01b0382161461082f57600854604051630739600760e01b81526105249133916001600160a01b03909116908490600401611596565b505b600980546001600160a01b0319166001600160a01b0383161790556040517f8c1e6003ed33ca6748d4ad3dd4ecc949065c89dceb31fdf546a5289202763c6a9061087c90839061147d565b60405180910390a150565b6009546000906001600160a01b031633146108b7573360405163223e13c160e21b8152600401610524919061147d565b6108c6600d84434248876111bd565b9392505050565b6009546000908190819081906001600160a01b03163314610903573360405163223e13c160e21b8152600401610524919061147d565b85600a541415801561091457508515155b80156109215750600a5415155b1561094d57600a5460405163e2051feb60e01b8152600481019190915260248101879052604401610524565b600a8590556007549350831561098b576007805461096d906001906115b9565b8154811061097d5761097d6115de565b906000526020600020015492505b86156109bc57600661099e6001896115b9565b815481106109ae576109ae6115de565b906000526020600020015491505b60408051602081018590529081018990526060810183905260800160408051601f198184030181529190528051602090910120600780546001810182556000919091527fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c688018190559398929750909550919350915050565b3360009081526001602081905260408220015460ff16610a69573360405163b6c60ea360e01b8152600401610524919061147d565b610a778484434248876111bd565b949350505050565b60048181548110610a8f57600080fd5b6000918252602090912001546001600160a01b0316905081565b3360009081526002602052604081206001015460609060ff16610ae157336040516332ea82ab60e01b8152600401610524919061147d565b8215801590610af857506001600160a01b0386163b155b15610b18578560405163b5cf5b8f60e01b8152600401610524919061147d565b600580546001600160a01b0319811633179091556040516001600160a01b03918216918816908790610b4d908890889061160a565b60006040518083038185875af1925050503d8060008114610b8a576040519150601f19603f3d011682016040523d82523d6000602084013e610b8f565b606091505b50600580546001600160a01b0319166001600160a01b038581169190911790915560405192955090935088169033907f2d9d115ef3e4a606d698913b1eae831a3cdfe20d9a83d48007b0526749c3d46690610bef908a908a908a9061161a565b60405180910390a35094509492505050565b6005546000906001600160a01b0390811690811415610c2257600091505090565b919050565b600054610100900460ff16610c425760005460ff1615610c46565b303b155b610ca95760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610524565b600054610100900460ff16158015610ccb576000805461ffff19166101011790555b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415610d595760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608401610524565b600580546001600160a01b036001600160a01b0319918216811790925560088054909116918416919091179055801561075e576000805461ff00191690555050565b6008546001600160a01b03163314610e6a5760085460408051638da5cb5b60e01b815290516000926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b158015610df257600080fd5b505afa158015610e06573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e2a9190611579565b9050336001600160a01b03821614610e6857600854604051630739600760e01b81526105249133916001600160a01b03909116908490600401611596565b505b6001600160a01b038281161415610e96578160405163077abed160e41b8152600401610524919061147d565b6001600160a01b038216600081815260026020908152604091829020600181015492518515158152909360ff90931692917f49477e7356dbcb654ab85d7534b50126772d938130d1350e23e2540370c8dffa910160405180910390a2808015610efc5750825b80610f0e575080158015610f0e575082155b15610f195750505050565b8215610fa857604080518082018252600480548252600160208084018281526001600160a01b038a16600081815260029093529582209451855551938201805460ff1916941515949094179093558154908101825591527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b0180546001600160a01b031916909117905561075b565b60048054610fb8906001906115b9565b81548110610fc857610fc86115de565b6000918252602090912001548254600480546001600160a01b03909316929091908110610ff757610ff76115de565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055508160000154600260006004856000015481548110611045576110456115de565b60009182526020808320909101546001600160a01b03168352820192909252604001902055600480548061107b5761107b6115f4565b60008281526020808220830160001990810180546001600160a01b03191690559092019092556001600160a01b03861682526002905260408120908155600101805460ff1916905550505050565b6006818154811061044657600080fd5b60038181548110610a8f57600080fd5b6008546001600160a01b031633146111b85760085460408051638da5cb5b60e01b815290516000926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b15801561114057600080fd5b505afa158015611154573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111789190611579565b9050336001600160a01b038216146111b657600854604051630739600760e01b81526105249133916001600160a01b03909116908490600401611596565b505b600a55565b600654604080516001600160f81b031960f88a901b166020808301919091526bffffffffffffffffffffffff1960608a901b1660218301526001600160c01b031960c089811b8216603585015288901b16603d830152604582018490526065820186905260858083018690528351808403909101815260a5909201909252805191012060009190600082156112775760066112596001856115b9565b81548110611269576112696115de565b906000526020600020015490505b6040805160208082018490528183018590528251808303840181526060830180855281519190920120600680546001810182556000919091527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f015533905260ff8c1660808201526001600160a01b038b1660a082015260c0810187905260e0810188905267ffffffffffffffff89166101008201529051829185917f5e3c1311ea442664e8b1611bfabef659120ea7a0a2cfc0667700bebc69cbffe1918190036101200190a3509098975050505050505050565b60006020828403121561135e57600080fd5b5035919050565b6001600160a01b038116811461137a57600080fd5b50565b60006020828403121561138f57600080fd5b81356108c681611365565b600080604083850312156113ad57600080fd5b82356113b881611365565b9150602083013580151581146113cd57600080fd5b809150509250929050565b600080604083850312156113eb57600080fd5b82356113f681611365565b946020939093013593505050565b6000806000806080858703121561141a57600080fd5b5050823594602084013594506040840135936060013592509050565b60008060006060848603121561144b57600080fd5b833560ff8116811461145c57600080fd5b9250602084013561146c81611365565b929592945050506040919091013590565b6001600160a01b0391909116815260200190565b600080600080606085870312156114a757600080fd5b84356114b281611365565b935060208501359250604085013567ffffffffffffffff808211156114d657600080fd5b818701915087601f8301126114ea57600080fd5b8135818111156114f957600080fd5b88602082850101111561150b57600080fd5b95989497505060200194505050565b821515815260006020604081840152835180604085015260005b8181101561155057858101830151858201606001528201611534565b81811115611562576000606083870101525b50601f01601f191692909201606001949350505050565b60006020828403121561158b57600080fd5b81516108c681611365565b6001600160a01b0393841681529183166020830152909116604082015260600190565b6000828210156115d957634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fd5b8183823760009101908152919050565b83815260406020820152816040820152818360608301376000818301606090810191909152601f909201601f191601019291505056fea26469706673582212205f26c612b5688e1d7836d7b2fb689075102a5c2d983b271f7cce40a58a2262e164736f6c63430008090033";
const isSuperArgs = (xs) => xs.length > 1;
class BridgeUnproxied__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
        this.contractName = "BridgeUnproxied";
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
exports.BridgeUnproxied__factory = BridgeUnproxied__factory;
BridgeUnproxied__factory.bytecode = _bytecode;
BridgeUnproxied__factory.abi = _abi;
