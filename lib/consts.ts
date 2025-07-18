import { SymDesc } from "@/types/barcode";

export enum DownloadKey {
  png = 'image/png',
  jpeg = 'image/jpeg',
  bmp = 'image/bmp',
  gif = 'image/gif',
}

export const DownloadTypeInfoMap: Record<DownloadKey, { ext: string, mimeType: string }> = {
  [DownloadKey.png]: { ext: '.png', mimeType: 'image/png' },
  [DownloadKey.jpeg]: { ext: '.jpg', mimeType: 'image/jpeg' },
  [DownloadKey.bmp]: { ext: '.bmp', mimeType: 'image/bmp' },
  [DownloadKey.gif]: { ext: '.gif', mimeType: 'image/gif' },
};

// bwip-js barcode types
export const symdesc: SymDesc = {
    "ean5":{ 
        sym:"ean5",
        desc:"EAN-5 (5 digit addon)",
        text:"90200",
        opts:"includetext guardwhitespace",
        format:"5 digits"
    },
    "ean2":{ 
        sym:"ean2",
        desc:"EAN-2 (2 digit addon)",
        text:"05",
        opts:"includetext guardwhitespace",
        format:"2 digits"
    },
    "ean13":{ 
        sym:"ean13",
        desc:"EAN-13",
        text:"9520123456788",
        opts:"includetext guardwhitespace",
        format:"13 digits (12 data + 1 check digit)"
    },
    "ean8":{ 
        sym:"ean8",
        desc:"EAN-8",
        text:"95200002",
        opts:"includetext guardwhitespace",
        format:"8 digits (7 data + 1 check digit)"
    },
    "upca":{ 
        sym:"upca",
        desc:"UPC-A",
        text:"012345000058",
        opts:"includetext",
        format:"12 digits (11 data + 1 check digit)"
    },
    "upce":{ 
        sym:"upce",
        desc:"UPC-E",
        text:"01234558",
        opts:"includetext",
        format:"8 digits (compressed from UPC-A)"
    },
    "isbn":{ 
        sym:"isbn",
        desc:"ISBN",
        text:"978-1-56581-231-4 90000",
        opts:"includetext guardwhitespace",
        format:"ISBN-13: 3 digits prefix + 10 digits ISBN-10 (including check digit) + optional 5 digit add-on"
    },
    "ismn":{ 
        sym:"ismn",
        desc:"ISMN",
        text:"979-0-2605-3211-3",
        opts:"includetext guardwhitespace",
        format:"13 digits (3 digit prefix + 9 digit ISMN + 1 check digit)"
    },
    "issn":{ 
        sym:"issn",
        desc:"ISSN",
        text:"0311-175X 00 17",
        opts:"includetext guardwhitespace",
        format:"8 digits ISSN (including check digit) + optional 2 digit issue number + optional 5 digit add-on"
    },
    "mands":{ 
        sym:"mands",
        desc:"Marks & Spencer",
        text:"0642118",
        opts:"includetext",
        format:"7 digits"
    },
    "code128":{ 
        sym:"code128",
        desc:"Code 128",
        text:"Count01234567!",
        opts:"includetext",
        format:"Variable length, full ASCII character set"
    },
    "gs1-128":{ 
        sym:"gs1-128",
        desc:"GS1-128",
        text:"(01)09521234543213(3103)000123",
        opts:"includetext",
        format:"Variable length, numeric and special characters, uses Application Identifiers"
    },
    "ean14":{ 
        sym:"ean14",
        desc:"GS1-14",
        text:"(01) 0 952 8765 43210 8",
        opts:"includetext",
        format:"14 digits (13 data + 1 check digit)"
    },
    "sscc18":{ 
        sym:"sscc18",
        desc:"SSCC-18",
        text:"(00) 0 9528765 432101234 6",
        opts:"includetext",
        format:"18 digits (17 data + 1 check digit)"
    },
    "code39":{ 
        sym:"code39",
        desc:"Code 39",
        text:"THIS IS CODE 39",
        opts:"includetext includecheck includecheckintext",
        format:"Variable length, uppercase letters, numbers, and some special characters"
    },
    "code39ext":{ 
        sym:"code39ext",
        desc:"Code 39 Extended",
        text:"Code39 Ext!",
        opts:"includetext includecheck includecheckintext",
        format:"Variable length, full ASCII character set"
    },
    "code32":{ 
        sym:"code32",
        desc:"Italian Pharmacode",
        text:"01234567",
        opts:"includetext",
        format:"8 digits (7 data + 1 check digit)"
    },
    "pzn":{ 
        sym:"pzn",
        desc:"Pharmazentralnummer (PZN)",
        text:"123456",
        opts:"includetext",
        format:"6 or 7 digits"
    },
    "code93":{ 
        sym:"code93",
        desc:"Code 93",
        text:"THIS IS CODE 93",
        opts:"includetext includecheck",
        format:"Variable length, uppercase letters, numbers, and some special characters"
    },
    "code93ext":{ 
        sym:"code93ext",
        desc:"Code 93 Extended",
        text:"Code93 Ext!",
        opts:"includetext includecheck",
        format:"Variable length, full ASCII character set"
    },
    "interleaved2of5":{ 
        sym:"interleaved2of5",
        desc:"Interleaved 2 of 5 (ITF)",
        text:"2401234567",
        opts:"height=12 includecheck includetext includecheckintext",
        format:"Even number of digits"
    },
    "itf14":{ 
        sym:"itf14",
        desc:"ITF-14",
        text:"0 952 1234 54321 3",
        opts:"includetext",
        format:"14 digits (13 data + 1 check digit)"
    },
    "identcode":{ 
        sym:"identcode",
        desc:"Deutsche Post Identcode",
        text:"563102430313",
        opts:"includetext",
        format:"11 digits + 1 check digit"
    },
    "leitcode":{ 
        sym:"leitcode",
        desc:"Deutsche Post Leitcode",
        text:"21348075016401",
        opts:"includetext",
        format:"13 digits + 1 check digit"
    },
    "databaromni":{ 
        sym:"databaromni",
        desc:"GS1 DataBar Omnidirectional",
        text:"(01)09521234543213",
        opts:"",
        format:"14 digits (13 data + 1 check digit)"
    },
    "databarstacked":{ 
        sym:"databarstacked",
        desc:"GS1 DataBar Stacked",
        text:"(01)09521234543213",
        opts:"",
        format:"14 digits (13 data + 1 check digit)"
    },
    "databarstackedomni":{ 
        sym:"databarstackedomni",
        desc:"GS1 DataBar Stacked Omnidirectional",
        text:"(01)24012345678905",
        opts:"",
        format:"14 digits (13 data + 1 check digit)"
    },
    "databartruncated":{ 
        sym:"databartruncated",
        desc:"GS1 DataBar Truncated",
        text:"(01)09521234543213",
        opts:"",
        format:"14 digits (13 data + 1 check digit)"
    },
    "databarlimited":{ 
        sym:"databarlimited",
        desc:"GS1 DataBar Limited",
        text:"(01)09521234543213",
        opts:"",
        format:"14 digits (13 data + 1 check digit)"
    },
    "databarexpanded":{ 
        sym:"databarexpanded",
        desc:"GS1 DataBar Expanded",
        text:"(01)09521234543213(3103)000123",
        opts:"",
        format:"Variable length, uses Application Identifiers"
    },
    "databarexpandedstacked":{ 
        sym:"databarexpandedstacked",
        desc:"GS1 DataBar Expanded Stacked",
        text:"(01)09521234543213(3103)000123",
        opts:"segments=4",
        format:"Variable length, uses Application Identifiers"
    },
    "gs1northamericancoupon":{ 
        sym:"gs1northamericancoupon",
        desc:"GS1 North American Coupon",
        text:"(8110)106141416543213500110000310123196000",
        opts:"includetext segments=8",
        format:"Variable length, uses Application Identifiers"
    },
    "pharmacode":{ 
        sym:"pharmacode",
        desc:"Pharmaceutical Binary Code",
        text:"117480",
        opts:"",
        format:"Binary code, 1-6 digits (decimal 3-131070)"
    },
    "pharmacode2":{ 
        sym:"pharmacode2",
        desc:"Two-track Pharmacode",
        text:"117480",
        opts:"includetext",
        format:"Binary code, 1-8 digits (decimal 4-16777215)"
    },
    "code2of5":{ 
        sym:"code2of5",
        desc:"Code 25",
        text:"01234567",
        opts:"includetext includecheck includecheckintext",
        format:"Variable length, numeric only"
    },
    "industrial2of5":{ 
        sym:"industrial2of5",
        desc:"Industrial 2 of 5",
        text:"01234567",
        opts:"includetext includecheck includecheckintext",
        format:"Variable length, numeric only"
    },
    "iata2of5":{ 
        sym:"iata2of5",
        desc:"IATA 2 of 5",
        text:"01234567",
        opts:"includetext includecheck includecheckintext",
        format:"Variable length, numeric only"
    },
    "matrix2of5":{ 
        sym:"matrix2of5",
        desc:"Matrix 2 of 5",
        text:"01234567",
        opts:"includetext includecheck includecheckintext",
        format:"Variable length, numeric only"
    },
    "coop2of5":{ 
        sym:"coop2of5",
        desc:"COOP 2 of 5",
        text:"01234567",
        opts:"includetext includecheck includecheckintext",
        format:"Variable length, numeric only"
    },
    "datalogic2of5":{ 
        sym:"datalogic2of5",
        desc:"Datalogic 2 of 5",
        text:"01234567",
        opts:"includetext includecheck includecheckintext",
        format:"Variable length, numeric only"
    },
    "code11":{ 
        sym:"code11",
        desc:"Code 11",
        text:"0123456789",
        opts:"includetext includecheck includecheckintext",
        format:"Variable length, numeric and dash (-)"
    },
    "bc412":{ 
        sym:"bc412",
        desc:"BC412",
        text:"BC412SEMI",
        opts:"semi includetext includecheckintext",
        format:"Variable length, 35 characters (0-9, A-Z, -, .)"
    },
    "rationalizedCodabar":{ 
        sym:"rationalizedCodabar",
        desc:"Codabar",
        text:"A0123456789B",
        opts:"includetext includecheck includecheckintext",
        format:"Variable length, numeric, some special characters, and start/stop characters (A, B, C, D)"
    },
    "onecode":{ 
        sym:"onecode",
        desc:"USPS Intelligent Mail",
        text:"0123456709498765432101234567891",
        opts:"",
        format:"20, 25, 29, or 31 digits"
    },
    "postnet":{ 
        sym:"postnet",
        desc:"USPS POSTNET",
        text:"01234",
        opts:"includetext includecheckintext",
        format:"5, 9, or 11 digits"
    },
    "planet":{ 
        sym:"planet",
        desc:"USPS PLANET",
        text:"01234567890",
        opts:"includetext includecheckintext",
        format:"11 or 13 digits"
    },
    "royalmail":{ 
        sym:"royalmail",
        desc:"Royal Mail 4 State Customer Code",
        text:"LE28HS9Z",
        opts:"includetext",
        format:"Variable length, alphanumeric"
    },
    "auspost":{ 
        sym:"auspost",
        desc:"AusPost 4 State Customer Code",
        text:"5956439111ABA 9",
        opts:"includetext custinfoenc=character",
        format:"Variable length, format depends on barcode type"
    },
    "kix":{ 
        sym:"kix",
        desc:"Royal Dutch TPG Post KIX",
        text:"1231FZ13XHS",
        opts:"includetext",
        format:"Variable length, alphanumeric"
    },
    "japanpost":{ 
        sym:"japanpost",
        desc:"Japan Post 4 State Customer Code",
        text:"6540123789-A-K-Z",
        opts:"includetext includecheckintext",
        format:"Variable length, alphanumeric and some symbols"
    },
    "msi":{ 
        sym:"msi",
        desc:"MSI Modified Plessey",
        text:"0123456789",
        opts:"includetext includecheck includecheckintext",
        format:"Variable length, numeric only"
    },
    "plessey":{ 
        sym:"plessey",
        desc:"Plessey UK",
        text:"01234ABCD",
        opts:"includetext includecheckintext",
        format:"Variable length, hexadecimal (0-9, A-F)"
    },
    "telepen":{ 
        sym:"telepen",
        desc:"Telepen",
        text:"ABCDEF",
        opts:"includetext",
        format:"Variable length, full ASCII character set"
    },
    "telepennumeric":{ 
        sym:"telepennumeric",
        desc:"Telepen Numeric",
        text:"01234567",
        opts:"includetext",
        format:"Variable length, numeric only"
    },
    "posicode":{ 
        sym:"posicode",
        desc:"PosiCode",
        text:"ABC123",
        opts:"version=b inkspread=-0.5 parsefnc includetext",
        format:"Variable length, alphanumeric"
    },
    "codablockf":{ 
        sym:"codablockf",
        desc:"Codablock F",
        text:"CODABLOCK F 34567890123456789010040digit",
        opts:"columns=8",
        format:"Variable length, full ASCII character set"
    },
    "code16k":{ 
        sym:"code16k",
        desc:"Code 16K",
        text:"Abcd-1234567890-wxyZ",
        opts:"",
        format:"Variable length, full ASCII character set"
    },
    "code49":{ 
        sym:"code49",
        desc:"Code 49",
        text:"MULTIPLE ROWS IN CODE 49",
        opts:"",
        format:"Variable length, full ASCII character set"
    },
    "channelcode":{ 
        sym:"channelcode",
        desc:"Channel Code",
        text:"3493",
        opts:"height=12 includetext",
        format:"Variable length, numeric only"
    },
    "flattermarken":{ 
        sym:"flattermarken",
        desc:"Flattermarken",
        text:"11099",
        opts:"inkspread=-0.25 borderleft=0 borderright=0",
        format:"Variable length, numeric only"
    },
    "raw":{ 
        sym:"raw",
        desc:"Custom 1D symbology",
        text:"331132131313411122131311333213114131131221323",
        opts:"height=12",
        format:"Binary data represented as '1's and '3's"
    },
    "daft":{ 
        sym:"daft",
        desc:"Custom 4 state symbology",
        text:"FATDAFTDAD",
        opts:"",
        format:"Variable length, uppercase letters only"
    },
    "symbol":{ 
        sym:"symbol",
        desc:"Miscellaneous symbols",
        text:"fima",
        opts:"backgroundcolor=DD000011",
        format:"Variable length, specific to symbol set"
    },
    "pdf417":{ 
        sym:"pdf417",
        desc:"PDF417",
        text:"This is PDF417",
        opts:"columns=2",
        format:"Variable length, binary data up to 1108 bytes"
    },
    "pdf417compact":{ 
        sym:"pdf417compact",
        desc:"Compact PDF417",
        text:"This is compact PDF417",
        opts:"columns=2",
        format:"Variable length, binary data up to 1108 bytes"
    },
    "micropdf417":{ 
        sym:"micropdf417",
        desc:"MicroPDF417",
        text:"MicroPDF417",
        opts:"",
        format:"Variable length, binary data up to 250 bytes"
    },
    "datamatrix":{ 
        sym:"datamatrix",
        desc:"Data Matrix",
        text:"This is Data Matrix!",
        opts:"",
        format:"Variable length, up to 2335 alphanumeric characters or 3116 numeric digits"
    },
    "datamatrixrectangular":{ 
        sym:"datamatrixrectangular",
        desc:"Data Matrix Rectangular",
        text:"1234",
        opts:"",
        format:"Variable length, up to 98 alphanumeric characters, depending on the size"
    },
    "datamatrixrectangularextension":{ 
        sym:"datamatrixrectangularextension",
        desc:"Data Matrix Rectangular Extension",
        text:"1234",
        opts:"version=8x96",
        format:"Variable length, up to 588 alphanumeric characters, depending on the size"
    },
    "mailmark":{ 
        sym:"mailmark",
        desc:"Royal Mail Mailmark",
        text:"JGB 012100123412345678AB19XY1A 0             www.xyz.com",
        opts:"type=29",
        format:"Variable length, alphanumeric, specific format depending on type"
    },
    "qrcode":{ 
        sym:"qrcode",
        desc:"QR Code",
        text:"http://goo.gl/0bis",
        opts:"eclevel=M",
        format:"Variable length, binary data up to 2953 bytes"
    },
    "swissqrcode":{ 
        sym:"swissqrcode",
        desc:"Swiss QR Code",
        text:"SPC^CR^LF0200^CR^LF1^CR^LFCH5800791123000889012^CR^LFS^CR^LFRobert Schneider AG^CR^LFRue du Lac^CR^LF1268^CR^LF2501^CR^LFBiel^CR^LFCH^CR^LF^CR^LF^CR^LF^CR^LF^CR^LF^CR^LF^CR^LF^CR^LF199.95^CR^LFCHF^CR^LFK^CR^LFPia-Maria Rutschmann-Schnyder^CR^LFGrosse Marktgasse 28^CR^LF9400 Rorschach^CR^LF^CR^LF^CR^LFCH^CR^LFSCOR^CR^LFRF18539007547034^CR^LF^CR^LFEPD",
        opts:"parse",
        format:"Structured format for Swiss payment information"
    },
    "microqrcode":{ 
        sym:"microqrcode",
        desc:"Micro QR Code",
        text:"1234",
        opts:"",
        format:"Variable length, up to 35 numeric or 21 alphanumeric characters"
    },
    "rectangularmicroqrcode":{ 
        sym:"rectangularmicroqrcode",
        desc:"Rectangular Micro QR Code",
        text:"1234",
        opts:"version=R17x139",
        format:"Variable length, capacity depends on version"
    },
    "maxicode":{ 
        sym:"maxicode",
        desc:"MaxiCode",
        text:"[)>^03001^02996152382802^029840^029001^0291Z00004951^029UPSN^02906X610^029159^0291234567^0291/1^029^029Y^029634 ALPHA DR^029PITTSBURGH^029PA^029^004",
        opts:"mode=2 parse",
        format:"Variable length, up to 93 characters, structured format for shipping information"
    },
    "azteccode":{ 
        sym:"azteccode",
        desc:"Aztec Code",
        text:"This is Aztec Code",
        opts:"format=full",
        format:"Variable length, binary data up to 1914 bytes"
    },
    "azteccodecompact":{ 
        sym:"azteccodecompact",
        desc:"Compact Aztec Code",
        text:"1234",
        opts:"",
        format:"Variable length, binary data up to 53 bytes"
    },
    "aztecrune":{ 
        sym:"aztecrune",
        desc:"Aztec Runes",
        text:"1",
        opts:"",
        format:"Single value from 0 to 255"
    },
    "codeone":{ 
        sym:"codeone",
        desc:"Code One",
        text:"Code One",
        opts:"",
        format:"Variable length, up to 2218 alphanumeric characters"
    },
    "hanxin":{ 
        sym:"hanxin",
        desc:"Han Xin Code",
        text:"This is Han Xin",
        opts:"",
        format:"Variable length, up to 7827 numeric or 4350 alphanumeric characters"
    },
    "dotcode":{ 
        sym:"dotcode",
        desc:"DotCode",
        text:"This is DotCode",
        opts:"inkspread=0.16",
        format:"Variable length, binary data"
    },
    "ultracode":{ 
        sym:"ultracode",
        desc:"Ultracode",
        text:"Awesome colours!",
        opts:"eclevel=EC2",
        format:"Variable length, up to 2048 bytes"
    },
    "gs1-cc":{ 
        sym:"gs1-cc",
        desc:"GS1 Composite 2D Component",
        text:"(01)09521234543213(3103)000123",
        opts:"ccversion=b cccolumns=4",
        format:"Variable length, uses GS1 Application Identifiers"
    },
    "ean13composite":{ 
        sym:"ean13composite",
        desc:"EAN-13 Composite",
        text:"9520123456788|(99)1234-abcd",
        opts:"includetext",
        format:"EAN-13 (13 digits) + variable length 2D component"
    },
    "ean8composite":{ 
        sym:"ean8composite",
        desc:"EAN-8 Composite",
        text:"95200002|(21)A12345678",
        opts:"includetext",
        format:"EAN-8 (8 digits) + variable length 2D component"
    },
    "upcacomposite":{ 
        sym:"upcacomposite",
        desc:"UPC-A Composite",
        text:"012345000058|(99)1234-abcd",
        opts:"includetext",
        format:"UPC-A (12 digits) + variable length 2D component"
    },
    "upcecomposite":{ 
        sym:"upcecomposite",
        desc:"UPC-E Composite",
        text:"01234558|(15)021231",
        opts:"includetext",
        format:"UPC-E (8 digits) + variable length 2D component"
    },
    "databaromnicomposite":{ 
        sym:"databaromnicomposite",
        desc:"GS1 DataBar Omnidirectional Composite",
        text:"(01)09521234543213|(11)990102",
        opts:"",
        format:"GS1 DataBar Omnidirectional (14 digits) + variable length 2D component"
    },
    "databarstackedcomposite":{ 
        sym:"databarstackedcomposite",
        desc:"GS1 DataBar Stacked Composite",
        text:"(01)09521234543213|(17)010200",
        opts:"",
        format:"GS1 DataBar Stacked (14 digits) + variable length 2D component"
    },
    "databarstackedomnicomposite":{ 
        sym:"databarstackedomnicomposite",
        desc:"GS1 DataBar Stacked Omnidirectional Composite",
        text:"(01)03612345678904|(11)990102",
        opts:"",
        format:"GS1 DataBar Stacked Omnidirectional (14 digits) + variable length 2D component"
    },
    "databartruncatedcomposite":{ 
        sym:"databartruncatedcomposite",
        desc:"GS1 DataBar Truncated Composite",
        text:"(01)09521234543213|(11)990102",
        opts:"",
        format:"GS1 DataBar Truncated (14 digits) + variable length 2D component"
    },
    "databarlimitedcomposite":{ 
        sym:"databarlimitedcomposite",
        desc:"GS1 DataBar Limited Composite",
        text:"(01)09521234543213|(21)abcdefghijklmnopqrst",
        opts:"",
        format:"GS1 DataBar Limited (14 digits) + variable length 2D component"
    },
    "databarexpandedcomposite":{ 
        sym:"databarexpandedcomposite",
        desc:"GS1 DataBar Expanded Composite",
        text:"(01)09521234543213(3103)001234|(91)1A2B3C4D5E",
        opts:"",
        format:"GS1 DataBar Expanded (variable length) + variable length 2D component"
    },
    "databarexpandedstackedcomposite":{ 
        sym:"databarexpandedstackedcomposite",
        desc:"GS1 DataBar Expanded Stacked Composite",
        text:"(01)09521234543213(10)ABCDEF|(21)12345678",
        opts:"segments=4",
        format:"GS1 DataBar Expanded Stacked (variable length) + variable length 2D component"
    },
    "gs1-128composite":{ 
        sym:"gs1-128composite",
        desc:"GS1-128 Composite",
        text:"(00)095287654321012346|(02)09521234543213(37)24(10)1234567ABCDEFG",
        opts:"ccversion=c",
        format:"GS1-128 (variable length) + variable length 2D component"
    },
    "gs1datamatrix":{ 
        sym:"gs1datamatrix",
        desc:"GS1 Data Matrix",
        text:"(01)09521234543213(17)120508(10)ABCD1234(410)9501101020917",
        opts:"",
        format:"Variable length, uses GS1 Application Identifiers"
    },
    "gs1datamatrixrectangular":{ 
        sym:"gs1datamatrixrectangular",
        desc:"GS1 Data Matrix Rectangular",
        text:"(01)09521234543213(17)120508(10)ABCD1234(410)9501101020917",
        opts:"",
        format:"Variable length, uses GS1 Application Identifiers"
    },
    "gs1dldatamatrix":{ 
        sym:"gs1dldatamatrix",
        desc:"GS1 Digital Link Data Matrix",
        text:"https://id.gs1.org/01/09521234543213/22/ABC%2D123?99=XYZ-987",
        opts:"",
        format:"Variable length, GS1 Digital Link URI format"
    },
    "gs1qrcode":{ 
        sym:"gs1qrcode",
        desc:"GS1 QR Code",
        text:"(01)09521234543213(8200)http://www.abc.net(10)ABCD1234(410)9501101020917",
        opts:"",
        format:"Variable length, uses GS1 Application Identifiers"
    },
    "gs1dlqrcode":{ 
        sym:"gs1dlqrcode",
        desc:"GS1 Digital Link QR Code",
        text:"HTTPS://ID.GS1.ORG/01/09521234543213/22/ABC%2D123?99=XYZ-987",
        opts:"",
        format:"Variable length, GS1 Digital Link URI format"
    },
    "gs1dotcode":{ 
        sym:"gs1dotcode",
        desc:"GS1 DotCode",
        text:"(235)5vBZIF%!<B;?oa%(01)09521234543213(8008)19052001",
        opts:"rows=16",
        format:"Variable length, uses GS1 Application Identifiers"
    },
    "hibccode39":{ 
        sym:"hibccode39",
        desc:"HIBC Code 39",
        text:"A999BJC5D6E71",
        opts:"includetext",
        format:"Variable length, specific format for health industry products"
    },
    "hibccode128":{ 
        sym:"hibccode128",
        desc:"HIBC Code 128",
        text:"A999BJC5D6E71",
        opts:"includetext",
        format:"Variable length, specific format for health industry products"
    },
    "hibcdatamatrix":{ 
        sym:"hibcdatamatrix",
        desc:"HIBC Data Matrix",
        text:"A999BJC5D6E71",
        opts:"",
        format:"Variable length, specific format for health industry products"
    },
    "hibcdatamatrixrectangular":{ 
        sym:"hibcdatamatrixrectangular",
        desc:"HIBC Data Matrix Rectangular",
        text:"A999BJC5D6E71",
        opts:"",
        format:"Variable length, specific format for health industry products"
    },
    "hibcpdf417":{ 
        sym:"hibcpdf417",
        desc:"HIBC PDF417",
        text:"A999BJC5D6E71",
        opts:"",
        format:"Variable length, specific format for health industry products"
    },
    "hibcmicropdf417":{ 
        sym:"hibcmicropdf417",
        desc:"HIBC MicroPDF417",
        text:"A999BJC5D6E71",
        opts:"",
        format:"Variable length, specific format for health industry products"
    },
    "hibcqrcode":{ 
        sym:"hibcqrcode",
        desc:"HIBC QR Code",
        text:"A999BJC5D6E71",
        opts:"",
        format:"Variable length, specific format for health industry products"
    },
    "hibccodablockf":{ 
        sym:"hibccodablockf",
        desc:"HIBC Codablock F",
        text:"A999BJC5D6E71",
        opts:"",
        format:"Variable length, specific format for health industry products"
    },
    "hibcazteccode":{ 
        sym:"hibcazteccode",
        desc:"HIBC Aztec Code",
        text:"A999BJC5D6E71",
        opts:"",
        format:"Variable length, specific format for health industry products"
    }
};

export enum Category {
  TwoDimensional = "2d",
  OneDimensional = "1d",
  PointOfSale = "pointofsale",
  GS1DataBar = "gs1databar",
  SupplyChain = "supplychain",
  Postal = "postal",
  Pharmaceutical = "pharmaceutical",
  LessUsed = "lessused",
  GS1Composite = "gs1composite",
  RawSymbols = "rawsymbols",
  PartialSymbols = "partialsymbols",
}

// Order of categories in the dropdown (may change in the future)
export const CATEGORY_ARRAY = [
  Category.OneDimensional,
  Category.PointOfSale,
  Category.SupplyChain,
  Category.TwoDimensional,
  Category.GS1DataBar,
  Category.GS1Composite,
  Category.Postal,
  Category.Pharmaceutical,
  Category.LessUsed,
  Category.RawSymbols,
  Category.PartialSymbols
]

export const CATEGORY_NAMES = {
  [Category.PointOfSale]: "Point of Sale",
  [Category.GS1DataBar]: "GS1 DataBar",
  [Category.SupplyChain]: "Supply Chain",
  [Category.TwoDimensional]: "Two Dimensional",
  [Category.OneDimensional]: "One Dimensional",
  [Category.Postal]: "Postal",
  [Category.Pharmaceutical]: "Pharmaceutical",
  [Category.LessUsed]: "Less Used",
  [Category.GS1Composite]: "GS1 Composite",
  [Category.RawSymbols]: "Raw Symbols",
  [Category.PartialSymbols]: "Partial Symbols"
};

export const CATEGORY_MAP = {
  [Category.PointOfSale]: [
    { value: 'ean13', label: symdesc.ean13.desc },
    { value: 'upca', label: symdesc.upca.desc },
    { value: 'ean8', label: symdesc.ean8.desc },
    { value: 'upce', label: symdesc.upce.desc },
    { value: 'isbn', label: symdesc.isbn.desc },
    { value: 'issn', label: symdesc.issn.desc },
    { value: 'ismn', label: symdesc.ismn.desc }
  ],
  [Category.OneDimensional]: [
    { value: 'code128', label: symdesc.code128.desc },
    { value: 'code39', label: symdesc.code39.desc },
    { value: 'interleaved2of5', label: symdesc.interleaved2of5.desc },
    { value: 'code93', label: symdesc.code93.desc },
    { value: 'code39ext', label: symdesc.code39ext.desc },
    { value: 'code93ext', label: symdesc.code93ext.desc }
  ],
  [Category.TwoDimensional]: [
    { value: 'qrcode', label: symdesc.qrcode.desc },
    { value: 'datamatrix', label: symdesc.datamatrix.desc },
    { value: 'pdf417', label: symdesc.pdf417.desc },
    { value: 'azteccode', label: symdesc.azteccode.desc },
    { value: 'datamatrixrectangular', label: symdesc.datamatrixrectangular.desc },
    { value: 'micropdf417', label: symdesc.micropdf417.desc },
    { value: 'microqrcode', label: symdesc.microqrcode.desc },
    { value: 'pdf417compact', label: symdesc.pdf417compact.desc },
    { value: 'hanxin', label: symdesc.hanxin.desc },
    { value: 'dotcode', label: symdesc.dotcode.desc },
    { value: 'azteccodecompact', label: symdesc.azteccodecompact.desc },
    { value: 'datamatrixrectangularextension', label: symdesc.datamatrixrectangularextension.desc },
    { value: 'aztecrune', label: symdesc.aztecrune.desc },
    { value: 'swissqrcode', label: symdesc.swissqrcode.desc }
  ],
  [Category.SupplyChain]: [
    { value: 'gs1-128', label: symdesc['gs1-128'].desc },
    { value: 'gs1datamatrix', label: symdesc.gs1datamatrix.desc },
    { value: 'gs1qrcode', label: symdesc.gs1qrcode.desc },
    { value: 'ean14', label: symdesc.ean14.desc },
    { value: 'itf14', label: symdesc.itf14.desc },
    { value: 'sscc18', label: symdesc.sscc18.desc },
    { value: 'gs1dldatamatrix', label: symdesc.gs1dldatamatrix.desc },
    { value: 'gs1dlqrcode', label: symdesc.gs1dlqrcode.desc },
    { value: 'gs1dotcode', label: symdesc.gs1dotcode.desc }
  ],
  [Category.GS1DataBar]: [
    { value: 'databaromni', label: symdesc.databaromni.desc },
    { value: 'databarexpanded', label: symdesc.databarexpanded.desc },
    { value: 'databarlimited', label: symdesc.databarlimited.desc },
    { value: 'databarexpandedstacked', label: symdesc.databarexpandedstacked.desc },
    { value: 'databarstackedomni', label: symdesc.databarstackedomni.desc },
    { value: 'databartruncated', label: symdesc.databartruncated.desc },
    { value: 'databarstacked', label: symdesc.databarstacked.desc },
    { value: 'gs1northamericancoupon', label: symdesc.gs1northamericancoupon.desc }
  ],
  [Category.Postal]: [
    { value: 'postnet', label: symdesc.postnet.desc },
    { value: 'onecode', label: symdesc.onecode.desc },
    { value: 'royalmail', label: symdesc.royalmail.desc },
    { value: 'auspost', label: symdesc.auspost.desc },
    { value: 'japanpost', label: symdesc.japanpost.desc },
    { value: 'planet', label: symdesc.planet.desc },
    { value: 'kix', label: symdesc.kix.desc },
    { value: 'mailmark', label: symdesc.mailmark.desc },
    { value: 'maxicode', label: symdesc.maxicode.desc },
    { value: 'identcode', label: symdesc.identcode.desc },
    { value: 'leitcode', label: symdesc.leitcode.desc }
  ],
  [Category.Pharmaceutical]: [
    { value: 'pharmacode', label: symdesc.pharmacode.desc },
    { value: 'hibccode128', label: symdesc.hibccode128.desc },
    { value: 'hibcdatamatrix', label: symdesc.hibcdatamatrix.desc },
    { value: 'hibccode39', label: symdesc.hibccode39.desc },
    { value: 'code32', label: symdesc.code32.desc },
    { value: 'pzn', label: symdesc.pzn.desc },
    { value: 'hibcqrcode', label: symdesc.hibcqrcode.desc },
    { value: 'hibcpdf417', label: symdesc.hibcpdf417.desc },
    { value: 'pharmacode2', label: symdesc.pharmacode2.desc },
    { value: 'hibcmicropdf417', label: symdesc.hibcmicropdf417.desc },
    { value: 'hibccodablockf', label: symdesc.hibccodablockf.desc }
  ],
  [Category.GS1Composite]: [
    { value: 'ean13composite', label: symdesc.ean13composite.desc },
    { value: 'upcacomposite', label: symdesc.upcacomposite.desc },
    { value: 'databaromnicomposite', label: symdesc.databaromnicomposite.desc },
    { value: 'ean8composite', label: symdesc.ean8composite.desc },
    { value: 'upcecomposite', label: symdesc.upcecomposite.desc },
    { value: 'databarexpandedcomposite', label: symdesc.databarexpandedcomposite.desc },
    { value: 'databarlimitedcomposite', label: symdesc.databarlimitedcomposite.desc },
    { value: 'gs1-128composite', label: symdesc['gs1-128composite'].desc },
    { value: 'databarstackedomnicomposite', label: symdesc.databarstackedomnicomposite.desc },
    { value: 'databarexpandedstackedcomposite', label: symdesc.databarexpandedstackedcomposite.desc },
    { value: 'databartruncatedcomposite', label: symdesc.databartruncatedcomposite.desc },
    { value: 'databarstackedcomposite', label: symdesc.databarstackedcomposite.desc }
  ],
  [Category.LessUsed]: [
    { value: 'codablockf', label: symdesc.codablockf.desc },
    { value: 'code11', label: symdesc.code11.desc },
    { value: 'rationalizedCodabar', label: symdesc.rationalizedCodabar.desc },
    { value: 'msi', label: symdesc.msi.desc },
    { value: 'plessey', label: symdesc.plessey.desc },
    { value: 'code2of5', label: symdesc.code2of5.desc },
    { value: 'industrial2of5', label: symdesc.industrial2of5.desc },
    { value: 'iata2of5', label: symdesc.iata2of5.desc },
    { value: 'matrix2of5', label: symdesc.matrix2of5.desc },
    { value: 'coop2of5', label: symdesc.coop2of5.desc },
    { value: 'datalogic2of5', label: symdesc.datalogic2of5.desc },
    { value: 'code49', label: symdesc.code49.desc },
    { value: 'code16k', label: symdesc.code16k.desc },
    { value: 'codeone', label: symdesc.codeone.desc },
    { value: 'telepen', label: symdesc.telepen.desc },
    { value: 'posicode', label: symdesc.posicode.desc },
    { value: 'channelcode', label: symdesc.channelcode.desc },
    { value: 'telepennumeric', label: symdesc.telepennumeric.desc },
    { value: 'bc412', label: symdesc.bc412.desc },
    { value: 'ultracode', label: symdesc.ultracode.desc }
  ],
  [Category.RawSymbols]: [
    { value: 'raw', label: symdesc.raw.desc },
    { value: 'daft', label: symdesc.daft.desc },
    { value: 'flattermarken', label: symdesc.flattermarken.desc }
  ],
  [Category.PartialSymbols]: [
    { value: 'ean5', label: symdesc.ean5.desc },
    { value: 'ean2', label: symdesc.ean2.desc },
    { value: 'gs1-cc', label: symdesc['gs1-cc'].desc }
  ]
};

export const COMMON_BARCODE_TYPES = [
  {
    value: 'upca',
    label: symdesc.upca.desc,
    url: '/img/upca.png',
    usage: 'Retail product identification in North America, widely used in supermarkets and other retail environments.', 
    dataFormat: '12-digit numeric code (11 data digits + 1 check digit)'
  },
  {
    value: 'ean13',
    label: symdesc.ean13.desc,
    url: '/img/ean13.png',
    usage: 'Global retail product identification, primarily used in European countries for retail products.', 
    dataFormat: '13-digit numeric code (12 data digits + 1 check digit)'
  },
  {
    value: 'code128',
    label: symdesc.code128.desc,
    url: '/img/code128.png',
    usage: 'Logistics, supply chain management, and shipping labels for encoding alphanumeric data.', 
    dataFormat: 'Alphanumeric characters (full ASCII set) with variable length'
  },
  {
    value: 'code39',
    label: symdesc.code39.desc,
    url: '/img/code39.png',
    usage: 'Automotive and defense industries, commonly used for inventory and tracking.', 
    dataFormat: 'Alphanumeric characters (0-9, A-Z, space) with variable length'
  },
  {
    value: 'interleaved2of5',
    label: symdesc.interleaved2of5.desc,
    url: '/img/interleaved2of5.png',
    usage: 'Logistics and warehouse operations, especially for labeling cartons and pallets.', 
    dataFormat: 'Numeric-only format with variable length, must have an even number of digits'
  },
  {
    value: 'postnet',
    label: symdesc.postnet.desc,
    url: '/img/postnet.png',
    usage: 'US Postal Service for automated mail sorting.', 
    dataFormat: 'Numeric-only, typically 5, 9, or 11 digits'
  },
  {
    value: 'pdf417',
    label: symdesc.pdf417.desc,
    url: '/img/pdf417.png',
    usage: 'Identification cards, transport tickets, and storing large amounts of data (e.g., in airline boarding passes).', 
    dataFormat: 'Alphanumeric, including special characters, with high data capacity'
  },
  {
    value: 'qrcode',
    label: symdesc.qrcode.desc,
    url: '/img/qrcode.png',
    usage: 'Marketing, mobile payments, and web URLs, especially for fast scanning by mobile devices.', 
    dataFormat: 'Alphanumeric characters, binary data, or Kanji, supports up to 7,089 numeric or 4,296 alphanumeric characters'
  },
  {
    value: 'datamatrix',
    label: symdesc.datamatrix.desc,
    url: '/img/datamatrix.png',
    usage: 'Used in aerospace, defense, and pharmaceuticals for marking small products or parts.', 
    dataFormat: 'Alphanumeric or binary data, up to several thousand characters'
  },
  {
    value: 'azteccode',
    label: symdesc.azteccode.desc,
    url: '/img/azteccode.png',
    usage: 'Primarily used in transportation tickets, such as airline boarding passes.', 
    dataFormat: 'Alphanumeric, binary, and special characters, supports up to 3,832 numeric or 3,067 alphanumeric characters'
  },
  {
    value: 'pharmacode',
    label: symdesc.pharmacode.desc,
    url: '/img/pharmacode.png',
    usage: 'Pharmaceutical packaging for encoding information related to drug approval or manufacturing.', 
    dataFormat: 'Numeric only, typically small ranges (up to 7 digits)'
  },
  {
    value: 'isbn',
    label: symdesc.isbn.desc,
    url: '/img/isbn.png',
    usage: 'Books and other publications for unique identification in the publishing industry.', 
    dataFormat: '13-digit numeric code (prefix, group, publisher, title, check digit)'
  }
];
