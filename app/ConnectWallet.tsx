'use client';
import { useConnectWallet } from "@web3-onboard/react";
import { ethers } from 'ethers';

export default function ConnectWallet() {
    const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
    let ethersProvider

    if (wallet) {
        ethersProvider = new ethers.providers.Web3Provider(wallet.provider, 'any')
    }
    return (
        <div>
            <button disabled={connecting} onClick={() => (wallet ? disconnect(wallet) : connect())}>
                {connecting ? 'connecting' : wallet ? 'disconnect' : 'connect'}
            </button>
        </div>
    )
}