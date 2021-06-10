const axios = require('axios');
const puppeteer = require('puppeteer');
const handlebars = require('handlebars');

class CertificateService {
  async emit(html, data) {
    console.log(html);
    const htmlContent = await this.getHtmlContent(html);
    const filledHtml = await this.fillHtmlData(htmlContent, data);
    const pdf = this.getPdfFromHtml(filledHtml);
    return pdf;
  }

  async getHtmlContent(url) {
    const response = await axios.get(url);
    return response.data;
  }

  async fillHtmlData(html, data) {
    const template = handlebars.compile(html);
    return template(data);
  }

  async getPdfFromHtml(html) {
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.setContent(html);
    const pdf = await page.pdf({
      printBackground: true,
      format: 'A4',
      landscape: true,
    });
    await browser.close();
    return pdf;
  }
}
module.exports = new CertificateService();
