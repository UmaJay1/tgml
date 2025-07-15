const axios = require('axios');
const { convert } = require('html-to-text');

(async () => {
    const response = await axios.get('https://pubmed.ncbi.nlm.nih.gov/8839957/');
    const text = convert(response.data);

    console.log(text);
})();