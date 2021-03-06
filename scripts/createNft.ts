import editionDrop from './getContract';

const createNFT = async () => {
  try {
    await editionDrop.createBatch([
      {
        name: 'Early Access',
        description: 'This NFT will give you early access!',
        // Get the NFT from a file uploaded to IPFS
        image: 'https://bafybeieicywyvnaher24isrxoagjxbro6qr6kbzcz2feldbquoqeag7ivm.ipfs.nftstorage.link/',
      },
    ]);
    console.log('✅ Successfully created a new NFT!');
  } catch (error) {
    console.error('Failed to create the new NFT. Error: ', error);
  }
};

createNFT();
