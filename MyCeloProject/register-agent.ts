import * as dotenv from 'dotenv';
import { createWalletClient, createPublicClient, http, parseUnits, formatUnits } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { celo } from 'viem/chains';

dotenv.config();

// ERC-8004 Identity Registry ABI (minimal for registration)
const IDENTITY_REGISTRY_ABI = [
  {
    "inputs": [],
    "name": "register",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const;

// Celo Mainnet Identity Registry
const IDENTITY_REGISTRY = '0x8004A169FB4a3325136EB29fA0ceB6D2e539a432' as `0x${string}`;

async function main() {
  // Get private key from env
  const privateKey = process.env.PRIVATE_KEY || process.env.CLIENT_AGENT_PRIVATE_KEY;
  if (!privateKey) {
    console.error('Error: PRIVATE_KEY or CLIENT_AGENT_PRIVATE_KEY not set');
    process.exit(1);
  }

  const account = privateKeyToAccount(privateKey as `0x${string}`);

  const mainnetRpc = process.env.MAINNET_RPC_URL || 'https://forno.celo.org';

  const publicClient = createPublicClient({
    chain: celo,
    transport: http(mainnetRpc),
  });

  const walletClient = createWalletClient({
    account,
    chain: celo,
    transport: http(mainnetRpc),
  });

  console.log('Registering FalconGuard Scan-Agent on ERC-8004...');
  console.log('From address:', account.address);
  
  try {
    const hash = await walletClient.writeContract({
      account,
      address: IDENTITY_REGISTRY,
      abi: IDENTITY_REGISTRY_ABI,
      functionName: 'register',
      args: [],
      chain: celo,
    });
    
    console.log('Transaction submitted:', hash);
    console.log('Waiting for confirmation...');

    // Wait for transaction receipt
    const receipt = await publicClient.waitForTransactionReceipt({ hash });
    console.log('Transaction confirmed in block:', receipt.blockNumber);

    // Extract agent ID from Transfer event (tokenId is the agent ID)
    const transferLog = receipt.logs.find((log: any) =>
      log.topics && log.topics.length === 4 &&
      log.topics[0] === '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
    );

    if (transferLog) {
      const agentId = (transferLog as any).topics[3];
      console.log('\n✅ Agent registered successfully!');
      console.log('Agent ID:', agentId);
      console.log('8004scan URL:', `https://8004scan.io/agents/celo/${agentId}`);
      console.log('Celoscan URL:', `https://celoscan.io/nft/${IDENTITY_REGISTRY}/${agentId}`);
    }
  } catch (error) {
    console.error('Registration failed:', error);
    process.exit(1);
  }
}

main();
