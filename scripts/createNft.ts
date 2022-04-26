import editionDrop from './getContract';

const createNFT = async () => {
  try {
    await editionDrop.createBatch([
      {
        name: 'Early Access',
        description: 'This NFT will give you early access!',
        // Get the NFT from a file uploaded to IPFS
        image: 'https://ipfs.thirdweb.com/ipfs/QmNyZpZcM73kkUnajDs6uU88V9wBe4EWxK98yaVbDfQF8K/0',
      },
    ]);
    console.log('✅ Successfully created a new NFT!');
  } catch (error) {
    console.error('Failed to create the new NFT. Error: ', error);
  }
};

createNFT();
