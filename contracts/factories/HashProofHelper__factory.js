"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashProofHelper__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "fullHash",
                type: "bytes32",
            },
            {
                internalType: "uint64",
                name: "offset",
                type: "uint64",
            },
        ],
        name: "NotProven",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "fullHash",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "uint64",
                name: "offset",
                type: "uint64",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "part",
                type: "bytes",
            },
        ],
        name: "PreimagePartProven",
        type: "event",
    },
    {
        inputs: [],
        name: "clearSplitProof",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "fullHash",
                type: "bytes32",
            },
            {
                internalType: "uint64",
                name: "offset",
                type: "uint64",
            },
        ],
        name: "getPreimagePart",
        outputs: [
            {
                internalType: "bytes",
                name: "",
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
                name: "",
                type: "address",
            },
        ],
        name: "keccakStates",
        outputs: [
            {
                internalType: "uint64",
                name: "offset",
                type: "uint64",
            },
            {
                internalType: "bytes",
                name: "part",
                type: "bytes",
            },
            {
                internalType: "uint256",
                name: "length",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
            {
                internalType: "uint64",
                name: "offset",
                type: "uint64",
            },
        ],
        name: "proveWithFullPreimage",
        outputs: [
            {
                internalType: "bytes32",
                name: "fullHash",
                type: "bytes32",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
            {
                internalType: "uint64",
                name: "offset",
                type: "uint64",
            },
            {
                internalType: "uint256",
                name: "flags",
                type: "uint256",
            },
        ],
        name: "proveWithSplitPreimage",
        outputs: [
            {
                internalType: "bytes32",
                name: "fullHash",
                type: "bytes32",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50611cea806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063740085d71461005c57806379754cba14610085578063ae364ac2146100a6578063b7465799146100b0578063d4e5dd2b146100d2575b600080fd5b61006f61006a3660046118e0565b6100e5565b60405161007c9190611959565b60405180910390f35b6100986100933660046119bb565b6101d8565b60405190815260200161007c565b6100ae6106cb565b005b6100c36100be366004611a16565b610713565b60405161007c93929190611a3f565b6100986100e0366004611a71565b6107c9565b6000828152602081815260408083206001600160401b0385168452909152902080546060919060ff16610142576040516309cb23c960e11b8152600481018590526001600160401b03841660248201526044015b60405180910390fd5b80600101805461015190611ac4565b80601f016020809104026020016040519081016040528092919081815260200182805461017d90611ac4565b80156101ca5780601f1061019f576101008083540402835291602001916101ca565b820191906000526020600020905b8154815290600101906020018083116101ad57829003601f168201915b505050505091505092915050565b60006001821615156002831615610230573360009081526001602081905260408220805467ffffffffffffffff191681559190610217908301826117a2565b6102256002830160006117df565b600982016000905550505b80806102445750610242608886611b15565b155b6102845760405162461bcd60e51b81526020600482015260116024820152701393d517d09313d0d2d7d0531251d39151607a1b6044820152606401610139565b3360009081526001602052604090206009810154806102bc57815467ffffffffffffffff19166001600160401b038716178255610306565b81546001600160401b038781169116146103065760405162461bcd60e51b815260206004820152600b60248201526a1112519197d3d19194d15560aa1b6044820152606401610139565b61031282898986610920565b8061032760206001600160401b038916611b3f565b11801561034057508160090154866001600160401b0316105b1561045a57600081876001600160401b0316111561036e5761036b826001600160401b038916611b57565b90505b60008261038560206001600160401b038b16611b3f565b61038f9190611b57565b90508881111561039c5750875b815b8181101561045657846001018b8b838181106103bc576103bc611b6e565b9050013560f81c60f81b90808054806103d490611ac4565b80601f81146103e2576103f8565b83600052602060002060ff1984168155603f9350505b506002919091019091558154600116156104215790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b84040217905550808061044e90611b84565b91505061039e565b5050505b8261046c5750600092506106c3915050565b60005b602081101561053c576000610485600883611b9f565b9050610492600582611b9f565b61049d600583611b15565b6104a8906005611bb3565b6104b29190611b3f565b905060006104c1600884611b15565b6104cc906008611bb3565b8560020183601981106104e1576104e1611b6e565b60048104909101546001600160401b036008600390931683026101000a9091041690911c9150610512908490611bb3565b61051d9060f8611b57565b60ff909116901b9590951794508061053481611b84565b91505061046f565b50604051806040016040528060011515815260200183600101805461056090611ac4565b80601f016020809104026020016040519081016040528092919081815260200182805461058c90611ac4565b80156105d95780601f106105ae576101008083540402835291602001916105d9565b820191906000526020600020905b8154815290600101906020018083116105bc57829003601f168201915b50505091909252505060008581526020818152604080832086546001600160401b0316845282529091208251815460ff1916901515178155828201518051919261062b926001850192909101906117ee565b505082546040516001600160401b03909116915085907ff88493e8ac6179d3c1ba8712068367d7ecdd6f30d3b5de01198e7a449fe2802c90610671906001870190611bd2565b60405180910390a33360009081526001602081905260408220805467ffffffffffffffff1916815591906106a7908301826117a2565b6106b56002830160006117df565b600982016000905550505050505b949350505050565b3360009081526001602081905260408220805467ffffffffffffffff1916815591906106f9908301826117a2565b6107076002830160006117df565b60098201600090555050565b6001602081905260009182526040909120805491810180546001600160401b039093169261074090611ac4565b80601f016020809104026020016040519081016040528092919081815260200182805461076c90611ac4565b80156107b95780601f1061078e576101008083540402835291602001916107b9565b820191906000526020600020905b81548152906001019060200180831161079c57829003601f168201915b5050505050908060090154905083565b600083836040516107db929190611c7a565b604051908190039020905060606001600160401b03831684111561087957600061080e6001600160401b03851686611b57565b9050602081111561081d575060205b856001600160401b038516866108338483611b3f565b9261084093929190611c8a565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929450505050505b6040805180820182526001808252602080830185815260008781528083528581206001600160401b038a1682528352949094208351815460ff1916901515178155935180519394936108d29385019291909101906117ee565b50905050826001600160401b0316827ff88493e8ac6179d3c1ba8712068367d7ecdd6f30d3b5de01198e7a449fe2802c836040516109109190611959565b60405180910390a3509392505050565b828290508460090160008282546109379190611b3f565b90915550505b81158015610949575080155b1561095357610ba2565b60005b6088811015610a7a5760008382101561098c5784848381811061097b5761097b611b6e565b919091013560f81c91506109af9050565b81841415610998576001175b6109a460016088611b57565b8214156109af576080175b60006109bc600884611b9f565b90506109c9600582611b9f565b6109d4600583611b15565b6109df906005611bb3565b6109e99190611b3f565b90506109f6600884611b15565b610a01906008611bb3565b6001600160401b03168260ff166001600160401b0316901b876002018260198110610a2e57610a2e611b6e565b6004810490910180546001600160401b0360086003909416939093026101000a808204841690941883168402929093021990921617905550819050610a7281611b84565b915050610956565b50610a83611872565b60005b6019811015610af557856002018160198110610aa457610aa4611b6e565b600491828204019190066008029054906101000a90046001600160401b03166001600160401b0316828260198110610ade57610ade611b6e565b602002015280610aed81611b84565b915050610a86565b50610aff81610ba8565b905060005b6019811015610b7b57818160198110610b1f57610b1f611b6e565b6020020151866002018260198110610b3957610b39611b6e565b600491828204019190066008026101000a8154816001600160401b0302191690836001600160401b031602179055508080610b7390611b84565b915050610b04565b506088831015610b8b5750610ba2565b610b988360888187611c8a565b935093505061093d565b50505050565b610bb0611872565b610bb8611891565b610bc0611891565b610bc8611872565b600060405180610300016040528060018152602001618082815260200167800000000000808a8152602001678000000080008000815260200161808b81526020016380000001815260200167800000008000808181526020016780000000000080098152602001608a81526020016088815260200163800080098152602001638000000a8152602001638000808b815260200167800000000000008b8152602001678000000000008089815260200167800000000000800381526020016780000000000080028152602001678000000000000080815260200161800a815260200167800000008000000a81526020016780000000800080818152602001678000000000008080815260200163800000018152602001678000000080008008815250905060005b6018811015611797576080878101516060808a01516040808c01516020808e01518e511890911890921890931889526101208b01516101008c015160e08d015160c08e015160a08f0151181818189089018190526101c08b01516101a08c01516101808d01516101608e01516101408f0151181818189289019283526102608b01516102408c01516102208d01516102008e01516101e08f015118181818918901919091526103008a01516102e08b01516102c08c01516102a08d01516102808e0151181818189288018390526001600160401b0360028202166001603f1b91829004179092188652510485600260200201516002026001600160401b03161785600060200201511884600160200201526001603f1b856003602002015181610e1957610e19611aff565b0485600360200201516002026001600160401b03161785600160200201511884600260200201526001603f1b856004602002015181610e5a57610e5a611aff565b0485600460200201516002026001600160401b03161785600260058110610e8357610e83611b6e565b602002015118606085015284516001603f1b9086516060808901519390920460029091026001600160401b031617909118608086810191825286518a5118808b5287516020808d018051909218825289516040808f0180519092189091528a518e8801805190911890528a51948e0180519095189094528901805160a08e0180519091189052805160c08e0180519091189052805160e08e018051909118905280516101008e0180519091189052516101208d018051909118905291880180516101408d018051909118905280516101608d018051909118905280516101808d018051909118905280516101a08d0180519091189052516101c08c018051909118905292870180516101e08c018051909118905280516102008c018051909118905280516102208c018051909118905280516102408c0180519091189052516102608b018051909118905281516102808b018051909118905281516102a08b018051909118905281516102c08b018051909118905281516102e08b018051909118905290516103008a01805190911890529084525163100000009060208901516001600160401b03641000000000909102169190041761010084015260408701516001603d1b9060408901516001600160401b03600890910216919004176101608401526060870151628000009060608901516001600160401b036502000000000090910216919004176102608401526080870151654000000000009060808901516001600160401b036204000090910216919004176102c084015260a08701516001603f1b900487600560200201516002026001600160401b031617836002601981106110f3576110f3611b6e565b602002015260c08701516210000081046001602c1b9091026001600160401b039081169190911760a085015260e0880151664000000000000081046104009091028216176101a08501526101008801516208000081046520000000000090910282161761020085015261012088015160048082029092166001603e1b909104176103008501526101408801516101408901516001600160401b036001603e1b909102169190041760808401526101608701516001603a1b906101608901516001600160401b036040909102169190041760e084015261018087015162200000906101808901516001600160401b036001602b1b90910216919004176101408401526101a08701516602000000000000906101a08901516001600160401b0361800090910216919004176102408401526101c08701516008906101c08901516001600160401b036001603d1b90910216919004176102a08401526101e0870151641000000000906101e08901516001600160401b03631000000090910216919004176020840152610200808801516102008901516001600160401b0366800000000000009091021691900417610120840152610220870151648000000000906102208901516001600160401b03630200000090910216919004176101808401526102408701516001602b1b906102408901516001600160401b036220000090910216919004176101e0840152610260870151610100906102608901516001600160401b03600160381b90910216919004176102e0840152610280870151642000000000906102808901516001600160401b036308000000909102169190041760608401526102a08701516001602c1b906102a08901516001600160401b0362100000909102169190041760c08401526102c08701516302000000906102c08901516001600160401b0364800000000090910216919004176101c08401526102e0870151600160381b906102e08901516001600160401b036101009091021691900417610220840152610300870151660400000000000090048760186020020151614000026001600160401b031617836014602002015282600a602002015183600560200201511916836000602002015118876000602002015282600b602002015183600660200201511916836001602002015118876001602002015282600c602002015183600760200201511916836002602002015118876002602002015282600d602002015183600860200201511916836003602002015118876003602002015282600e602002015183600960200201511916836004602002015118876004602002015282600f602002015183600a602002015119168360056020020151188760056020020152826010602002015183600b602002015119168360066020020151188760066020020152826011602002015183600c602002015119168360076020020151188760076020020152826012602002015183600d602002015119168360086020020151188760086020020152826013602002015183600e602002015119168360096020020151188760096020020152826014602002015183600f6020020151191683600a60200201511887600a602002015282601560200201518360106020020151191683600b60200201511887600b602002015282601660200201518360116020020151191683600c60200201511887600c602002015282601760200201518360126020020151191683600d60200201511887600d602002015282601860200201518360136020020151191683600e60200201511887600e602002015282600060200201518360146020020151191683600f60200201511887600f602002015282600160200201518360156020020151191683601060200201511887601060200201528260026020020151836016602002015119168360116020020151188760116020020152826003602002015183601760200201511916836012602002015118876012602002015282600460200201518360186020020151191683601360200201511887601360200201528260056020020151836000602002015119168360146020020151188760146020020152826006602002015183600160200201511916836015602002015118876015602002015282600760200201518360026020020151191683601660200201511887601660200201528260086020020151836003602002015119168360176020020151188760176020020152826009602002015183600460200201511916836018602002015118876018602002015281816018811061178557611785611b6e565b60200201518751188752600101610cee565b509495945050505050565b5080546117ae90611ac4565b6000825580601f106117be575050565b601f0160209004906000526020600020908101906117dc91906118af565b50565b506117dc9060078101906118af565b8280546117fa90611ac4565b90600052602060002090601f01602090048101928261181c5760008555611862565b82601f1061183557805160ff1916838001178555611862565b82800160010185558215611862579182015b82811115611862578251825591602001919060010190611847565b5061186e9291506118af565b5090565b6040518061032001604052806019906020820280368337509192915050565b6040518060a001604052806005906020820280368337509192915050565b5b8082111561186e57600081556001016118b0565b80356001600160401b03811681146118db57600080fd5b919050565b600080604083850312156118f357600080fd5b82359150611903602084016118c4565b90509250929050565b6000815180845260005b8181101561193257602081850181015186830182015201611916565b81811115611944576000602083870101525b50601f01601f19169290920160200192915050565b60208152600061196c602083018461190c565b9392505050565b60008083601f84011261198557600080fd5b5081356001600160401b0381111561199c57600080fd5b6020830191508360208285010111156119b457600080fd5b9250929050565b600080600080606085870312156119d157600080fd5b84356001600160401b038111156119e757600080fd5b6119f387828801611973565b9095509350611a069050602086016118c4565b9396929550929360400135925050565b600060208284031215611a2857600080fd5b81356001600160a01b038116811461196c57600080fd5b6001600160401b0384168152606060208201526000611a61606083018561190c565b9050826040830152949350505050565b600080600060408486031215611a8657600080fd5b83356001600160401b03811115611a9c57600080fd5b611aa886828701611973565b9094509250611abb9050602085016118c4565b90509250925092565b600181811c90821680611ad857607f821691505b60208210811415611af957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601260045260246000fd5b600082611b2457611b24611aff565b500690565b634e487b7160e01b600052601160045260246000fd5b60008219821115611b5257611b52611b29565b500190565b600082821015611b6957611b69611b29565b500390565b634e487b7160e01b600052603260045260246000fd5b6000600019821415611b9857611b98611b29565b5060010190565b600082611bae57611bae611aff565b500490565b6000816000190483118215151615611bcd57611bcd611b29565b500290565b600060208083526000845481600182811c915080831680611bf457607f831692505b858310811415611c1257634e487b7160e01b85526022600452602485fd5b878601838152602001818015611c2f5760018114611c4057611c6b565b60ff19861682528782019650611c6b565b60008b81526020902060005b86811015611c6557815484820152908501908901611c4c565b83019750505b50949998505050505050505050565b8183823760009101908152919050565b60008085851115611c9a57600080fd5b83861115611ca757600080fd5b505082019391909203915056fea2646970667358221220f64f81b9401e863677eafe7c7a2afc1bf84b6131fb25288322661dfca69d957f64736f6c63430008090033";
const isSuperArgs = (xs) => xs.length > 1;
class HashProofHelper__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
        this.contractName = "HashProofHelper";
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
exports.HashProofHelper__factory = HashProofHelper__factory;
HashProofHelper__factory.bytecode = _bytecode;
HashProofHelper__factory.abi = _abi;
