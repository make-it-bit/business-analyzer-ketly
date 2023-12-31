import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export const GET = async (request) => {
  const { searchParams } = new URL(request.url);
  const businessName = searchParams.get('businessName');
  const data = await fetchData(businessName);
  return NextResponse.json(data);
};

const fetchData = async (businessName) => {
  try {
    const browser = await puppeteer.launch({
      headless: 'new',
      defaultViewport: null,
    });
    const page = await browser.newPage();
    await page.goto('https://ariregister.rik.ee/est', {
      waitUntil: 'domcontentloaded',
    });
    await new Promise((resolve) => setTimeout(resolve, 2000));

    await page.type('#company_search', businessName);
    await page.click('.btn-search');
    await new Promise((resolve) => setTimeout(resolve, 3000));
    page.click(
      'div.ar__center__bg > div > div > div > div:nth-child(1) > div.float-left.d-flex.align-items-center > div.d-inline-block.mr-4.mb-2 > a:nth-child(2)'
    );
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const businessBlock = await page.waitForSelector('div.ar__center__bg > div > div > div > div:nth-child(2)');
    const registryCodeBlock = await businessBlock?.waitForSelector('.row > .col');
    const registryCode = await registryCodeBlock?.evaluate((element) => element.textContent);
    await page.goto(`https://ariregister.rik.ee/est/company/${registryCode}`, {
      waitUntil: 'domcontentloaded',
    });
    await new Promise((resolve) => setTimeout(resolve, 3000));

    let data = [];

    const generalInfo = await page.evaluate(() => {
      const generalDataMap = new Map([]);
      const generalInfoSection = document.querySelector('div.ar__center__bg > div > div.card-group.row > div:nth-child(1) > div:nth-child(1)');
      if (generalInfoSection) {
        for (let i = 1; i < generalInfoSection.children.length; i++) {
          if (i === 3) {
            generalDataMap.set(
              generalInfoSection.children[i].childNodes[1].childNodes[0].data,
              generalInfoSection.children[i].childNodes[3].childNodes[2].data
            );
          } else {
            generalDataMap.set(
              generalInfoSection.children[i].childNodes[1].childNodes[0].data,
              generalInfoSection.children[i].childNodes[3].childNodes[0].data
            );
          }
        }
      }
      const generalDataObject = {};
      for (const [key, value] of generalDataMap) {
        newKey = key.replace('\n', '');
        const valuePieces = value.split('\n');
        let newValue = '';
        for (let i = 0; i < valuePieces.length; i++) {
          newValue += ` ${valuePieces[i].trim()}`;
        }
        generalDataObject[newKey] = newValue.trim();
      }
      return generalDataObject;
    });

    const contactInfo = await page.evaluate(() => {
      const contactDataMap = new Map([]);
      const contactInfoSection = document.querySelector('div.ar__center__bg > div > div.card-group.row > div:nth-child(1) > div:nth-child(2)');
      if (contactInfoSection) {
        for (let i = 1; i < contactInfoSection.children.length; i++) {
          contactDataMap.set(
            contactInfoSection.children[i].childNodes[1].childNodes[0].data,
            contactInfoSection.children[i].childNodes[3].childNodes[0].data
          );
        }
      }
      const contactDataObject = {};
      for (const [key, value] of contactDataMap) {
        newKey = key.replace('\n', '');
        const valuePieces = value.split('\n');
        let newValue = '';
        for (let i = 0; i < valuePieces.length; i++) {
          newValue += ` ${valuePieces[i].trim()}`;
        }
        contactDataObject[newKey] = newValue.trim();
      }
      return contactDataObject;
    });

    const taxInfo = await page.evaluate(() => {
      const taxDataMap = new Map([]);
      const taxInfoSection = document.querySelector(
        'div.ar__center__bg > div > div.card-group.row > div:nth-child(1) > div:nth-child(3) > div.card-text > div'
      );
      if (taxInfoSection) {
        for (let i = 1; i < taxInfoSection.children[1].children.length; i++) {
          taxDataMap.set(
            taxInfoSection.children[1].children[i].childNodes[1].childNodes[0].data,
            taxInfoSection.children[1].children[i].childNodes[3].childNodes[0].data
          );
        }
      }
      const taxDataObject = {};
      for (const [key, value] of taxDataMap) {
        newKey = key.replace('\n', '');
        const valuePieces = value.split('\n');
        let newValue = '';
        for (let i = 0; i < valuePieces.length; i++) {
          newValue += ` ${valuePieces[i].trim()}`;
        }
        taxDataObject[newKey] = newValue.trim();
      }
      return taxDataObject;
    });

    data.push(generalInfo);
    data.push(contactInfo);
    data.push(taxInfo);

    await browser.close();
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};
