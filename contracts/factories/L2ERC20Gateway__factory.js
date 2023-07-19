"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.L2ERC20Gateway__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "l1Token",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "DepositFinalized",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "_id",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "TxToL1",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "l1Token",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "_l2ToL1Id",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_exitNum",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "WithdrawalInitiated",
        type: "event",
    },
    {
        inputs: [],
        name: "beaconProxyFactory",
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
                name: "l1ERC20",
                type: "address",
            },
        ],
        name: "calculateL2TokenAddress",
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
        inputs: [],
        name: "cloneableProxyHash",
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
        name: "counterpartGateway",
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
        inputs: [],
        name: "exitNum",
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
                name: "_token",
                type: "address",
            },
            {
                internalType: "address",
                name: "_from",
                type: "address",
            },
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "finalizeInboundTransfer",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_token",
                type: "address",
            },
            {
                internalType: "address",
                name: "_from",
                type: "address",
            },
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "getOutboundCalldata",
        outputs: [
            {
                internalType: "bytes",
                name: "outboundCalldata",
                type: "bytes",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "l1ERC20",
                type: "address",
            },
        ],
        name: "getUserSalt",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_l1Counterpart",
                type: "address",
            },
            {
                internalType: "address",
                name: "_router",
                type: "address",
            },
            {
                internalType: "address",
                name: "_beaconProxyFactory",
                type: "address",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_l1Token",
                type: "address",
            },
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "outboundTransfer",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_l1Token",
                type: "address",
            },
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "outboundTransfer",
        outputs: [
            {
                internalType: "bytes",
                name: "res",
                type: "bytes",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "postUpgradeInit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "router",
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
];
const _bytecode = "0x608060405234801561001057600080fd5b50611662806100206000396000f3fe6080604052600436106100b25760003560e01c806397881f8d1161006f57806397881f8d146102f2578063a0c76a9614610307578063a7e28d48146103e0578063c05e6a9514610413578063c0c53b8b14610428578063d2ce7d651461046d578063f887ea4014610507576100b2565b8063015234ab146100b75780632db09c1c146100de5780632e567b361461010f578063569f26ff146101a75780637b3a3c8b146101da57806395fcea78146102dd575b600080fd5b3480156100c357600080fd5b506100cc61051c565b60408051918252519081900360200190f35b3480156100ea57600080fd5b506100f3610522565b604080516001600160a01b039092168252519081900360200190f35b6101a5600480360360a081101561012557600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561016757600080fd5b82018360208201111561017957600080fd5b803590602001918460018302840111600160201b8311171561019a57600080fd5b509092509050610531565b005b3480156101b357600080fd5b506100cc600480360360208110156101ca57600080fd5b50356001600160a01b03166107db565b610268600480360360808110156101f057600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b81111561022a57600080fd5b82018360208201111561023c57600080fd5b803590602001918460018302840111600160201b8311171561025d57600080fd5b50909250905061080b565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102a257818101518382015260200161028a565b50505050905090810190601f1680156102cf5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102e957600080fd5b506101a5610827565b3480156102fe57600080fd5b506100cc610884565b34801561031357600080fd5b50610268600480360360a081101561032a57600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561036c57600080fd5b82018360208201111561037e57600080fd5b803590602001918460018302840111600160201b8311171561039f57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506108fa945050505050565b3480156103ec57600080fd5b506100f36004803603602081101561040357600080fd5b50356001600160a01b03166109f2565b34801561041f57600080fd5b506100f3610a8f565b34801561043457600080fd5b506101a56004803603606081101561044b57600080fd5b506001600160a01b038135811691602081013582169160409091013516610a9e565b610268600480360360c081101561048357600080fd5b6001600160a01b0382358116926020810135909116916040820135916060810135916080820135919081019060c0810160a0820135600160201b8111156104c957600080fd5b8201836020820111156104db57600080fd5b803590602001918460018302840111600160201b831117156104fc57600080fd5b509092509050610b18565b34801561051357600080fd5b506100f3610d72565b60025481565b6000546001600160a01b031681565b6000546001600160a01b031633148061056557506000546001600160a01b031661055a33610d81565b6001600160a01b0316145b6105b1576040805162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b604482015290519081900360640190fd5b6060806105be8484610d90565b9150915080516000146105dc57506040805160208101909152600081525b60006105e7896109f2565b90506105fb816001600160a01b0316610eba565b61062257600061060f8a838b8b8b89610ec0565b9050801561062057505050506107d3565b505b60408051600481526024810182526020810180516001600160e01b031663c2eeeebd60e01b178152915181516000936060936001600160a01b038716939092909182918083835b602083106106885780518252601f199092019160209182019101610669565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855afa9150503d80600081146106e8576040519150601f19603f3d011682016040523d82523d6000602084013e6106ed565b606091505b50915091506000821580610702575060208251105b1561070f5750600161073e565b600061071c83600c61106c565b90508c6001600160a01b0316816001600160a01b03161461073c57600191505b505b801561076c576107608c308d8c604051806020016040528060008152506110cc565b505050505050506107d3565b50505061077a81888861114c565b866001600160a01b0316886001600160a01b03168a6001600160a01b03167fc7f2e9c55c40a50fbc217dfc70cd39a222940dfa62145aa0ca49eb9535d4fcb2896040518082815260200191505060405180910390a45050505b505050505050565b604080516001600160a01b0383166020808301919091528251808303820181529183019092528051910120919050565b606061081d8686866000808888610b18565b9695505050505050565b60006108316111c9565b9050336001600160a01b03821614610881576040805162461bcd60e51b815260206004820152600e60248201526d2727aa2fa32927a6afa0a226a4a760911b604482015290519081900360640190fd5b50565b600354604080516397881f8d60e01b815290516000926001600160a01b0316916397881f8d916004808301926020929190829003018186803b1580156108c957600080fd5b505afa1580156108dd573d6000803e3d6000fd5b505050506040513d60208110156108f357600080fd5b5051905090565b6060632e567b3660e01b86868686610914600254886111ee565b6040516001600160a01b0380871660248301908152868216604484015290851660648301526084820184905260a060a48301908152835160c484015283519192909160e490910190602085019080838360005b8381101561097f578181015183820152602001610967565b50505050905090810190601f1680156109ac5780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909a16999099179098525095965050505050505095945050505050565b6003546000906001600160a01b031663e75b214130610a10856107db565b6040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b031681526020018281526020019250505060206040518083038186803b158015610a5d57600080fd5b505afa158015610a71573d6000803e3d6000fd5b505050506040513d6020811015610a8757600080fd5b505192915050565b6003546001600160a01b031681565b610aa88383611281565b6001600160a01b038116610af4576040805162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa122a0a1a7a760911b604482015290519081900360640190fd5b600380546001600160a01b0319166001600160a01b03929092169190911790555050565b60603415610b58576040805162461bcd60e51b81526020600482015260086024820152674e4f5f56414c554560c01b604482015290519081900360640190fd5b60006060610b65336112d7565b15610b7e57610b7485856112eb565b9092509050610bbb565b33915084848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509293505050505b805115610c05576040805162461bcd60e51b8152602060048201526013602482015272115615149057d110551057d11254d050931151606a1b604482015290519081900360640190fd5b600080610c118c6109f2565b9050610c25816001600160a01b0316610eba565b610c6b576040805162461bcd60e51b81526020600482015260126024820152711513d2d15397d393d517d111541313d6515160721b604482015290519081900360640190fd5b8b6001600160a01b0316816001600160a01b031663c2eeeebd6040518163ffffffff1660e01b815260040160206040518083038186803b158015610cae57600080fd5b505afa158015610cc2573d6000803e3d6000fd5b505050506040513d6020811015610cd857600080fd5b50516001600160a01b031614610d2d576040805162461bcd60e51b81526020600482015260156024820152742727aa2fa2ac2822a1aa22a22fa618afaa27a5a2a760591b604482015290519081900360640190fd5b610d3881858c611329565b9950610d478c858d8d876110cc565b6040805160208082019390935281518082039093018352810190529c9b505050505050505050505050565b6001546001600160a01b031681565b61111061111160901b01190190565b60608083836040811015610da357600080fd5b810190602081018135600160201b811115610dbd57600080fd5b820183602082011115610dcf57600080fd5b803590602001918460018302840111600160201b83111715610df057600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b811115610e4257600080fd5b820183602082011115610e5457600080fd5b803590602001918460018302840111600160201b83111715610e7557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250969b929a509198505050505050505050565b3b151590565b600080610ecc886107db565b600354604080516329a5c5cf60e01b81526004810184905290519293506000926001600160a01b03909216916329a5c5cf9160248082019260209290919082900301818787803b158015610f1f57600080fd5b505af1158015610f33573d6000803e3d6000fd5b505050506040513d6020811015610f4957600080fd5b505160408051630c4edbe960e11b81526001600160a01b038c811660048301908152602483019384528851604484015288519495509085169363189db7d2938e938a9392606490910190602085019080838360005b83811015610fb6578181015183820152602001610f9e565b50505050905090810190601f168015610fe35780820380516001836020036101000a031916815260200191505b509350505050600060405180830381600087803b15801561100357600080fd5b505af1158015611017573d6000803e3d6000fd5b50505050876001600160a01b0316816001600160a01b031614156110405760009250505061081d565b61105c89308988604051806020016040528060008152506110cc565b5060019998505050505050505050565b600081601401835110156110bc576040805162461bcd60e51b815260206004820152601260248201527152656164206f7574206f6620626f756e647360701b604482015290519081900360640190fd5b500160200151600160601b900490565b600254600090816110ea87866110e58b838b848b6108fa565b61139b565b604080516001600160a01b038b811682526020820186905281830189905291519293508392828a16928b16917f3073a74ecb728d10be779fe19a74a1428e20468f5b4d167bf9c73d9067847d73919081900360600190a4979650505050505050565b826001600160a01b0316638c2a993e83836040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b1580156111ac57600080fd5b505af11580156111c0573d6000803e3d6000fd5b50505050505050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b606082826040516020018083815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611238578181015183820152602001611220565b50505050905090810190601f1680156112655780820380516001836020036101000a031916815260200191505b5060408051601f19818403018152919052979650505050505050565b61128b82826113c7565b6001600160a01b0381166112d3576040805162461bcd60e51b815260206004820152600a6024820152692120a22fa927aaaa22a960b11b604482015290519081900360640190fd5b5050565b6001546001600160a01b0390811691161490565b60006060838360408110156112ff57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b811115610e4257600080fd5b604080516374f4f54760e01b81526001600160a01b0384811660048301526024820184905291516000928616916374f4f547916044808301928692919082900301818387803b15801561137b57600080fd5b505af115801561138f573d6000803e3d6000fd5b50939695505050505050565b600280546001019055600080546113bf90829086906001600160a01b031685611493565b949350505050565b6001600160a01b038216611418576040805162461bcd60e51b81526020600482015260136024820152721253959053125117d0d3d55395115494105495606a1b604482015290519081900360640190fd5b6000546001600160a01b031615611465576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b600080546001600160a01b039384166001600160a01b03199182161790915560018054929093169116179055565b604080516349460b4d60e11b81526001600160a01b0384166004820190815260248201928352835160448301528351600093849360649363928c169a938b938a938a93929088019060208501908083838d5b838110156114fd5781810151838201526020016114e5565b50505050905090810190601f16801561152a5780820380516001836020036101000a031916815260200191505b5093505050506020604051808303818588803b15801561154957600080fd5b505af115801561155d573d6000803e3d6000fd5b50505050506040513d602081101561157457600080fd5b5051604080516020808252865182820152865193945084936001600160a01b03808a1694908b16937f2b986d32a0536b7e19baa48ab949fec7b903b7fad7730820b20632d100cc3a68938a93919283929083019185019080838360005b838110156115e95781810151838201526020016115d1565b50505050905090810190601f1680156116165780820380516001836020036101000a031916815260200191505b509250505060405180910390a49594505050505056fea2646970667358221220de0fdd432b9b0606058a2924480e9f6a41e011ed8532fd6ea7f895c82c67328e64736f6c634300060b0033";
const isSuperArgs = (xs) => xs.length > 1;
class L2ERC20Gateway__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
        this.contractName = "L2ERC20Gateway";
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
exports.L2ERC20Gateway__factory = L2ERC20Gateway__factory;
L2ERC20Gateway__factory.bytecode = _bytecode;
L2ERC20Gateway__factory.abi = _abi;
