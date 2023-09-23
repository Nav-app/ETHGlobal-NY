import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi'

import { goerli } from '@wagmi/core/chains'

// 1. Define constants
const projectId = 'e50e41d4debe88c31e73ede079804802'

// 2. Create wagmiConfig
const chains = [goerli]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, appName: 'Web3Modal' })

// 3. Create modal
const modal = createWeb3Modal({ wagmiConfig, projectId, chains })