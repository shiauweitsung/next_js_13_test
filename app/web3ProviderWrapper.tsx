'use client';

import { Web3OnboardProvider } from '@web3-onboard/react';
import initWeb3Onboard from '../wallet/initWeb3Onboard';

export default function Web3ProviderWrapper({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Web3OnboardProvider web3Onboard={initWeb3Onboard}>
            {children}
        </Web3OnboardProvider>
    )
}
