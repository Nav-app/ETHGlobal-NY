import QuickNode from '@quicknode/sdk';
// if you are using CommonJS, use this line instead:
// const QuickNode = require('@quicknode/sdk')

const qn = new QuickNode.API();

qn.nfts
  .getByWallet({
    address: '0xE8082fFf7d65EFB95b97a3B42b7e8A0C2D218cC1',
    first: 5,
  })
  .then((response) => console.log(response));