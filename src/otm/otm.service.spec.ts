import * as fs from 'fs';
import { XMLParser, XMLBuilder } from 'fast-xml-parser';
import { VehAvailRateRq } from './forms/vehavailraterq.form';
import { json2xml, xml2json } from './utils/convert.util';
import axios from 'axios';

describe('OtmService', () => {
  const request = {
    core: {
      status: '',
      pickupTime: '',
      returnTime: '',
      pickupLocation: '',
      returnLocation: '',
      companyName: '',
      code: '',
      preferLevel: '',
      airConditionInd: '',
      transmissionType: '',
      airConditionPref: '',
      transmissionPref: '',
      vehicleCategory: '',
      doorCount: '',
      size: '',
      equipType: '',
      quantity: '',
    },
    info: {
      givenName: '',
      surname: '',
      tranportationCode: '',
      number: '',
      code: '',
    }
  }
  it('TEST', async () => {
    const form = new VehAvailRateRq('VehAvailRateRQ');
    const json = await form.RequestXMLForm(request);

    const converter = await json2xml(JSON.stringify(json));

    const headers = {
      'Content-Type': 'application/xml'
    }

    const response = await axios({
      url: 'https://vv.xqual.hertz.com/ota2007a',
      method: 'post',
      headers: headers,
      data: converter,
    });

    console.log(response);
    // console.log(await xml2json(response.data))
  })
});

describe('Test22222', () => {
  it('test2222', () => {
    
  })
});