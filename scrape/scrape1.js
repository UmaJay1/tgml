
const puppeteer = require('puppeteer');

// https://scrapingant.com/blog/puppeteer-get-all-text

/*
(async () => {
  //const browser = await puppeteer.launch();

  const browser = await puppeteer.launch({headless: false});
  
  const page = await browser.newPage();
  
//  await page.goto('https://developer.chrome.com/');

  await page.goto('https://royalsocietypublishing.org/doi/full/10.1098/rstb.2020.0233');


  // Set screen size
  await page.setViewport({width: 1080, height: 1024});

  // Type into search box
  await page.type('.search-box__input', 'automate beyond recorder');

  // Wait and click on first result
  const searchResultSelector = '.search-box__link';
  await page.waitForSelector(searchResultSelector);
  await page.click(searchResultSelector);

  // Locate the full title with a unique string
  const textSelector = await page.waitForSelector(
    'text/Customize and automate'
  );
  const fullTitle = await textSelector.evaluate(el => el.textContent);

  // Print the full title
  console.log('The title of this blog post is "%s".', fullTitle);

  await browser.close();
})();

*/


(async () => {
  const browser = await puppeteer.launch({headless: false});

    const page = (await browser.pages())[0];
    await page.goto('https://ajp.psychiatryonline.org/doi/10.1176/appi.ajp.2019.19010080');

    const extractedText = await page.$eval('*', (el) => el.innerText);
    console.log(extractedText);

    await browser.close();


})();