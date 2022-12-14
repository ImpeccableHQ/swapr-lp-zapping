import { ContractFactory } from "ethers";

type ZapDeploymentParams = {
    owner: string;
    factory: string;
    router: string;
    nativeCurrencyWrapper: string;
    feeToSetter: string;
};

const deploymentConfig: { [k:string]: ZapDeploymentParams} = {
    mainnet: {
        owner: "0x519b70055af55A007110B4Ff99b0eA33071c720a",
        factory: "0xd34971BaB6E5E356fd250715F5dE0492BB070452",
        router: "0xB9960d9bcA016e9748bE75dd52F02188B9d0829f",
        nativeCurrencyWrapper: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        feeToSetter: "0x288879b3CaFA044dB6Ba18ee638BBC1a233F8548",
    },
    gnosis: {
        owner: "0xe716EC63C5673B3a4732D22909b38d779fa47c3F",
        factory: "0x5D48C95AdfFD4B40c1AAADc4e08fc44117E02179",
        router: "0xE43e60736b1cb4a75ad25240E2f9a62Bff65c0C0",
        nativeCurrencyWrapper: "0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d",
        feeToSetter: "0xe3f8f55d7709770a18a30b7e0d16ae203a2c034f",
    },
    rinkeby: {
        owner: "",
        factory: "0x1D354f628Bf088Cc28a59AEf4A47FBE14Aa9985B",
        router: "0x0Ee602c11858f99aA48C7c0093a2D5F68316f05A",
        nativeCurrencyWrapper: "0xc778417E063141139Fce010982780140Aa0cD5Ab",
        feeToSetter: "",
    },
    goerli: {
        owner: "",
        factory: "0xa3Dd335F8107527796642D044a5bD0A94De4E0E4",
        router: "0x7AEE640f8085B2Dee7e1B146F5802800a9b53d03",
        nativeCurrencyWrapper: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
        feeToSetter: "",
    },
};

export const getDeploymentConfig = (networkName: string) => {
    return deploymentConfig[networkName] || undefined;
}

export const contractConstructorArgs = <T extends ContractFactory>(
    ...args: Parameters<T["deploy"]>
) => args;