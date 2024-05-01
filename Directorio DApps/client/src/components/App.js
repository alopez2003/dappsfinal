/* eslint-disable */

// Import React package
import React from "react";

// Import component CSS style
import "./App.css";

// Import helper functions
import getWeb3 from "../helpers/getWeb3";

//////////////////////////////////////////////////////////////////////////////////|
//        CONTRACT ADDRESS           &          CONTRACT ABI                      |
//////////////////////////////////////////////////////////////////////////////////|                                                             |
const CONTRACT_ADDRESS = require("../contracts/Integrity.json").networks[1337].address
const CONTRACT_ABI = require("../contracts/Integrity.json").abi
const CONTRACT_NAME = require("../contracts/Integrity.json").contractName

export default class App extends React.Component {
  state = { web3Provider: null, accounts: null, networkId: null, contract: null, storageValue: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the network ID
      const networkId = await web3.eth.net.getId();

      // Create the Smart Contract instance
      const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3Provider: web3, accounts: accounts, networkId, contract });

      // --------- TO LISTEN TO EVENTS AFTER EVERY COMPONENT MOUNT ---------
      this.handleMetamaskEvent()
//      this.getIntegrityInformation()

    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
      console.log(CONTRACT_ADDRESS);
      console.log(CONTRACT_ABI);
      console.log(CONTRACT_NAME);
    }
  };

  // --------- METAMASK EVENTS ---------
  handleMetamaskEvent = async () => {
    window.ethereum.on('accountsChanged', function (accounts) {
      // Time to reload your interface with accounts[0]!
      alert("Incoming event from Metamask: Account changed 🦊")
      window.location.reload()
    })

    window.ethereum.on('networkChanged', function (networkId) {
      // Time to reload your interface with the new networkId
      alert("Incoming event from Metamask: Network changed 🦊")
      window.location.reload()
    })
  }


  // ------------ GET INTEGRITY INFORMATION FUNCTION ------------

getIntegrityInformation = async () => {
    const { accounts, contract } = this.state;


    // Get the highest price and bidder, and the status of the auction
    const fupdaterc = await contract.methods.updater().call();
    this.setState ({ fupdater: fupdaterc })
    const fnamerc = await contract.methods.namer().call();
    this.setState ({ fnamer : fnamerc })
    const ffilerc = await contract.methods.filer().call();
    this.setState ({ ffiler : ffilerc })
    const fhash_verifyc = await contract.methods.hash_verify().call();
    this.setState ({ fhash_verify : fhash_verifyc })
//    const fupdater = await contract.methods.originalOwner().call();
//    const newOwner = await contract.methods.newOwner().call();
//    const isActive = await contract.methods.isActive().call();

    //Save new states
//    this.setState({ fupdater, fnamer, ffiler, fhash_verify })
}


 // ------------ METAMASK SWITCH NETWORK ------------
 switchNetwork = async () => {
   try {
     await window.ethereum.request({
       method: 'wallet_switchEthereumChain',
       params: [
         {
           chainId: this.state.web3Provider.utils.toHex(1337)
         }
       ]
     });
   } catch (switchError) {
     if (switchError.code === 4902) {
       try {
         await window.ethereum.request({
           method: 'wallet_addEthereumChain',
           params: [
             {
               chainId: this.state.web3Provider.utils.toHex(1337),
               chainName: 'Ganache',
               rpcUrls: ['http://127.0.0.1:7545'],
             },
           ],
         });
       } catch (addError) {
         console.log(addError)
       }
     }
   }
 }


 // ------------ SIGN WITH METAMASK ------------
// signMessage = async () => {
//   const { accounts, web3Provider } = this.state;
//   var signature = await web3Provider.eth.personal.sign("Esto es un mensaje que quiero firmar", accounts[0])
//   this.setState({ signature: signature, signer: accounts[0] });
// }



  render() {
    if (!this.state.web3Provider) {
      return <div className="App-no-web3">
        <h3>No Web3 connection... 🧐</h3>
        <p>Jump to the next chapter to configure the Web3 Provider.</p>
        <h3>Let's go! ⏭️</h3>
      </div>;
    }
    return (
      <div className="App">

        {/* ---- Context Information: Account & Network ---- */}

        <div className="Auction-header">
          <div className="Header-context-information">
            <p> Network connected: {this.state.networkId}</p>
            <p> Your address: {this.state.accounts[0]}</p>

            {this.state.networkId !== 1337 && <p id="inline">This DAPP is currently working on Ganache, please press the button</p>}
            {this.state.networkId !== 1337 && <button onClick={this.switchNetwork}>Switch to Ganache</button>}

          </div>
        </div>

                    <p><b>Nombre:</b></p> {this.state.fnamer}
                    <p><b>Archivo:</b></p> {this.state.ffiler}
                    <p><b>Address:</b></p> {this.state.fupdater}
                    <p><b>Hash:</b></p> {this.state.fhash_verify}

//                    {/* Button to sign a message (i.e. sign the bid) */}
//                    <button onClick={this.signMessage}>SIGN MESSAGE</button>
//                    <div style={{ overflowWrap: "anywhere" }}>
//                      {this.state.signature && <p>Signed message: {this.state.signature}</p>}
//                      {this.state.signer && <p>Signer address: {this.state.signer}</p>}
//                    </div>


        </div>

    )
  };
}
