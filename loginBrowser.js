const { chromium } = require('playwright');

(async () => {

    const browser = await chromium.launch({
        headless: false
    });

    const page = await browser.newPage();

    // OPEN LOGIN PAGE
    await page.goto(
      'file:///C:/Users/nithy/OneDrive/Desktop/ecom/login.html'
    );

    // ADD TEST USER
    await page.evaluate(() => {

        localStorage.setItem(
            "user",
            JSON.stringify({
                username: "admin",
                password: "1234"
            })
        );

    });

    // REFRESH PAGE
    await page.reload();

    // ENTER USERNAME
    await page.fill('#loginUser', 'admin');

    // ENTER PASSWORD
    await page.fill('#loginPass', '1234');

    // CLICK LOGIN
    await page.click('#loginBtn');

    // WAIT
    await page.waitForTimeout(2000);

    // CHECK RESULT
    const message = await page.locator('#loginMessage')
        .textContent();

    if (message.includes('successful')) {

        console.log("TEST CASE PASSED SUCCESSFULLY");

    } else {

        console.log("TEST CASE FAILED");
    }

})();
