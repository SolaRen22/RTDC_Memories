const nftName =  "Memories";
const description ="The NFT of the RTDC : Memories.\\nThis is the first masterpiece made by Millo, one of members of the RTDC. Stars shining in the sky stand for the brilliant ideas of RTDC members. Fireworks embroidered in the sky represent memories of RTDC members. Firecrackers going off in the sky implies that this commemorative NFT will boost the Klaytn market.";

const hiddenImgUrl = "ipfs://QmQxWZeSbceyot1Yqb3AbfJXj1fFNiusWVm2GXR3Honb5N";
const totalNum = 260;


try {
    for (let i = 1; i <= totalNum; i++) {
        let json = `{"name":"${nftName} #${i}","description":"${description}","image":"${hiddenImgUrl}","attributes":[{"trait_type": "Background","value": "Fireworks"}]}`;
        let fs = require("fs");
        fs.writeFile(`json/${i}.json`, json, "utf8", (e)=>(e));
    }
    console.log("complete!");
} catch (error) {
    console.log(error);
}