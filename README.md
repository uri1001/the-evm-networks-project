<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/uri1001/the-evm-networks-project">
    <img src="assets/logo.png" alt="Logo" width="80" height="130">
  </a>

<h3 align="center">The EVM Networks Project</h3>

  <p align="center">
    EVM Networks & Node Providers Parameters Documentation
    <br />
    <br />
    <a href="https://github.com/uri1001/the-evm-networks-project/stars">
        <img src="https://img.shields.io/github/stars/uri1001/the-evm-networks-project.svg?colorA=21262d&colorB=161b22&style=flat" alt="Stars">
    </a>
    <a href="https://github.com/uri1001/the-evm-networks-project/forks">
        <img src="https://img.shields.io/github/forks/uri1001/the-evm-networks-project.svg?colorA=21262d&colorB=161b22&style=flat" alt="Forks">
    </a>
    <a href="https://github.com/uri1001/the-evm-networks-project/issues">
        <img src="https://img.shields.io/github/issues/uri1001/the-evm-networks-project.svg?colorA=21262d&colorB=161b22&style=flat" alt="Issues">
    </a>
        <a href="https://github.com/uri1001/the-evm-networks-project/pulse">
        <img src="https://img.shields.io/github/watchers/uri1001/the-evm-networks-project.svg?colorA=21262d&colorB=161b22&style=flat" alt="Watchers">
    </a>
    <a href="https://github.com/uri1001/the-evm-networks-project/graphs/commit-activity">
        <img src="https://img.shields.io/github/commit-activity/m/uri1001/the-evm-networks-project.svg?colorA=21262d&colorB=161b22&style=flat" alt="Commits">
    </a>
    <br />
  <a href="https://www.npmjs.com/package/evm-networks">
    <img src="https://img.shields.io/npm/v/evm-networks?colorA=21262d&colorB=161b22&style=flat" alt="Version">
  </a>
  <a href="https://www.npmjs.com/package/evm-networks">
    <img src="https://img.shields.io/npm/dm/evm-networks?colorA=21262d&colorB=161b22&style=flat" alt="Downloads per month">
  </a>
    <a href="https://github.com/uri1001/the-evm-networks-project/blob/master/LICENSE">
        <img src="https://img.shields.io/github/license/uri1001/the-evm-networks-project.svg?colorA=21262d&colorB=161b22&style=flat" alt="License">
    </a>
        <br />
    <a href="https://github.com/uri1001/the-evm-networks-project/graphs/contributors">
        <img src="https://img.shields.io/github/contributors/uri1001/the-evm-networks-project.svg?colorA=21262d&colorB=161b22&style=flat" alt="Contributors">
    </a>
    <br />
    <br />
    <a href="https://github.com/uri1001/the-evm-networks-project/">
        <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=Ethereum&logoColor=white" alt="Ethereum">
    </a>
    <br />
    <br />
    <a href="https://github.com/uri1001/the-evm-networks-project">
        <img src="https://img.shields.io/badge/Explore-Docs-X?colorA=21262d&colorB=161b22&style=for-the-badge" alt="Explore-Docs">
    </a>
    <br />
    <br />
    <a href="https://github.com/uri1001/the-evm-networks-project/issues">
        <img src="https://img.shields.io/badge/Report-Bug-X?colorA=21262d&colorB=161b22&style=for-the-badge" alt="Report-Bug">
    </a>
    &nbsp;
    <a href="https://github.com/uri1001/the-evm-networks-project/issues">
        <img src="https://img.shields.io/badge/Request-Feature-X?colorA=21262d&colorB=161b22&style=for-the-badge" alt="Request-Feature">
    </a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<br />
<details>
  <summary>Table of Contents</summary>
<br />
  <ol>
    <li>
        <a href="#1-about-the-project">About The Project</a>
        <ol>
            <li><a href="#11-documented-parameters">Documented Parameters</a></li>
        </ol>
    </li>
    <li>
        <a href="#2-project-initialization">Project Initialization</a>
        <ol>
            <li><a href="#21-prerequisites">Prerequisites</a></li>
            <li><a href="#22-installation">Installation</a></li>
        </ol>
    </li>
    <li>
        <a href="#3-project-usage">Project Usage</a>
    </li>
    <li>
        <a href="#4-networks">Networks</a>
    </li>
    <li>
        <a href="#5-node-providers">Node Providers</a>
    </li>
    <li>
        <a href="#6-tools">Tools</a>
        <ol>
            <li><a href="#61-block-explorers">Block Explorers</a></li>
            <li><a href="#62-network-listing-websites">Network Listing Websites</a></li>
        </ol>
    </li>
    <li>
        <a href="#7-resources">Resources</a>
        <ol>
            <li><a href="#71-eips-documentation">EIPs Documentation</a></li>
            <li><a href="#72-contracts-documentation">Contracts Documentation</a></li>
            <ol>
                <li><a href="#721-ens-contracts">ENS Contracts</a></li>
                <li><a href="#722-multicall-contracts">Multicall Contracts</a></li>
                <li><a href="#723-network-bridge-contracts">Network Bridge Contracts</a></li>
            </ol>
            <li><a href="#73-project-references">Project References</a></li>
        </ol>
    </li>
    <li><a href="#8-contributing">Contributing</a></li>
    <li><a href="#9-contact">Contact</a></li>
    <li><a href="#10-license">License</a></li>
  </ol>
</details>
<br />

<!-- ABOUT THE PROJECT -->

## 1. About The Project

The goal is to keep all parameters related to the connection and operation with an EVM network documented under a formal and complete format.
<br/>
<br/>
The formality comes from a certain specified tests all parameters, resources and tools related with the EVM network must pass.
<br/>
The completness comes from providing all resoruces needed for a full operability with the EVM network. This includes RPC nodes (public, for testing and for production), information related with the RPC node provider (including privacy policy), blockchain explorers (with the corresponding API endpoints) and widely used contracts documentation from the specified EVM network (for now ENS, multicall and bridge contracts).

### 1.1. Documented Parameters

-   [ ] Network Parameters
    -   [ ] ID - chain id
    -   [ ] Name - official human readable network name
    -   [ ] Network - project internal network name
    -   [ ] Information URL - network main information link
    -   [ ] Documentation URL - network main documentation link
    -   [ ] EIP URL - network definition on official Ethereum community EVM networks list (more information found in references)
    -   [ ] Testnet - test network properties
-   [ ] Native Currency
    -   [ ] Name - official human readable EVM network native currency name
    -   [ ] Symbol - official EVM network native currency symbol
    -   [ ] USymbol - official EVM network native currency smallest unit symbol
    -   [ ] Decimals - official EVM network native currency decimals
-   [ ] RPC Node
    -   [ ] HTTP - http connection endpoint (for authenticated endpoints is the base endpoint url)
    -   [ ] WSS - websocket connection endpoint (for authenticated endpoints is the base endpoint url)
    -   [ ] Provider - service provider information
    -   [ ] Authenticated - if node endpoints requires authentication key (protected endpoints should be the ones used in production)
    -   [ ] Authenticated HTTP - full endpoint example if authentication key required
    -   [ ] Authenticated WSS - full endpoint example if authentication key required
-   [ ] RPC Node Provider
    -   [ ] Name - provider official human readable name
    -   [ ] Provider - project internal provider name
    -   [ ] URL - provider official website link
    -   [ ] Data Privacy Level - level of data privacy offered in the provider node service
    -   [ ] Privacy Policy - provider privacy policy information link
-   [ ] Block Explorer
    -   [ ] Name - official human readable name
    -   [ ] Type - type of block explorer
    -   [ ] Browser URL - official browser website link
    -   [ ] API URL - official API base endpoint
    -   [ ] Documentation URL - official API documentation link
    -   [ ] Standard - EIP standard of the block explorer
-   [ ] Contracts
    -   [ ] ENS Registry - contract address & creation block number
    -   [ ] ENS Universal Resolver - contract address & creation block number
    -   [ ] Multicall - contract address & creation block number

See the [open issues](https://github.com/uri1001/the-evm-networks-project/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- PROJECT INITIALIZATION -->

## 2. Project Initialization

### 2.1. Prerequisites

Package manager installation (npm)

-   npm
    ```sh
    npm install npm@latest -g
    ```

### 2.2. Installation

1. Clone the repo
    ```sh
    git clone https://github.com/uri1001/the-evm-networks-project.git
    ```
2. Install NPM packages
    ```sh
    npm install
    ```
3. TBD
    ```sh
    mv ./.env.sample ./.env
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- PROJECT USAGE -->

## 3. Project Usage

TO BE DONE

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- NETWORKS -->

## 4. Networks

TO BE DONE

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- NODE PROVIDERS -->

## 5. Node Providers

TO BE DONE

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- TOOLS -->

## 6. Tools

### 6.1. Block Explorers

-   EVM Open-Source Blockchain Explorer - [Otterscan](https://github.com/wmitsuda/otterscan)

### 6.2. Network Listing Websites

-   Network Parameters & RPC Nodes: [Chainlist](https://chainlist.org/)

-   Network Wallet Connection Testing: [Chainid](https://chainlist.network/)

-   Network Wallet Connection Testing: [Chainlist](https://chainlist.wtf/)

-   Wagmi Compatible Networks: [Spenhouet](https://spenhouet.com/chains/)

-   Ethereum Testnets Faucet Status: [FaucetLink](https://faucetlink.to/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- RESOURCES -->

## 7. Resources

### 7.1. EIPs Documentation

-   EIP-155 - [Official Proposal](https://eips.ethereum.org/EIPS/eip-155/)

-   EIP-3014 - [Official Proposal](https://eips.ethereum.org/EIPS/eip-3014/)

-   EIP-3770 - [Official Proposal](https://eips.ethereum.org/EIPS/eip-3770)

-   EIP-4527 - [Official Proposal](https://eips.ethereum.org/EIPS/eip-4527)

-   EIP-3091 - [Official Proposal](https://eips.ethereum.org/EIPS/eip-3091)

### 7.2. Contracts Documentation

-   Contracts Documentation - [Documentation](https://docs.soliditylang.org/en/latest/contracts.html)

    #### 7.2.1. ENS Contracts

    -   Ethereum Name Service Documentation - [ENS](https://docs.ens.domains/)

    #### 7.2.2. Multicall Contracts

    -   Multicall Contracts - [Multicall](https://github.com/mds1/multicall/)

    #### 7.2.3. Network Bridge Contracts

    -   TO BE DONE - [TBD]()

### 7.3. Project References

-   Ethereum Community EVM Networks List - [Networks List](https://github.com/ethereum-lists/chains/)

-   WagmiSH EVM Networks Repository - [Networks Repository](https://github.com/wagmi-dev/references/tree/f0f19f3c36400058ff8fdf9eb01541a2f43a92fe/packages/chains/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 8. Contributing

TO BE DONE

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## 9. Contact

Oriol Rodríguez Setó - uri1001@pm.me

Project Link: [https://github.com/uri1001/the-evm-networks-project](https://github.com/uri1001/the-evm-networks-project)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 10. License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
