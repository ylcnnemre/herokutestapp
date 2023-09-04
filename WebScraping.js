const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

// ChromeDriver'ı başlatın
const options = new chrome.Options();

const driver = new Builder().forBrowser('chrome').setChromeOptions(options).build();

// Web sayfasını açın

const getTitle = async () => {
    try {
        await driver.get('https://www.apple.com/');

        // Sayfanın başlığını alın
        const title = await driver.getTitle();
        console.log('Sayfa Başlığı:', title);

        // Tarayıcıyı kapatın
        await driver.quit();
        return title
    } catch (error) {
        console.error('Hata:', error);
        return "bir hata var siteye ulaşılamıyor"
    }
}

module.exports = {
    getTitle
}