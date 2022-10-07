'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "4a4bbf33d935e268eb014486578dd413",
".git/config": "0f63d856f2c3ab37b95cc34aa72e9078",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c0b9aa09274fd406c03d281e463c5a83",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "836a1fc6fa5ef2cc9c0967d132b6260a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4b15b166aad25f9287f0b84cb156f6e4",
".git/logs/refs/heads/main": "6818534aaceb3250b750230e0a1337e3",
".git/logs/refs/remotes/origin/main": "6e36ac50c0e803724e1c3a15b5eb593c",
".git/objects/03/0f1c0aeb760de2810139081bd11f9fddea8309": "a95fd53e8c2329f9767ae19dc90f926a",
".git/objects/03/f948c5e55108c8e4b11aac6cb426571040dc3b": "91ff1670860060e98fc01fbf81ee9b39",
".git/objects/04/b571492e7170397951f4196aa187983a4c1f2b": "336f1216c4e3937b628816967c895c76",
".git/objects/06/82c922e2809f9ccff95276b9591a6027093024": "32e1a55490b45e1afdce5f12887b49b0",
".git/objects/0a/1db34a66265763c358999730d31e62af095fee": "e1e6c2732565190e7e71a4ec6368d534",
".git/objects/0b/1e4dd993e2d41282a677634f77b1399154356f": "255bcff5aee7b673d792ad19736de4a4",
".git/objects/0c/fa4bbde058fde105fd5028265460dc7c75bf28": "3bd46f5e3934c3858614c5b6589a6515",
".git/objects/0f/92fe2063fb0b0177fcf2a14a67ceccd90fda48": "586c3061c3d8f8b7ce9e5a5828aad20a",
".git/objects/10/a2c25f4c1c73d27e4e938c401f9f6b9c7b9f03": "99f9763db046cad8d3213582e9be185e",
".git/objects/16/b63ca82f6baab03e76f0702ccbb760023c8896": "9e3385373159344567f5f5ff34b231c9",
".git/objects/17/83722478436405f1f5c53b0569fdccd80e6647": "9585b5036e8a82f81142ed85fd7aa730",
".git/objects/18/12cb81736ccfa3064dc3ce8ee01fbd3b5182aa": "262481c3a446511cfb7088e51415e708",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/21/f3a9ca7cb551881f11f2ab892c4c68e0b25b93": "dd0a21b418686e62fcb0cb41da1de7fe",
".git/objects/22/0c38c6b303202cefcc08e2fec1163a546c1f4a": "22c9308891c6927663a4557652f42ab2",
".git/objects/22/536dc90fe640e2d575a294fd4e23b896492e14": "78b13cdfacf3a85217e9c155aa105f54",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/66f6c909315a36a5ac0cc698940b7f41f0b057": "2df76cce39e45eabb707de76d172f61c",
".git/objects/25/a8b468c8c53b7646e3d8259b477f1d714556a6": "c7c6b8c932b072b0d8a5f047ee172d4f",
".git/objects/26/96f16c966b6666d6aba6176f9a1dbf510df0d1": "723e443f8e7bb7cf57e0b1c8aae5fceb",
".git/objects/26/ef709cb6e3e4b23fd8f90f8247db5fcc06c930": "5af60bd903c1bf222e4be39898cbbcc4",
".git/objects/28/2299557057a257ae98fec6a5746155b343fc8d": "f71c3769fb3369892dd5dee3a51b841b",
".git/objects/29/6cb0f65b3ae2c8e9776af8cd888ef2cb82936d": "4da97237d2d9bb5a5c1005993b9545e3",
".git/objects/29/dff7c2b5cf2615f634f0e5597fa652cd60d636": "3c41db162090cf4e7a97b53dfc19dc26",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2e/6c66aaec1059f45d10df84e0fb4bffcb5ac6b9": "cef16bf6aaa607a0e764db3daef59a95",
".git/objects/31/d26bee2ee5dad40aca8b824908bb2ddb9d8cb4": "ce13fd8689a73fae85cf69bc4fcb69b7",
".git/objects/32/49c9e978fd6cb34edcb969b6a39492f9f0fcc3": "0a5872ce15a5355a65b8b668ea222eee",
".git/objects/33/87998562d27bee8f97873542df32a0e88efb99": "a72ca509e672c0946320e1acb9dfac8e",
".git/objects/35/e51c0e0b5a17be1b242cff2c5e8a8ec22c8746": "9a511f90864232f5b92c48787d2c2a7e",
".git/objects/37/000b523129673fcd5f8c102c29b1d13862dfde": "d2bad1cef58b43a173241016baa80166",
".git/objects/3a/939dac984c5ec8bb8aa070582666164ddc7693": "6fc8d054f7793ef643483266a41bb69b",
".git/objects/3a/ddf2efdabf104f1737b50fe54db83a7bc13b90": "2b1e449898fba18ff98816a226c01836",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/40/96020cad5932c34d323c61d76b12d5c39ab429": "c73cf22dfec359a08bce7fc4993d73ca",
".git/objects/40/962213a69286e01fa6356228f18bf32554d7bf": "1aed2a7b51323495a3eb5d91909631e4",
".git/objects/41/0a3dea3d6b18ea8f498add6cb7ce1f7b4cd9ad": "cac7a28df86c772b6a2c99b681831821",
".git/objects/43/a70e6ba51db1da7cd4d371a2c1913c419669c3": "18ea2ac718673d1e47d1bc87072200df",
".git/objects/44/139e7c2eb645b58f7a278b7bdf65cdf543e381": "09f4cd81c0d8d021b4053aa3a76a6cae",
".git/objects/46/12caf4cbee7fd5068b4f891398f518dfb14b15": "70cea585c03b9221a8e2913d70038e0a",
".git/objects/46/523f3c9cf2fccf63173d35b08692c0c551a3dd": "08e203e28a27b686e837be1df22299ac",
".git/objects/47/2b6fb4d18a0261920840dc546348743ef097db": "11948a92de4e381b95ecb021ecdb2960",
".git/objects/47/818cc125f4b61ab58210edd3c06f8c437f90ba": "ce1161c7701ab241f737dc9b927be76d",
".git/objects/50/ef7fbce095a4cd9e2c337be584a837f7064078": "ed255072643b768d00beeea349c65347",
".git/objects/52/3c9ba88f34dad7e978eb2e8159c1235f4b70af": "47259018fbcfd3b65fcb7d27c6704e68",
".git/objects/54/70762e4d31c273bae6199fa31c65a45c128a9a": "72b07d90ea411983d00b821ba59d46cd",
".git/objects/5d/0db34bed64b4e87909cb761400d02e8838bafd": "677f6b8cb7a0fb36a2f8cb10f047f897",
".git/objects/5d/cf5f6131fef36f2d90a01f5babb53edd80e2aa": "102d077067db4733154bc8e540ac6602",
".git/objects/61/fd02c5d04b673597c7e0f1e8167f783621d79b": "76f22d1a3c4ae3fa9ec82ca05ea3d30a",
".git/objects/62/fc03e2df2de8701a071b834399d52b137a27b3": "0340ded4a41bd98663ee04a21f4dc6a7",
".git/objects/63/14113992a654fd8365d8f29babff4efaff8162": "2ef978e815cacbe8f1a118000b17eac9",
".git/objects/63/de0ca6b54aa744e08e67fb650a28090bd37981": "b4d32faf892a7431397f40ede6a1eb6f",
".git/objects/65/0fa5f8fb95b1f0f74cd437f0dca28bea0e6d45": "0db866107a102ee69b7ad2ee7a897e08",
".git/objects/6b/c00c4d406a6e0a5acabf26bbec1e0f58cc0c27": "0689a272242686131f7c3e4098385aa0",
".git/objects/6d/3943600d8e5d7e990b5ba06a834ee3e589fa01": "f5ec9701de6e200cc3dbe58166453f99",
".git/objects/6d/fa02558d62ca423e239d2b87db1ef84439c44b": "42c4f49f96180eca0a4c75505ff88da0",
".git/objects/6e/4dd8748c31c21967e465904631b3fe34d9d28b": "97dcc8d1b3c4a283dcfc7c57ec87ce32",
".git/objects/6e/aa3066a8a230d5f6f0682ad96dd72995c9f5f7": "37ccc1c08598f7c56e6531da4435783e",
".git/objects/70/5096c9504dd1a8190e1a7b0c915ed17bcb23d4": "ea11f0f57b36e215d13ff986152f96da",
".git/objects/71/28e318c71a3c890191035a2e2d3d11a846965f": "e571130db50f4894bffae848cfa43bbf",
".git/objects/74/27394724457529611446d38d27be5eb95b3bad": "291ac00ff0c237db97c1a1add0551ba8",
".git/objects/75/1a6492e947e32622e577d9ad73ee19c7ffb50f": "b9a2e820e585385dcc640904a75be8cf",
".git/objects/75/e9eb165d8c84ebbff91471003432bf55ee568c": "c3281b870d77c94f9f965ab02c4d24a7",
".git/objects/76/1688e183cd89ba73da65255fed2e47e2e57073": "530a87321e907769b4a2f55fb4110009",
".git/objects/77/9be96cea2ada76c820c89da46261fee9347a82": "a0684496624b8c9d58235f7af678c184",
".git/objects/77/f7a09650acca2520cf2ef9257c9796e516db91": "5f18f355e186d591f691ef4f42286f00",
".git/objects/78/1ab2ba2a51f026185ec43fcfd7b7194896d510": "2287d24b208dfa148fbad1dc75269118",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7f/4131ce7aa75733a51b7035ade7fe1d91f607ac": "07a9f8d5171b64159c504efe0537515f",
".git/objects/81/5969080d4b966402a772bf38f96e87d4c56a13": "3cdfbead1e3f2afdcdc94d4e8229f694",
".git/objects/82/fcdf61f390b5e27fb9953a8f70af5978abc4b4": "3edbb359a8a5494ce72cd4be090b7253",
".git/objects/83/36c98f89385a9813a4541110c3040619fb098a": "18161d3efbc3eda002d20c0e25f32410",
".git/objects/84/0fe8a5f52a23829ddc8495c295690aa369151d": "9c7bb9c736b80fd0388611991ef894bc",
".git/objects/84/1871b0efb95db606ef41226aba97b6c6635ec4": "10ca1d92fc643e5475641a0e9db3a07a",
".git/objects/84/73a19ccd2c7b4614d9e045bfd7564833b4ca03": "94fdeae2137c578eb91c6810ee3ffa20",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/6b6de1f5fa96a42f68629fe2c39d081e2c1e56": "f359c276cc9ebc87db4af1ba476ce2a9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/63c14441d093fe63fff5aab1db6877dae2b2b3": "92f0197641ff7383869a9bc3bbc1fff3",
".git/objects/8b/a6115c61fa64c76b454c6554a1f49d73f24578": "20d977a7a224dbf6f6508b32b7169308",
".git/objects/8c/fdc28cc94b0102909237a9311b6d45f9fc4024": "4098f7d56f91d9504274ebf7874cfcec",
".git/objects/91/0c5099ea1e2efa54870cf1f18e25f2d080e771": "47f0e4e8ebd549103b8400e3411cee5b",
".git/objects/92/1257bd74ffe7fe5c80b83d54a7fa8d4c397f0e": "ad13b3ee52dba2a4191961621e9cf8fd",
".git/objects/92/694b8e8df5b8c7ba4d91d03f4368ae52619be7": "ab906aca043c8f5eb6d1bd0bf1130013",
".git/objects/93/5439478ed9c3cbcbec274a393e9dfc1a61de8c": "cdfa7fa1f09f5dcfa96ff8f4c9a2931b",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9d/2ad795459f75fc1b596cb086dd33726c6ff56e": "9aa1a5c07869866463f8d0b9ae522f61",
".git/objects/9d/f160b005e952ed17f97d015a9105aeb4768c7e": "5e57de413a7df7f81f46fe538e23b52f",
".git/objects/9f/e02ba2c0aa610e79e0b856cfe80fa0b2e88692": "c031bd8d3a3e37606476f60842a9eb1a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/d7dba201f60f4cfea0ec2ff5b46de3203c71da": "493706f5054127ecb1614b1377a160d9",
".git/objects/a4/7ee4c0382ecaab17793c75f19a7bb05c392036": "3879543896864f36a7539525c50c32a1",
".git/objects/a4/dfd288bc6635b8907cb1239dff5675205fcff7": "1120188f8d4ef2d703cf1634098552d8",
".git/objects/a8/c005433b665eaf8c334b0566b24e05e66e5e70": "99461baea114da7cfa1eb8c33b95552a",
".git/objects/a9/a40dc1a155f644b8c90bc32b15cb95d67971c3": "7e3122c8b634606dbd3b601cd818c7f7",
".git/objects/ab/39e746ab681938c55d19b8ac56f3ad5aa907f5": "f79ec6640a6c2e60ecb0799988bf0d53",
".git/objects/ae/05cbd15a019b18cce75a6cc05bf022019e5794": "77088728c61a5277337149b70ce24b2d",
".git/objects/b0/01e257e0cacdff3e405955f5175693ad451777": "5988c44d91d20fdb56c841de749259c6",
".git/objects/b3/9a432fa2c723557f702748d43756a45f0d3981": "99dccca73b685156138bcbd196b764bc",
".git/objects/b5/ab36a979f1217f500c60776a93dac977d86cfd": "eac621e118bf970016fe794f3ae0a97b",
".git/objects/b5/af92c3843d8a52624c7cdeed06bb20973a99f9": "86bdf95698c2ebe316fa7d68916dd83e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/9623ecaa4f5e854767a8bb1c863f4a5750b52c": "d3c7cc5bd920f30f25392393fc768e97",
".git/objects/b7/ad1ed03a78713c13d94fd060eba1cd195c2f3d": "78daa4d07b1635efa9af88e570fdd2d6",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/ec48596088290dbff9f55ed380d114b374d25a": "b2bf386e8bc1ed74bd93f472804ae54f",
".git/objects/bc/919f35356827f1247efebb99ba5c88f0fc93c6": "b89c4255710433628daadc3ba698a60b",
".git/objects/c4/dd984f88f7ebc199bb524f8a453f17e278c5d9": "384c234614fc2c5f1ca411c66341716c",
".git/objects/c7/83ecea668e3774e29ceab9f3a3822525edb636": "9a178c9c275d330b970b45b12f2a005d",
".git/objects/c8/28b74175214c0dc71ac71a385d6261d2012c2c": "5b8300ef1ff0bb87202a552c442b000b",
".git/objects/c9/543458560f3095039fbd6a92726c0faf0dc438": "75474261660675106c81a9141d1e277b",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/d1/0701bb853288193d965f9cdc96293b883d40d9": "674c0cc3f73134a3b84f97507a03eec2",
".git/objects/d3/a765a0b43331a6c88f8b24df0cfea22c8d3ec9": "73fc0311ad536cf030585eaef5009c5c",
".git/objects/d4/02d4dc71e2f90924f06d2fcb50653b46ba2db5": "d9dbc2e5f80fd51f9e980e852600c797",
".git/objects/d5/842f5ad7f13a92c835b932c2002294fddb46fa": "0597183791939a190d03a2e733f76de1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/5aece88d2d63a8b8b999c349a14df9a3099c3a": "753828343629218655ed5d0f1268daae",
".git/objects/d8/caccef8608bef1dabca75257c8c166cecfe75d": "85ec9f38d4a2179c20133668ba966c31",
".git/objects/d8/f42b22ec2d242ea146d2cda490cb192c114e47": "261f67aceb49cb4a0de02b9cdbb98996",
".git/objects/da/0526415f7eb2fcbf5da2b143edf73d0977ee0a": "7cd94f8dcba2026e235b4d1590f70bf9",
".git/objects/db/62a105df0e5b308c6f516ff8323cc697dfa03b": "91830e013e3534654e2de2bf39466a79",
".git/objects/db/67fb06b0085f792f0ec93c84d9adbfa7099529": "6882635279bd36f8c661c554f879d29b",
".git/objects/dd/bd1ef43500bd4512b98823c4e58d208e4185b7": "2be56abc04500e6cae2cd8d5585581d3",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e1/a8244f308133c16f67a3113b396f2ba84873dc": "8f2dec63fa7fad905b84b3c56bc2ccf9",
".git/objects/e1/e2b45575bf2368688d49113ad14482b9bfc86d": "1d85e7038338be0d7d7676463423d051",
".git/objects/e2/6c1cd350870002012b12345aa8999228806332": "c3ee09e19e7dc55a0d1dd92c14a4cfcc",
".git/objects/e4/75ed337931c52c439fc9c78c473f5cb53223ee": "31a8a12c6eee4fc4b934fbb92e012cac",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/a96d06de017e7b8610f5659a69756e8bcf964f": "2b88adb25815d048e584d42d0ad9b42a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/83a62897465ced7f119892ce14dfc1d6067d4e": "d1110c45b2599da10eaae710be958e31",
".git/objects/f1/12dc04a95971cd1a556ac7fff90a7eee07a4a6": "721d7ed29a1a87d6907d55f6be093aff",
".git/objects/f7/34242e96eed03ce0021ecb58a741b4fd332b78": "7d7bafe92cbcf3c7d9ea8ec9e86a658d",
".git/objects/f8/9fc9f854f31dfa1481d31d1b19c25816da4947": "6e21873c815076cd177381687146928c",
".git/objects/f8/f016afbd2907254692f096642812a66e50d8a5": "a6531b1a632a93311b41d9b9d2d2ab1f",
".git/objects/fc/67a5c89b7cffced6f0db6ab64749434a4f8efd": "e8d848e7f90485a692c3f685e6da4674",
".git/objects/fd/703d1f36b3ab7ec34deeb0dcf04e867db75265": "2bf9e456605aa1d76e5f42ef8aadcdae",
".git/objects/fe/09061ac78d7c500059b749a0543acfc8bfc2e3": "9466e513da13fab7fe7981bf4da298e2",
".git/objects/fe/684e5099c6ca044da76f5b514d7653b413bd50": "1849048867ded5960ce8cb9c99f743c4",
".git/ORIG_HEAD": "576866976c2318985ea49161bc1091bc",
".git/refs/heads/main": "3ee8b5034490fddd86de2345eb87055e",
".git/refs/remotes/origin/main": "3ee8b5034490fddd86de2345eb87055e",
"assets/AssetManifest.json": "5a8c69dd1c0567ec1bedb02bbfb4198a",
"assets/assets/appwrite_logo.png": "a3bcc0d167970a0a55702a90894e0959",
"assets/assets/built_with_appwrite.png": "b4af4651c3abfa56b831dea24480b730",
"assets/assets/built_with_firebase.png": "ccad480e8f050c3ddea1c88cf63dff28",
"assets/assets/decrypted_hycop_config.json": "a0250196a224ed3bd5e2da98e63c26b2",
"assets/assets/file_icon.png": "26852c09439c84e335e93aaade12949f",
"assets/assets/firebase_logo.png": "e642c7556d83be574ae3929c34ead074",
"assets/assets/grid.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/assets/hourglass.gif": "8506cfb24e5afa948db8f64bd2871518",
"assets/assets/hycop_config.json": "6d24164fc5f618fc75c40b76be063604",
"assets/assets/hycop_config.json.backup": "31ffea0d98dec089018d1c3ecf97902a",
"assets/assets/hycop_config.json.org": "c71e1b9eb9f553469a4520ce7a48e526",
"assets/assets/hycop_default.png": "cf1eb68da282f005cc5cbf8a6c3d9d8c",
"assets/assets/hycop_intro.jpg": "f1a4cc18b298e9b3efb49970a4501437",
"assets/assets/icons/Documents.svg": "0d66436fde3818811c82319665ef91fd",
"assets/assets/icons/doc_file.svg": "c6c3abe38f2b4e22ab33399b26966b1f",
"assets/assets/icons/drop_box.svg": "d427e188a7aee4612446d0e9d26e76f1",
"assets/assets/icons/excle_file.svg": "9986607c30659e3d222f9908141884f9",
"assets/assets/icons/Figma_file.svg": "90224db6835092a278153e0f60e8c203",
"assets/assets/icons/folder.svg": "8c11f522cd36f0cbd9c02eb2b689cbb9",
"assets/assets/icons/google_drive.svg": "a4cd4325c28cee54264a4942fcf6ef48",
"assets/assets/icons/logo.svg": "6194acb4fae31a2a2ee26ff61d8c644e",
"assets/assets/icons/media.svg": "e790cb1d2138f7a9d1b404abf8346eb1",
"assets/assets/icons/media_file.svg": "5b8f2b094278f5d9378bca249cf80fc1",
"assets/assets/icons/menu_dashbord.svg": "5e8d164243b3e28c22a8a5e35719c96e",
"assets/assets/icons/menu_doc.svg": "c5a576281e34f54d9e041410d002443c",
"assets/assets/icons/menu_notification.svg": "f49436dd0acd00dc43ab287c7ac3ff4f",
"assets/assets/icons/menu_profile.svg": "134c2274ffaca9441fe7523b2f476608",
"assets/assets/icons/menu_setting.svg": "32ab0402dc07a66d078c758ddb0aa798",
"assets/assets/icons/menu_store.svg": "45f31f1388616a22053ea6a99ed5904a",
"assets/assets/icons/menu_task.svg": "fa731cbcb073759bd82c699331ef7e93",
"assets/assets/icons/menu_tran.svg": "acdaeac5ea677c4a479a1d656ea3d5c1",
"assets/assets/icons/one_drive.svg": "0b0ca635ef35ec9beebb18aaf20cd5d9",
"assets/assets/icons/pdf_file.svg": "4ea6d2b9e631ee54164987b57fa240c7",
"assets/assets/icons/Search.svg": "82ad5e39b306dc6a42809cbeef651e64",
"assets/assets/icons/sound_file.svg": "d346e8558ced623138787011e0ca7e88",
"assets/assets/icons/unknown.svg": "2fc91e195e7a0d6279c01552403c3b89",
"assets/assets/icons/xd_file.svg": "fd95a4cd96e6c7251ebeac76b7b7c8b9",
"assets/assets/jisoo.png": "9ace106768f007748c3ecf8708615871",
"assets/assets/logo.png": "a6de38b7f004ea361acfbc9ed98a447e",
"assets/assets/logo_en.png": "a6de38b7f004ea361acfbc9ed98a447e",
"assets/assets/logo_kr.png": "cda01abeeea89c5a4330b703a2ee6670",
"assets/assets/logo_kr_color.png": "5ea10ed50e75b23108d9d05bad7a91e4",
"assets/assets/no_image.png": "05434b1b716ba721f3015a2393b9fe80",
"assets/assets/publish.png": "6f95739a5c4edbc0b8574f99571b98c7",
"assets/assets/sample0.jpg": "9299a7208283958616819d28e1ad0ef3",
"assets/assets/sample1.jpg": "0b0fcf415b3ba923ae8d971937baccca",
"assets/assets/sample2.jpg": "573bfc6707869d24c745848ef81fb46b",
"assets/assets/sample3.jpg": "5e63593badc13ff929f8fa9b3ab895c5",
"assets/assets/sample4.jpg": "567c498a4b1e6be8bdd15731f11e100b",
"assets/assets/sample5.jpg": "c8ecc46c33a1e10758c18eb0c8f02e86",
"assets/assets/sample6.jpg": "b66b36c7adc5a6a22c30068420f00f6f",
"assets/assets/sample7.jpg": "395f4ae1a52add6a76de946414635694",
"assets/assets/sample8.jpg": "b564befa86d7f51176efb86e8a770740",
"assets/assets/sample9.jpg": "da074e9a24368995a5f2615031a35cb2",
"assets/assets/text_hycop_config%2520-%2520%25EB%25B3%25B5%25EC%2582%25AC%25EB%25B3%25B8.json": "a0250196a224ed3bd5e2da98e63c26b2",
"assets/assets/text_hycop_config.json": "895efb417711188a1f7948e230d7dc14",
"assets/assets/video_icon.png": "496663a7b68e93be01718a08b7603de0",
"assets/assets/youtube.png": "c647da897d59668d1c5d18751e7de2aa",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "ef17f5e316a0c1cc6f3b97393bbf6265",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "0266ef445553f45f6e45344556cfd6fd",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/shaders/ink_sparkle.frag": "6acc4bb946ad86d438ab6e6920b2d14f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"cors.json": "a424ddce070cec46479430f0290c300c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e1a439e3c2268603fbb5f88d91439b5f",
"/": "e1a439e3c2268603fbb5f88d91439b5f",
"main.dart.js": "833f317dbd79a0d0e1bf6aa29cf1b59b",
"manifest.json": "8d7f71a384bcf31e61957075ed1770dc",
"version.json": "ff966ab969ba381b900e61629bfb9789"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
