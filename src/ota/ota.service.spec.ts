import { XMLParser, XMLBuilder, XmlBuilderOptions, XmlBuilderOptionsOptional } from 'fast-xml-parser';
import axios from 'axios';
import * as path from "path";
import * as fs from 'fs';
import { VehAvailRateRQ } from '../ota/forms/vehavailraterq.form'
import * as argon from 'argon2';
import { common, VehAvail } from './forms/index';
import { EquipPref, RentalCore, VehAvailRateRQCoreDto, VehAvailRateRQInfoDto, VehPref, VendorPref } from './forms/dto/param.dto';
import { xml2json, json2xml} from './utils/convert.util';

describe('Test', () => {
    it('Test', async () => {
      const xmlheader = await common.XmlHeader();
      const pos = await common.POS();
      const jsonRq = new VehAvail.VehAvailRateRQ();

      const coreDto = new VehAvailRateRQCoreDto();
      coreDto.status = 'a'
      coreDto.rentalCore = new RentalCore();
      coreDto.rentalCore.picDatetime = '';
      coreDto.rentalCore.retDatetime = '';
      coreDto.rentalCore.picLocationCd = '';
      coreDto.rentalCore.retLocationCd = '';
      coreDto.vendorPrefs = new VendorPref();
      coreDto.vendorPrefs.companyName = '';
      coreDto.vendorPrefs.code = '';
      coreDto.vendorPrefs.preLevel = '';
      coreDto.vehPrefs = new VehPref();
      coreDto.vehPrefs.airConditionInd = '';
      coreDto.vehPrefs.transmissionType = '';
      coreDto.vehPrefs.airConditionPref = '';
      coreDto.vehPrefs.transmissionPref = '';
      coreDto.vehPrefs.vehCategory = '';
      coreDto.vehPrefs.doorCount = '';
      coreDto.vehPrefs.size = '';
      coreDto.equipPrefs = new EquipPref();
      coreDto.equipPrefs.equipType = '';
      coreDto.equipPrefs.quantity = '';

      const tag = jsonRq.RequestHeader();
      const core = await jsonRq.RequestCore(coreDto);
      // const info = jsonRq.RequestInfo(new VehAvailRateRQInfoDto());

      let request = {
        ...xmlheader, 
        ...pos,
        ...core
      }
      const convertedXML = await json2xml(JSON.stringify(request));

      fs.writeFileSync('test.xml', convertedXML.toString());
      console.log(request);
    });
  });
  
// describe('Create JSON', () => {
//   it('JSON', async () => {
//     return VehAvailRateRQ
//   });
// });

// describe('Argon2 Has', () => {
//   it('Has', async () => {
//     console.log(await argon.hash('wjdwhdans'));
//   });
// });


// describe('OtaService', () => {
//     it('OTA XML BUILDING TEST', async () => {
//         const filename = 'req.json';
//         const dir = path.join(__dirname, '../usecompare', filename);
//         const txtData = fs.readFileSync(dir).toString('utf-8');

//         const builder = new XMLBuilder({
//             ignoreAttributes: false,
//             format: true,
//             suppressBooleanAttributes: false,
//             suppressEmptyNode: true,
//           });
//         console.log(txtData);
//         let xmlData = builder.build(txtData);
//         // console.log(xmlData);
     
//         // await axios.post(
//         //     'https://vv.xqual.hertz.com/ota2007a',
//         //     xmlData,
//         //     {
//         //         headers: {
//         //             'Content-Type': 'application/xml'
//         //         },
//         //         timeout: 5000,
//         //         maxRedirects: 5,
//         //         responseType: 'text'
//         //     }
//         // ).then((response) => {
//         //     const parser = new XMLParser({ ignoreAttributes: false });
//         //     let t = parser.parse(response.data);
//         //     console.log(t);
//         // });
//     });
// })

// describe('JSON 2 XML', () => {
//   it('Convert JSON to XML', async () => {
//     const filename = 'req2.json';
//     const dir = path.join(__dirname, '../usecompare', filename);
//     const txtData = fs.readFileSync(dir, {encoding: 'utf8'});
//     // const jsonData = JSON.parse(txtData);

//     const converter = new Converter()
//     const jsonData = converter.json2xml(txtData);
//     console.log(jsonData);
//   });
// });

// describe('XML 2 JSON', () => {
//   it('Convert XML to JSON', async () => {
//     const filename = 'req.xml';
//     const dir = path.join(__dirname, '../usecompare', filename);
//     const txtData = fs.readFileSync(dir, {encoding: 'utf8'});
//     const converter = new Converter();
//     const xmlData = converter.xml2json(txtData);
//     console.log(xmlData);
//   });
// });
// describe('JSON Test', () => {
//   it('JSON', async () => {
//     const json = {
//       abc : {
//         bac : {
//           banndb : 'fffffff',
//           "@_ppp": 'fufu'
//         }
//       }
//     }

//     console.log(await new Converter().json2xml(JSON.stringify(json)));
//   });
// });

// describe('Dynamic JSON Key/Value', () => {
//   it('JSON', async () => {
//     const key1 = 'TT';
//     const key2 = 'BB';

//     const json = {
//       [key1]: 'NNNN',
//       [key2]: 'QQQQ'
//     }

//     console.log(json);
//   });
// });