const axios = require('axios');
const { convert } = require('html-to-text');

function getTextSection(body, props) {



    return;
}

function getTextSections(body, props) {

    


}

(async () => {
//    const response = await axios.get('https://pubmed.ncbi.nlm.nih.gov/8839957/');
    const response = await axios.get('https://pubmed.ncbi.nlm.nih.gov/31740479/');

    const text = convert(response.data);

    console.log(text);
})();