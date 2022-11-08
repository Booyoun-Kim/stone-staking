/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PositionDashboard,
  PositionDashboardInterface,
} from "../PositionDashboard";

const _abi = [
  {
    inputs: [],
    name: "TickOutOfBounds",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "positionId",
        type: "uint256",
      },
    ],
    name: "getFees",
    outputs: [
      {
        internalType: "uint256",
        name: "fee0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fee1",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "positionId",
        type: "uint256",
      },
    ],
    name: "getPrincipal",
    outputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "positionId",
        type: "uint256",
      },
    ],
    name: "getTotal",
    outputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
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
        name: "_poolManager",
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
    name: "poolManager",
    outputs: [
      {
        internalType: "contract IConcentratedLiquidityPoolManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610e5e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063d5a06d4c11610050578063d5a06d4c146100ae578063da4779e0146100c1578063dc4c90d3146100d457600080fd5b80631feef08e1461006c578063c4d66de814610099575b600080fd5b61007f61007a366004610b4c565b61011f565b604080519283526020830191909152015b60405180910390f35b6100ac6100a7366004610b8a565b610160565b005b61007f6100bc366004610b4c565b6102c6565b61007f6100cf366004610b4c565b61037b565b6000546100fa9062010000900473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610090565b60008061012b8361037b565b909250905060008061013c856102c6565b909250905061014b8285610bd6565b93506101578184610bd6565b92505050915091565b600054610100900460ff1661017b5760005460ff161561017f565b303b155b61020f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a6564000000000000000000000000000000000000606482015260840160405180910390fd5b600054610100900460ff1615801561024e57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000166101011790555b600080547fffffffffffffffffffff0000000000000000000000000000000000000000ffff166201000073ffffffffffffffffffffffffffffffffffffffff85160217905580156102c257600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b5050565b600080546040517fed7bba9a00000000000000000000000000000000000000000000000000000000815260048101849052829162010000900473ffffffffffffffffffffffffffffffffffffffff169063ed7bba9a9060240160806040518083038186803b15801561033757600080fd5b505afa15801561034b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061036f9190610bee565b50919590945092505050565b600080546040517f99fbab8800000000000000000000000000000000000000000000000000000000815260048101849052829182916201000090910473ffffffffffffffffffffffffffffffffffffffff16906399fbab88906024016101206040518083038186803b1580156103f057600080fd5b505afa158015610404573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104289190610cc6565b90506000610439826040015161055a565b73ffffffffffffffffffffffffffffffffffffffff1690506000610460836060015161055a565b73ffffffffffffffffffffffffffffffffffffffff1690506000836000015173ffffffffffffffffffffffffffffffffffffffff1663a035b1fe6040518163ffffffff1660e01b815260040160206040518083038186803b1580156104c457600080fd5b505afa1580156104d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104fc9190610d64565b73ffffffffffffffffffffffffffffffffffffffff16905061053883838387602001516fffffffffffffffffffffffffffffffff1660006108ed565b6fffffffffffffffffffffffffffffffff918216999116975095505050505050565b60008060008360020b12610571578260020b61057e565b8260020b61057e90610d81565b90506105a97ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff27618610dba565b62ffffff168111156105e7576040517ff87dc40c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000600182166106085770010000000000000000000000000000000061061a565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff169050600282161561064e576ffff97272373d413259a46990580e213a0260801c5b600482161561066d576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b600882161561068c576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b60108216156106ab576fffcb9843d60f6159c9db58835c9266440260801c5b60208216156106ca576fff973b41fa98c081472e6896dfb254c00260801c5b60408216156106e9576fff2ea16466c96a3843ec78b326b528610260801c5b6080821615610708576ffe5dee046a99a2a811c461f1969c30530260801c5b610100821615610728576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b610200821615610748576ff987a7253ac413176f2b074cf7815e540260801c5b610400821615610768576ff3392b0822b70005940c7a398e4b70f30260801c5b610800821615610788576fe7159475a2c29b7443b29c7fa6e889d90260801c5b6110008216156107a8576fd097f3bdfd2022b8845ad8f792aa58250260801c5b6120008216156107c8576fa9f746462d870fdf8a65dc1f90e061e50260801c5b6140008216156107e8576f70d869a156d2a1b890bb3df62baf32f70260801c5b618000821615610808576f31be135f97d08fd981231505542fcfa60260801c5b62010000821615610829576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b62020000821615610849576e5d6af8dedb81196699c329225ee6040260801c5b62040000821615610868576d2216e584f5fa1ea926041bedfe980260801c5b62080000821615610885576b048a170391f7dc42444e8fa20260801c5b60008460020b13156108c457807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff816108c0576108c0610df9565b0490505b6401000000008106156108d85760016108db565b60005b60ff16602082901c0192505050919050565b6000808486116109125761090b6109068589898761095c565b6109aa565b9050610952565b86851161092f57610928610906858989876109ce565b9150610952565b61093e610906858789876109ce565b915061094f6109068589888761095c565b90505b9550959350505050565b600081156109855761097e858585036c01000000000000000000000000610a1f565b90506109a2565b61099f858585036c01000000000000000000000000610a7b565b90505b949350505050565b806fffffffffffffffffffffffffffffffff811681146109c957600080fd5b919050565b600081156109f65761097e6109ea606087901b86860386610a1f565b85808204910615150190565b83610a08606087901b82860386610a7b565b81610a1557610a15610df9565b0495945050505050565b6000610a2c848484610a7b565b90508180610a3c57610a3c610df9565b83850915610a74577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8110610a7057600080fd5b6001015b9392505050565b600080807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8587098587029250828110838203039150508060001415610ad35760008411610ac857600080fd5b508290049050610a74565b808411610adf57600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b600060208284031215610b5e57600080fd5b5035919050565b73ffffffffffffffffffffffffffffffffffffffff81168114610b8757600080fd5b50565b600060208284031215610b9c57600080fd5b8135610a7481610b65565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008219821115610be957610be9610ba7565b500190565b60008060008060808587031215610c0457600080fd5b505082516020840151604085015160609095015191969095509092509050565b604051610120810167ffffffffffffffff81118282101715610c6f577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405290565b80516109c981610b65565b80516fffffffffffffffffffffffffffffffff811681146109c957600080fd5b8051600281900b81146109c957600080fd5b805163ffffffff811681146109c957600080fd5b60006101208284031215610cd957600080fd5b610ce1610c24565b610cea83610c75565b8152610cf860208401610c80565b6020820152610d0960408401610ca0565b6040820152610d1a60608401610ca0565b6060820152610d2b60808401610cb2565b608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b600060208284031215610d7657600080fd5b8151610a7481610b65565b60007f8000000000000000000000000000000000000000000000000000000000000000821415610db357610db3610ba7565b5060000390565b60008160020b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff800000811415610df057610df0610ba7565b60000392915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fdfea2646970667358221220a8901b05f9e5160b5fb9139b83a0ee9cb4d481070fa7a612c0d26553c9e9709764736f6c63430008090033";

type PositionDashboardConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PositionDashboardConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PositionDashboard__factory extends ContractFactory {
  constructor(...args: PositionDashboardConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PositionDashboard> {
    return super.deploy(overrides || {}) as Promise<PositionDashboard>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PositionDashboard {
    return super.attach(address) as PositionDashboard;
  }
  connect(signer: Signer): PositionDashboard__factory {
    return super.connect(signer) as PositionDashboard__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PositionDashboardInterface {
    return new utils.Interface(_abi) as PositionDashboardInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PositionDashboard {
    return new Contract(address, _abi, signerOrProvider) as PositionDashboard;
  }
}