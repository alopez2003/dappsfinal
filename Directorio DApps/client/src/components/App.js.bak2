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
const CONTRACT_ADDRESS = require("../contracts/Integrity.json").networks[5777].address
const CONTRACT_ABI = require("../contracts/Integrity.json").abi;
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
      this.setState({ web3Provider: web3, accounts, networkId, contract });

      // --------- TO LISTEN TO EVENTS AFTER EVERY COMPONENT MOUNT ---------
      this.handleMetamaskEvent()

    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
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



// ------------ GET AUCTION INFORMATION FUNCTION ------------
  getIntegrityInformation = async () => {
    const { accounts, contract } = this.state;

    // Get the auction information
//    const response = await contract.methods.getIntegrityInfo().call({ from: accounts[0] });
//    this.setState({ integrityInfo: response })

    // Get the highest price and bidder, and the status of the auction
    const hash_verify = await contract.methods.hash_verify().call()
    const updater = await contract.methods.updater().call()
    const filer = await contract.methods.filer().call()
    const namer = await contract.methods.name().call()
//    const imageURI = await contract.methods.getImageURI().call();
//    const highestPrice = await contract.methods.getHighestPrice().call();
//    const highestBidder = await contract.methods.getHighestBidder().call();
//    const basePrice = await contract.methods.getBasePrice().call();
//    const originalOwner = await contract.methods.originalOwner().call();
//    const newOwner = await contract.methods.newOwner().call();
//    const isActive = await contract.methods.isActive().call();

    // Save new states
    this.setState({ hash_verify, updater, filer, namer })
  }


// ------------ HASH UPDATE FUNCTION ------------
hash_update = async () => {
  const { accounts, contract } = this.state;

  // Bid at an auction for X value
  await contract.methods.hash_update().send({ from: accounts[0], value: this.state.value });

  // Get the new values: name, file and hash
  const namer = await contract.methods.name().call();
  const filer = await contract.methods.file().call();
  const hash_verify = await contract.methods.newhash().call();

  // Update state with the result.
//  this.setState({ isActive: isActive, highestPrice, highestBidder });
};


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
	<div className="Integrity-header">
	  <div className="Header-context-information">
            <p> Network connected: {this.state.networkId}</p>
            <p> Your address: {this.state.accounts[0]}</p>
          </div>
        </div>



      {/* ---- Integrity information ---- */}
      <div className="Integrity-component-1">
        <div className="Integrity-component-body">
          <h2 id="inline">File Integrity information</h2>
          <button id="button-call" onClick={this.getIntegrityInformation}> INFORMACION</button>
          {
//            this.state.integrityInfo &&
            <>
//              <div className="Integrity-information">
//                {/* Auction Image */}
//                <div className="Integrity-information-img">
//                  {this.state.imageURI && <img src={this.state.imageURI}></img>}
//                  {this.state.imageURI && <p><u>Descargar imágen</u> &nbsp;&nbsp; <u>Solicitar más imágenes</u></p>}
//                </div>
//                {/* Auction information */}
                <div className="Integrity-information-text">

                {/* Integrity Description */}
//                <p>{this.state.auctionInfo[0]}</p>

//                {/* Basic Information */}
//                <p><b>Nombre: </b>{this.state.namer ? "The auction is still active!! 🤩 🤩" : "The auction is not longer active 😭 😭"}</p>
//                <p><b>Created at:</b> {this.state.auctionInfo[1]}</p>
//                <p><b>Duration:</b> {this.state.auctionInfo[2]} seconds</p>

                {/* More information */}
                {this.state.namer && <p><b>Nombre del ejecutor:</b> {this.state.namer}</p>}
//                {this.state.filer && <p><b>Archivo:</b> {this.state.web3Provider.utils.fromWei(this.state.highestPrice, 'ether')} ether</p>}
                {this.state.filer && <p><b>Archivo:</b> {this.state.filer}</p>}
                {this.state.hash && <p><b>Hash del documento:</b> {this.state.hash_verify}</p>}
                {this.state.updater && <p><b>Wallet del ejecutor:</b> {this.state.updater}</p>}
              </div>
            </div>
            </>
          }
        </div>
      </div>

      {/* ---- Auction actions ---- */}
      <div className="Auction-component-2">
        <div className="Auction-component-body">
          <div className="Auction-actions">
            <h2>Auction actions</h2>

            {/* Input & Button to bid */}
            <input placeholder="Insert value in wei" onChange={(e) => this.setState({ value: e.target.value })}></input>
            <button id="button-send" onClick={this.hash_update}>ACTUALIZA</button>

          </div>
        </div>
      </div>


      </div>
    );
  }
}
