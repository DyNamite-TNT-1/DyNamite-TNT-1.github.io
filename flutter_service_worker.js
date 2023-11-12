'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "e1060ec7f758958a415b925932e8dc76",
".git/config": "f3711e7b9e6512466111084ab81f1e68",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4af82ac42d8692863903f43b798f4a7e",
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
".git/index": "aaad62809b6a0d334797a0a866ca2844",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "df6043ab97c7ac0ea383e7695642d1eb",
".git/logs/refs/heads/main": "fb0497eb8f1c7347b8f346709caff189",
".git/logs/refs/remotes/origin/main": "bd0399f6ae0c3084c408a9b6ea11c356",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0c/383609abdebe30052fe7d9836da611f54a8915": "d0975de70b39d77505fe25a02758b762",
".git/objects/0d/d0b4f214b5bf13cbeda8a3c271bfd50a0c43da": "a2c8de79f641065776b664d3d8e8219e",
".git/objects/0f/c6e40f816c52f3267008e4290b81b2ab0d2a68": "2c3bcbba0f6ec9fab82f7fababad3fc5",
".git/objects/16/4371abfb5843614fe5a0343c6ee844facdc79c": "3757731373a71facb6effd9fb90119b2",
".git/objects/1c/30a19264013be2e5add6557a95ae62622900d3": "fd57f02ec4750e9fdeb69c33cf5a4234",
".git/objects/1c/9ad90910e11ea03fdc4537e9105f164784d1bd": "f5aa91c5fba9ebc5eaab9b4f9e91f96d",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/e6b08d061ec2557c25d05aef4e1da46f7ec4bc": "91026f777b00b042116d75709e974cbe",
".git/objects/22/1da750131b0e3b8ccfdac62d17353b76cef7cc": "7493995241d9e3dba6e3583a2b30d3c6",
".git/objects/23/d2d2af20929f6ac4bfd6c461b7d159a2e3e267": "d8701e509aa9c6f7e8aa6d9883142c92",
".git/objects/25/cd1e4c9e533d500e8de04a617757c152dc9861": "f9a6f40ec34ffe84e611b8ee0d11baf3",
".git/objects/26/cb44bd0fdbb9a668d372ae10edc231c789d240": "5bc34546e26ae4e679afff7af384d08b",
".git/objects/2b/5603e1a24f30fa4455195d301a85c432bcaeac": "6a2921a88606a318fc0f10fd298168b1",
".git/objects/2c/edf8e17e1a02e3267b4792a4e1397bb0201b2e": "3dbda59604a6960ca294309653ee00db",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2f/804ca3167546f337d5e8665cd5359149a531d6": "37cf727f2856691f4b78fa961232a121",
".git/objects/30/8b22b5788bf43fe0ac5ab522a0b07817bdfd2f": "976e574f48599c1fe0d6864535add10b",
".git/objects/33/a976824aae6bfcb3b9b7002be88b92d405ea10": "53f72895f2fb8afd1fdca039f893bac7",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3b/5397764ea3b51c541d04f0e38f93fb8d2f227f": "60bd28b8de739f27e92774c9be6592c9",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/42/d06942d93006ec7fb073a3bd4e68ad9450f613": "715e5bcfbca3bdd6eed57bae690201d2",
".git/objects/44/0fd073493e0e388d1bc395c205f7593105997f": "2a053a58c9f7e4939db875f6aa1e44f5",
".git/objects/45/e30b8b40ba42a1aba95f1f5955c9ce54c54d1f": "d0657bbf2abbe0ab7ed9daa54544ecfa",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/8b6b7dc846c02c8eb044d7c445a7b8e948117b": "cf5fdc63122bc48cac09170acb6a6733",
".git/objects/56/ce6ca6b493f68e2a018a66cbe60f443785ce95": "b7022a8501c7b2989b72812c8b5434ac",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/65/14c7980be13b355401c9f7fa43747b8ce1dbb3": "49646a24c3ee89ed9453d463acf13e33",
".git/objects/67/5d39363cabc20578b06f831a6edd2c73140aa4": "eb7be686908ae2cfea992576fe42e5cc",
".git/objects/69/578e7f2b32f7c951af3f1e3fc7bf55a31d7392": "8c7b4792c2671ab1a67e69690071ae2d",
".git/objects/6e/ba6fc4300763b89455eb37dd5db38019241479": "ccbc15f25749072842776d4e4b33ecc5",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/49cba01e5b5fa6c440d213859ac5a8a075ee55": "3f074c337f0fa0d965eac2e23d017c9d",
".git/objects/71/40c716668cefa628cab3c9c73a06a8dab43d14": "b359d120d2ac9ccab358779c9bdfb9a5",
".git/objects/79/0390483818bfddc9f7e919bd66ca5da3f976c8": "ec4de6f870a940004eeebfb6e58f2acf",
".git/objects/79/8768fd4573de79716c496da3a92aa7eb70d060": "8743725dc9f59c2555a81736bafbd20e",
".git/objects/7a/36f218184f26a3ffc454fe78b2bbc8d1be0d6e": "0f0155f2c3408b97515fdd3732085a69",
".git/objects/82/e7fd1f5af1e3dec229284f325a0932e603c3b0": "4278e76266b9665a406d607db54f3c77",
".git/objects/86/de114adb2ee4820966d8251e8fa666c5086fa9": "87ae1fde86cc333185430909bf5cedfb",
".git/objects/87/027ef0e560cd05698fc85af6be077b5ec3b968": "ca28d10634b7786e84a9710086c4f974",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/beb8bda78d6b2cedfb51c275b448b7e1a80faf": "c63e82cc0ebc2af6d0ee189a660d0099",
".git/objects/89/deb4b84885689b2e07810857bbba0bdf30d243": "0e114348051d6ca88303f0f07be583f7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/eebdc5a21bfed46a9efb28e5448434e69760cc": "1476c012ebc9953f3418cb5e992be799",
".git/objects/8c/b159ec4c9469fb5702282e923d61c00c570ea0": "79f72e39dd503eb3856f8c6a145eeda4",
".git/objects/8d/445d930916f9dedcc8796df58dc6db6d3d26d4": "0266e051a975c2b5a9d3f314be339620",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/90/68b380531593925141aabbe8316aae14f10bb2": "c68347a754d40e23dc42c27124b83478",
".git/objects/93/5206aeb7e003b46b7ccb7fc15e6ea336e0958b": "01eff430d3b4941d222cec7be9bd42ae",
".git/objects/93/e4c85a7060ec1b251e6b0f7438e580b90c15be": "2fcbb66319a25fe0d69f1c1fa37c4911",
".git/objects/93/f49c09f63e03237f1a1d11dddf23c2b7632b3b": "783966e703b4bb32f4d8351038094347",
".git/objects/94/ab09010993ce99dd4b5373e2c79acd60a06713": "0ac4644c7debde373a8039b92a96545a",
".git/objects/95/28ba71fc01414a537cec9986d3223c17f8c50c": "56bd2befc11d08c14e80120738fbab50",
".git/objects/9a/3b4ca7a40100cd34a72fb70a10145553dd0b36": "b57d5045349176dc12d054851bb5e2d9",
".git/objects/9f/15b225633dd4c4a4563ce250d48394377bd643": "5022cba9d8288eb2413b791cb6d515c8",
".git/objects/a2/19dcb24af31dc7915b14e49ec1ffb71560c616": "71e4de7e0b2ce6bbb644c8bb21227f60",
".git/objects/a4/db684e091bcd89e55ba2662e28d103c15eb572": "6a6bbe9713405a7f573bb975ec6bcfd0",
".git/objects/a7/5fe60aa56ae28abe62d7139cf0174e3f390a8b": "f7e28100944458c0a4f8ced4a454c9fc",
".git/objects/a8/710314f7418a72dd466adb187550a77dd3804a": "af97492a00e01384caf3d16e84487b8a",
".git/objects/ab/1862a49519f2a04bc4ef5557b7b7941b23f587": "2e7c6d843c42d37f9dbf567b61d216a1",
".git/objects/ab/ebdb79233c4bbd4ea7b7d042eaa17d4b925db5": "ed8863b7b25114eae660aba1fa342b4d",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b1/26c22c7436939768ed01ca3ac0900ac7e9802f": "4eab3d95e46d52fe8b4d9ea6709a6d49",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/c64244cfd28b831739a92f5a597a02b2cae18c": "86cdc8c5a97a2470aad34e770f72c4ce",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/364ac8b100c3cecb9e5f4ddc9840ff7e2ad7fa": "8eb92807b44e129aa8499d05bc8b3da6",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/6f57a77c1d9defe1f9ff5d5537c4de48fbf7c5": "a6335be26fb81115056a1ed76b759c65",
".git/objects/bd/99431322154d270670ee6d4e29770f8e918e8e": "68510213c887fdcca540a9a7b4d6e2a0",
".git/objects/bd/f1fc65e2e879269541c7fcb0ba56819a359683": "d812d72c6fe2f68d1e3307cd87af37bc",
".git/objects/be/f23cb57ef7161a311400156a6ba3a5dbda64ca": "4e30582e2721e6a21c621c0acb8e75b4",
".git/objects/c2/bb765f24dc1c49172dffa94ee075a17f741a6a": "7a50b7db62cd6e2fc66512aa70a6ae2a",
".git/objects/c3/36900b3763bb35c726a4d9c60f2c4f2f3e9e61": "e97a7583702ebe529f9e719c8793fb05",
".git/objects/c4/39000605f60475a99cbebdf71a4831ace261f5": "92415fa10814a0b79ebd8dc1a4487ea0",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/ce/948ae3389e0f43541dce4deb06924b4a3c174f": "66bfaf4868ad9e00720581f4f65c72ef",
".git/objects/d0/ee45fef6a1325d597d4e88821d039636d971f6": "11778c453afcab6e52c19b63b7e7d186",
".git/objects/d2/c23b8d9d41b0157b16da0d55aa28cd3ad12b6e": "91e45f80a227e13c348163623cefbb23",
".git/objects/d2/cfc37e332c36357d4fcf6e30d88eb75626ab63": "a5d130c393ded8c1f7a8e2db9a4ce25c",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/64d0bc3dd917926892c55e3706cc116d5b165e": "ab5f20dcd5b558888db7d80b0f979f8a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/ffd3db5a56ef98ea7ee7ac74f261d8936d3c6b": "558ce2898476c5e388041943011078bd",
".git/objects/dd/f4bfacb396e97546364ccfeeb9c31dfaea4c25": "049d11285bcbd30a249b4dff756126a0",
".git/objects/de/f03bcd5416f5036a4c42d8ccd9047c4cde1b18": "abc62ca237b51af9abd9a7cca5c885e7",
".git/objects/e3/7280810870cde91ad1708718b308a9261f2707": "ad2df7e469f9fb287ed3a93fe47b9bc6",
".git/objects/e4/f9cf6888b9b262a669b5037ea645b58827ca4e": "9a2d842d48ac8a995c1c11864034e898",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/ea/3e3393c68b0edc932e973c004b3c26c9b6f786": "f9930daa302268b2663a6061666cb59a",
".git/objects/ea/b3bc076b12c244fdd1c17a1882a56f601386d4": "78d584ca970cb06c4766fce709f98ad7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/65ddad1bb7da1fa4715d9ab801054876f42481": "daa7574643696530b40bc30733d71f39",
".git/objects/ed/939aefe635987ec2a5618099f6770fb0807fe3": "510f45e560c6dd99b264283cce181aa1",
".git/objects/f0/5f05fd12263b8a7ba55453fa0b85a755ce2f67": "bc1c3cfc7dd6d950e90af35b683ffaf3",
".git/objects/f1/1b2dbcece74bd882471ef45ed3a7eb3c812049": "a69c4337a90b77d910b033e3909dbd45",
".git/objects/f1/40a07724a5b82af7805b2c5db17f748b5bdd0d": "f4eade3b202022c33ddacd1a1410574a",
".git/objects/f8/ee6ec9c8b8393e68765e38bc8bd532bfdd2754": "d416504f49262c44d5d4e8f86cefc95b",
".git/ORIG_HEAD": "0b38b51ff8100380f8bd0a38def6be2f",
".git/refs/heads/main": "b8a1e1700b7c14c546f72a4dd3a740ac",
".git/refs/remotes/origin/main": "b8a1e1700b7c14c546f72a4dd3a740ac",
"assets/AssetManifest.bin": "80b25bf6b63520e108555da62cdf91f2",
"assets/AssetManifest.json": "8fd0a6d2707d648d729f30d6584f9183",
"assets/assets/images/background_login.jpg": "4af3c3a58a4939bd0b73bee36dde0756",
"assets/assets/images/ic_available_calendar.svg": "255e96bd38af20c5d1aabb172e51db9c",
"assets/assets/images/ic_checked.svg": "a56f72055345447bc63ae4024fc58a7b",
"assets/assets/images/ic_clear.svg": "f84b59e8e16f1d318d326d34dd398d34",
"assets/assets/images/ic_drink.svg": "8350f72f7eb3013cc696f49847ebd161",
"assets/assets/images/ic_fork_knife.svg": "841f370105486ad77798ba3530130f80",
"assets/assets/images/ic_language.svg": "03d7e2851a01bfcbf34cf32f2ed9a48c",
"assets/assets/images/ic_micro.svg": "0f99989be7ecdb9c6821e3a3bee8122b",
"assets/assets/images/ic_search.svg": "0cd37179b8d50d607614923fb7c36527",
"assets/assets/images/ic_setting.svg": "54fe05bac92c99c71c2b8bc236c89338",
"assets/assets/images/logo_website.png": "15df16a350b5bf582c29adfa1d3e9c44",
"assets/assets/images/logo_website_darkmode.png": "a8409d7400dce47f94f994adbed5e3e2",
"assets/assets/images/logo_website_darkmode_nobg.png": "07fbbea40b5e95a2d54d9714af450a0e",
"assets/assets/images/logo_website_nobg.png": "88ee572f1acec3a0a21a7d98d7a73a25",
"assets/assets/images/mini_logo_website.png": "4cbe7a6dac274806c931cd2be9d2f0ac",
"assets/assets/images/mini_logo_website_nobg.png": "4a75d236716529023ec3729633d2eefe",
"assets/assets/images/no_avatar_user.svg": "e982b7f1cc922769ff4c264db3649bda",
"assets/assets/images/no_data_found.jpg": "c3fe01c396fc9f830311a4af5e7a9a44",
"assets/assets/images/slider1.png": "0de0b217c033620e761c9d5a900f6d30",
"assets/assets/images/slider2.png": "6d52e3d942b9cac24a532291897e3fa1",
"assets/assets/locale/en.json": "0b7f84be845a58cc7569fdea3d3e8c4e",
"assets/assets/locale/vi.json": "f05c7c19449bc2c5ac71d3d8add3ab02",
"assets/FontManifest.json": "535f15d5ee3029ad18f23a9a1ce25fdb",
"assets/fonts/MaterialIcons-Regular.otf": "eb04b96e99df1bb9ebbf336dfc75d248",
"assets/NOTICES": "ff9ca47b68136b827bad5976f19a1276",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/dropdown_button2/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2886b159d2982b6fde33ee56bbad36da",
"/": "2886b159d2982b6fde33ee56bbad36da",
"main.dart.js": "27500184d8162a8957c230d424091bfa",
"manifest.json": "ba25617bd8adede84ee8fc6a178d3a09",
"version.json": "6f959fbc295ba6724a64c02afe7d8285"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
