var xhr = new XMLHttpRequest();
var user ='struggling';
var dataType = 'ProjectedForMonth';
var txs = {
  "transactions": [
    {
      "transaction-id": "1425608100000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "CREDIT CARD PAYMENT",
      "merchant": "Credit Card Payment",
      "is-pending": false,
      "transaction-time": "2015-03-03T05:58:00.000Z",
      "amount": 2000000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1425585000000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "SUNOCO 0299792200",
      "merchant": "Sunoco",
      "is-pending": false,
      "transaction-time": "2015-03-05T14:03:00.000Z",
      "amount": -145500,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1425543180000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "COMCAST",
      "merchant": "Comcast",
      "is-pending": false,
      "transaction-time": "2015-03-04T08:14:00.000Z",
      "amount": -832600,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1425480720000",
      "account-id": "nonce:struggling-checking\/struggling",
      "raw-merchant": "CHECK",
      "merchant": "Check",
      "is-pending": false,
      "transaction-time": "2015-03-03T02:08:00.000Z",
      "amount": -8642900,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1425469920000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "Amazon.com AMZN.COM\/BILLWA",
      "merchant": "Amazon.com Amzn.com\/Billwa",
      "is-pending": false,
      "transaction-time": "2015-03-03T22:36:00.000Z",
      "amount": -425900,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1425415020000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "7-ELEVEN 23853",
      "merchant": "7-Eleven 23853",
      "is-pending": false,
      "transaction-time": "2015-03-03T04:26:00.000Z",
      "amount": -62100,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1425402180000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "DOMINO'S 7815",
      "merchant": "Domino's 7815",
      "is-pending": false,
      "transaction-time": "2015-03-03T02:06:00.000Z",
      "amount": -34000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1425334920000",
      "account-id": "nonce:struggling-checking\/struggling",
      "raw-merchant": "MACARTHUR FORD",
      "merchant": "MacArthur Ford",
      "is-pending": false,
      "transaction-time": "2015-02-27T06:18:00.000Z",
      "amount": -1418700,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1425307260000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "SHOPTRN*Thule",
      "merchant": "Shoptrn*Thule",
      "is-pending": false,
      "transaction-time": "2015-03-02T07:45:00.000Z",
      "amount": -467500,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1425274080000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "ATM WITHDRAWAL",
      "merchant": "ATM Withdrawal",
      "is-pending": false,
      "transaction-time": "2015-02-28T11:29:00.000Z",
      "amount": -400000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1425263400000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "7-ELEVEN 23853",
      "merchant": "7-Eleven 23853",
      "is-pending": false,
      "transaction-time": "2015-02-28T06:13:00.000Z",
      "amount": -125900,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1425168120000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "THE UPS STORE",
      "merchant": "The Ups Store",
      "is-pending": false,
      "transaction-time": "2015-02-27T20:35:00.000Z",
      "amount": -644400,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1425150720000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "DAIRY QUEEN",
      "merchant": "Dairy Queen",
      "is-pending": false,
      "transaction-time": "2015-02-26T23:12:00.000Z",
      "amount": -37100,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1425147180000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "DOLLAR GENERAL 8286",
      "merchant": "Dollar General 8286",
      "is-pending": false,
      "transaction-time": "2015-02-28T05:17:00.000Z",
      "amount": -75300,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1425142260000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "KOHL'S #0323",
      "merchant": "Kohl's #0323",
      "is-pending": false,
      "transaction-time": "2015-02-28T15:43:00.000Z",
      "amount": -269200,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1425106200000",
      "account-id": "nonce:struggling-checking\/struggling",
      "raw-merchant": "DIRDEP",
      "merchant": "Dirdep",
      "is-pending": false,
      "transaction-time": "2015-02-27T01:34:00.000Z",
      "amount": 8925800,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1425082740000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "Starbucks",
      "merchant": "Starbucks",
      "is-pending": false,
      "transaction-time": "2015-02-27T03:04:00.000Z",
      "amount": -22500,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1425015360000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "7-ELEVEN 23853",
      "merchant": "7-Eleven 23853",
      "is-pending": false,
      "transaction-time": "2015-02-25T22:44:00.000Z",
      "amount": -122800,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1424989560000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "COSTCO",
      "merchant": "Costco",
      "is-pending": false,
      "transaction-time": "2015-02-26T03:29:00.000Z",
      "amount": -567200,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1424949780000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "WALGREENS",
      "merchant": "Walgreens",
      "is-pending": false,
      "transaction-time": "2015-02-24T20:07:00.000Z",
      "amount": -32100,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1424781060000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "DOLLAR GENERAL 8286",
      "merchant": "Dollar General 8286",
      "is-pending": false,
      "transaction-time": "2015-02-21T13:44:00.000Z",
      "amount": -75500,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1424740860000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "Card Purchase BUFFALO WILD WINGS",
      "merchant": "Buffalo Wild Wings",
      "is-pending": false,
      "transaction-time": "2015-02-22T18:17:00.000Z",
      "amount": -43800,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1424649720000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "POS PUR FROM BARNESNOBLE 13800",
      "merchant": "From Barnesnoble 13800",
      "is-pending": false,
      "transaction-time": "2015-02-20T19:41:00.000Z",
      "amount": -134500,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1424353560000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "DOMINO'S 7815",
      "merchant": "Domino's 7815",
      "is-pending": false,
      "transaction-time": "2015-02-16T11:25:00.000Z",
      "amount": -39900,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1424314980000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "Petco Animal Supplies",
      "merchant": "Petco Animal Supplies",
      "is-pending": false,
      "transaction-time": "2015-02-17T07:10:00.000Z",
      "amount": -131400,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1424255880000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "Petco Animal Supplies",
      "merchant": "Petco Animal Supplies",
      "is-pending": false,
      "transaction-time": "2015-02-14T15:34:00.000Z",
      "amount": -28000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1424232300000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "H&M",
      "merchant": "H&M",
      "is-pending": false,
      "transaction-time": "2015-02-15T12:30:00.000Z",
      "amount": -78100,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1424229180000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "POS PUR FROM BARNESNOBLE 13800",
      "merchant": "From Barnesnoble 13800",
      "is-pending": false,
      "transaction-time": "2015-02-17T04:32:00.000Z",
      "amount": -442400,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1424134440000",
      "account-id": "nonce:struggling-checking\/struggling",
      "raw-merchant": "VERIZON",
      "merchant": "Verizon",
      "is-pending": false,
      "transaction-time": "2015-02-15T13:16:00.000Z",
      "amount": -660800,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1424111580000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "CHECKCARD 1103 MCDONALD'S",
      "merchant": "McDonald's",
      "is-pending": false,
      "transaction-time": "2015-02-13T19:23:00.000Z",
      "amount": -83900,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1424097660000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "Amazon.com AMZN.COM\/BILLWA",
      "merchant": "Amazon.com Amzn.com\/Billwa",
      "is-pending": false,
      "transaction-time": "2015-02-15T11:59:00.000Z",
      "amount": -220700,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1424089380000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "PAYPAL ECHECK J222",
      "merchant": "Paypal Echeck J222",
      "is-pending": false,
      "transaction-time": "2015-02-11T10:13:00.000Z",
      "amount": -533400,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1424084220000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "ATM WITHDRAWAL",
      "merchant": "ATM Withdrawal",
      "is-pending": false,
      "transaction-time": "2015-02-14T04:08:00.000Z",
      "amount": -200000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1424070000000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "KROGER LIMITED P 2009",
      "merchant": "Kroger Limited P 2009",
      "is-pending": false,
      "transaction-time": "2015-02-15T03:35:00.000Z",
      "amount": -722200,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1424061900000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "BURGER KING",
      "merchant": "Burger King",
      "is-pending": false,
      "transaction-time": "2015-02-14T06:26:00.000Z",
      "amount": -71700,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1423935900000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "Petco Animal Supplies",
      "merchant": "Petco Animal Supplies",
      "is-pending": false,
      "transaction-time": "2015-02-12T19:02:00.000Z",
      "amount": -48800,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1423929000000",
      "account-id": "nonce:struggling-checking\/struggling",
      "raw-merchant": "CC PAYMENT",
      "merchant": "CC Payment",
      "is-pending": false,
      "transaction-time": "2015-02-11T23:27:00.000Z",
      "amount": -2000000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1423926780000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "WENDYS 9974",
      "merchant": "Wendys 9974",
      "is-pending": false,
      "transaction-time": "2015-02-12T10:12:00.000Z",
      "amount": -24100,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1423896720000",
      "account-id": "nonce:struggling-checking\/struggling",
      "raw-merchant": "DIRDEP",
      "merchant": "Dirdep",
      "is-pending": false,
      "transaction-time": "2015-02-13T15:57:00.000Z",
      "amount": 8925800,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1423895700000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "Wal-Mart Super Center",
      "merchant": "Wal-Mart Super Center",
      "is-pending": false,
      "transaction-time": "2015-02-13T17:22:00.000Z",
      "amount": -523000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1423839120000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "Starbucks",
      "merchant": "Starbucks",
      "is-pending": false,
      "transaction-time": "2015-02-12T11:32:00.000Z",
      "amount": -23900,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1423803960000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "CHECKCARD 1103 MCDONALD'S",
      "merchant": "McDonald's",
      "is-pending": false,
      "transaction-time": "2015-02-12T21:09:00.000Z",
      "amount": -143000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1423563300000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "ATM WITHDRAWAL",
      "merchant": "ATM Withdrawal",
      "is-pending": false,
      "transaction-time": "2015-02-09T05:19:00.000Z",
      "amount": -200000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1423403580000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "7-ELEVEN 23853",
      "merchant": "7-Eleven 23853",
      "is-pending": false,
      "transaction-time": "2015-02-06T03:45:00.000Z",
      "amount": -23600,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1423315980000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "KROGER LIMITED P 2009",
      "merchant": "Kroger Limited P 2009",
      "is-pending": false,
      "transaction-time": "2015-02-05T06:28:00.000Z",
      "amount": -445900,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1423251300000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "WENDYS 9974",
      "merchant": "Wendys 9974",
      "is-pending": false,
      "transaction-time": "2015-02-04T11:04:00.000Z",
      "amount": -26400,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1423077060000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "GOODWILL",
      "merchant": "Goodwill",
      "is-pending": false,
      "transaction-time": "2015-02-02T16:07:00.000Z",
      "amount": -429800,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1423056600000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "COMCAST",
      "merchant": "Comcast",
      "is-pending": false,
      "transaction-time": "2015-02-03T15:32:00.000Z",
      "amount": -832600,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1423017240000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "DOMINO'S 7815",
      "merchant": "Domino's 7815",
      "is-pending": false,
      "transaction-time": "2015-02-02T15:11:00.000Z",
      "amount": -64200,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1423001100000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "CREDIT CARD PAYMENT",
      "merchant": "Credit Card Payment",
      "is-pending": false,
      "transaction-time": "2015-02-03T05:28:00.000Z",
      "amount": 2000000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1422958380000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "ATM WITHDRAWAL",
      "merchant": "ATM Withdrawal",
      "is-pending": false,
      "transaction-time": "2015-02-01T23:08:00.000Z",
      "amount": -200000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1422940320000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "Petco Animal Supplies",
      "merchant": "Petco Animal Supplies",
      "is-pending": false,
      "transaction-time": "2015-02-02T17:11:00.000Z",
      "amount": -23100,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1422933960000",
      "account-id": "nonce:struggling-checking\/struggling",
      "raw-merchant": "CHECK",
      "merchant": "Check",
      "is-pending": false,
      "transaction-time": "2015-02-03T03:07:00.000Z",
      "amount": -8642900,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1422770580000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "Card Purchase PIZZA HUT #014361",
      "merchant": "Pizza Hut #014361",
      "is-pending": false,
      "transaction-time": "2015-01-31T19:00:00.000Z",
      "amount": -50600,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1422684840000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "KROGER LIMITED P 2009",
      "merchant": "Kroger Limited P 2009",
      "is-pending": false,
      "transaction-time": "2015-01-30T23:32:00.000Z",
      "amount": -331400,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1422669480000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "BURGER KING",
      "merchant": "Burger King",
      "is-pending": false,
      "transaction-time": "2015-01-27T05:33:00.000Z",
      "amount": -100800,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1422664440000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "SUNOCO 0299792200",
      "merchant": "Sunoco",
      "is-pending": false,
      "transaction-time": "2015-01-29T08:00:00.000Z",
      "amount": -16400,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1422626940000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "TARGET",
      "merchant": "Target",
      "is-pending": false,
      "transaction-time": "2015-01-27T20:33:00.000Z",
      "amount": -44500,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1422388800000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "KROGER LIMITED P 2009",
      "merchant": "Kroger Limited P 2009",
      "is-pending": false,
      "transaction-time": "2015-01-27T19:32:00.000Z",
      "amount": -292500,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1422259320000",
      "account-id": "nonce:struggling-checking\/struggling",
      "raw-merchant": "MACARTHUR FORD",
      "merchant": "MacArthur Ford",
      "is-pending": false,
      "transaction-time": "2015-01-26T08:00:00.000Z",
      "amount": -1418700,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1422253560000",
      "account-id": "nonce:struggling-checking\/struggling",
      "raw-merchant": "DIRDEP",
      "merchant": "Dirdep",
      "is-pending": false,
      "transaction-time": "2015-01-24T02:32:00.000Z",
      "amount": 8925800,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1422231900000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "FUEL CITY",
      "merchant": "Fuel City",
      "is-pending": false,
      "transaction-time": "2015-01-25T18:37:00.000Z",
      "amount": -169700,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1422211620000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "SUNOCO 0299792200",
      "merchant": "Sunoco",
      "is-pending": false,
      "transaction-time": "2015-01-25T15:33:00.000Z",
      "amount": -42600,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1422187440000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "DAIRY QUEEN",
      "merchant": "Dairy Queen",
      "is-pending": false,
      "transaction-time": "2015-01-25T07:48:00.000Z",
      "amount": -65200,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1421736840000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "POS PURCHASE - GAMESTOP 5732",
      "merchant": "Gamestop 5732",
      "is-pending": false,
      "transaction-time": "2015-01-16T22:48:00.000Z",
      "amount": -73500,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1421552760000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "CHECKCARD 1103 MCDONALD'S",
      "merchant": "McDonald's",
      "is-pending": false,
      "transaction-time": "2015-01-17T14:58:00.000Z",
      "amount": -83000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1421548740000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "WALGREENS",
      "merchant": "Walgreens",
      "is-pending": false,
      "transaction-time": "2015-01-18T02:23:00.000Z",
      "amount": -77700,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1421541000000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "FUEL CITY",
      "merchant": "Fuel City",
      "is-pending": false,
      "transaction-time": "2015-01-15T20:38:00.000Z",
      "amount": -372100,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1421522760000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "SUNOCO 0299792200",
      "merchant": "Sunoco",
      "is-pending": false,
      "transaction-time": "2015-01-17T02:43:00.000Z",
      "amount": -125400,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1421489160000",
      "account-id": "nonce:struggling-checking\/struggling",
      "raw-merchant": "VERIZON",
      "merchant": "Verizon",
      "is-pending": false,
      "transaction-time": "2015-01-16T15:05:00.000Z",
      "amount": -660800,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1421444040000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "TACO BELL 021394",
      "merchant": "Taco Bell 021394",
      "is-pending": false,
      "transaction-time": "2015-01-16T12:59:00.000Z",
      "amount": -85600,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1421426400000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "ATM WITHDRAWAL",
      "merchant": "ATM Withdrawal",
      "is-pending": false,
      "transaction-time": "2015-01-12T11:18:00.000Z",
      "amount": -220000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1421250300000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "WMSUPERCENTER",
      "merchant": "Wmsupercenter",
      "is-pending": false,
      "transaction-time": "2015-01-10T07:25:00.000Z",
      "amount": -53400,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1421208360000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "ATM WITHDRAWAL",
      "merchant": "ATM Withdrawal",
      "is-pending": false,
      "transaction-time": "2015-01-13T22:29:00.000Z",
      "amount": -220000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1421197020000",
      "account-id": "nonce:struggling-checking\/struggling",
      "raw-merchant": "CC PAYMENT",
      "merchant": "CC Payment",
      "is-pending": false,
      "transaction-time": "2015-01-11T11:18:00.000Z",
      "amount": -2000000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1421022720000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "BURGER KING",
      "merchant": "Burger King",
      "is-pending": false,
      "transaction-time": "2015-01-10T22:37:00.000Z",
      "amount": -71400,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1420973580000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "NAIL LOVERS",
      "merchant": "Nail Lovers",
      "is-pending": false,
      "transaction-time": "2015-01-09T02:07:00.000Z",
      "amount": -590200,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1420884180000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "COSTCO",
      "merchant": "Costco",
      "is-pending": false,
      "transaction-time": "2015-01-07T10:28:00.000Z",
      "amount": -218400,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1420876380000",
      "account-id": "nonce:struggling-checking\/struggling",
      "raw-merchant": "DIRDEP",
      "merchant": "Dirdep",
      "is-pending": false,
      "transaction-time": "2015-01-08T22:33:00.000Z",
      "amount": 8925800,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1420856940000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "7-ELEVEN 23853",
      "merchant": "7-Eleven 23853",
      "is-pending": false,
      "transaction-time": "2015-01-06T00:17:00.000Z",
      "amount": -94500,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1420807320000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "TACO BELL 021394",
      "merchant": "Taco Bell 021394",
      "is-pending": false,
      "transaction-time": "2015-01-07T13:08:00.000Z",
      "amount": -88200,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1420755240000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "CVS 00466 0046 PURCHASE CVS",
      "merchant": "CVS 00466 0046 Purchase CVS",
      "is-pending": false,
      "transaction-time": "2015-01-05T19:50:00.000Z",
      "amount": -67200,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1420642320000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "Card Purchase PIZZA HUT #014361",
      "merchant": "Pizza Hut #014361",
      "is-pending": false,
      "transaction-time": "2015-01-04T13:45:00.000Z",
      "amount": -79000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1420553760000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "COMCAST",
      "merchant": "Comcast",
      "is-pending": false,
      "transaction-time": "2015-01-03T19:40:00.000Z",
      "amount": -832600,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1420546560000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "PRONTO LLC",
      "merchant": "Pronto LLC",
      "is-pending": false,
      "transaction-time": "2015-01-05T03:16:00.000Z",
      "amount": -610300,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1420398900000",
      "account-id": "nonce:struggling-checking\/struggling",
      "raw-merchant": "CHECK",
      "merchant": "Check",
      "is-pending": false,
      "transaction-time": "2015-01-03T11:35:00.000Z",
      "amount": -8642900,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1420317900000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "7-ELEVEN 23853",
      "merchant": "7-Eleven 23853",
      "is-pending": false,
      "transaction-time": "2015-01-02T09:35:00.000Z",
      "amount": -44900,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1420307220000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "CREDIT CARD PAYMENT",
      "merchant": "Credit Card Payment",
      "is-pending": false,
      "transaction-time": "2015-01-02T14:25:00.000Z",
      "amount": 2000000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1420286400000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "DOLLAR GENERAL 8286",
      "merchant": "Dollar General 8286",
      "is-pending": false,
      "transaction-time": "2014-12-30T06:01:00.000Z",
      "amount": -36300,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1420250280000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "CHECKCARD 1103 MCDONALD'S",
      "merchant": "McDonald's",
      "is-pending": false,
      "transaction-time": "2014-12-30T14:37:00.000Z",
      "amount": -56300,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1420232400000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "SOAPS N SUDS",
      "merchant": "Soaps N Suds",
      "is-pending": false,
      "transaction-time": "2015-01-01T21:25:00.000Z",
      "amount": -506800,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1420198920000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "COSTCO",
      "merchant": "Costco",
      "is-pending": false,
      "transaction-time": "2014-12-31T14:20:00.000Z",
      "amount": -274000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1420197540000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "DOLLAR TREE #02976 90",
      "merchant": "Dollar Tree #02976 90",
      "is-pending": false,
      "transaction-time": "2015-01-01T05:52:00.000Z",
      "amount": -34200,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1420082160000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "TARGET",
      "merchant": "Target",
      "is-pending": false,
      "transaction-time": "2014-12-31T15:12:00.000Z",
      "amount": -20800,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1420033200000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "NAIL LOVERS",
      "merchant": "Nail Lovers",
      "is-pending": false,
      "transaction-time": "2014-12-29T07:52:00.000Z",
      "amount": -232400,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1419883380000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "WENDYS 9974",
      "merchant": "Wendys 9974",
      "is-pending": false,
      "transaction-time": "2014-12-29T03:03:00.000Z",
      "amount": -62100,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1419836100000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "KMART 7777",
      "merchant": "Kmart 7777",
      "is-pending": false,
      "transaction-time": "2014-12-23T21:15:00.000Z",
      "amount": -101700,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1419661500000",
      "account-id": "nonce:struggling-checking\/struggling",
      "raw-merchant": "MACARTHUR FORD",
      "merchant": "MacArthur Ford",
      "is-pending": false,
      "transaction-time": "2014-12-26T16:01:00.000Z",
      "amount": -1418700,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1419581220000",
      "account-id": "nonce:struggling-checking\/struggling",
      "raw-merchant": "DIRDEP",
      "merchant": "Dirdep",
      "is-pending": false,
      "transaction-time": "2014-12-25T22:39:00.000Z",
      "amount": 8925800,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1419509280000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "THE HOME DEPOT 4702",
      "merchant": "The Home Depot 4702",
      "is-pending": false,
      "transaction-time": "2014-12-24T11:47:00.000Z",
      "amount": -309500,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1419505620000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "POS PURCHASE POS18758524 0363597 WHOLE FOODS",
      "merchant": "Whole Foods",
      "is-pending": false,
      "transaction-time": "2014-12-22T18:12:00.000Z",
      "amount": -361400,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1419476040000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "CHIPOTLE 1602 0065",
      "merchant": "Chipotle 1602 0065",
      "is-pending": false,
      "transaction-time": "2014-12-23T11:51:00.000Z",
      "amount": -70400,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1419379500000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "ATM WITHDRAWAL",
      "merchant": "ATM Withdrawal",
      "is-pending": false,
      "transaction-time": "2014-12-23T08:07:00.000Z",
      "amount": -220000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1419315240000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "Petco Animal Supplies",
      "merchant": "Petco Animal Supplies",
      "is-pending": false,
      "transaction-time": "2014-12-22T15:48:00.000Z",
      "amount": -82000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1419313320000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "DOMINO'S 7815",
      "merchant": "Domino's 7815",
      "is-pending": false,
      "transaction-time": "2014-12-21T21:14:00.000Z",
      "amount": -73700,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1419281460000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "ATM WITHDRAWAL",
      "merchant": "ATM Withdrawal",
      "is-pending": false,
      "transaction-time": "2014-12-21T11:03:00.000Z",
      "amount": -820000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1419019200000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "NAIL LOVERS",
      "merchant": "Nail Lovers",
      "is-pending": false,
      "transaction-time": "2014-12-17T22:02:00.000Z",
      "amount": -211200,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1418996220000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "CHIPOTLE 1602 0065",
      "merchant": "Chipotle 1602 0065",
      "is-pending": false,
      "transaction-time": "2014-12-18T13:13:00.000Z",
      "amount": -58700,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1418948400000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "CHECK CRD PURCHASE KFC D181002 8301 425907XXXXXX5869 384061094603982 ?MCC=5814",
      "merchant": "KFC D181002 8301",
      "is-pending": false,
      "transaction-time": "2014-12-18T09:55:00.000Z",
      "amount": -40300,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1418946900000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "CVS 00466 0046 PURCHASE CVS",
      "merchant": "CVS 00466 0046 Purchase CVS",
      "is-pending": false,
      "transaction-time": "2014-12-18T15:19:00.000Z",
      "amount": -24400,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1418902500000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "SHELL OIL 57544422702",
      "merchant": "Shell Oil",
      "is-pending": false,
      "transaction-time": "2014-12-14T23:23:00.000Z",
      "amount": -36200,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1418883360000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "Amazon.com AMZN.COM\/BILLWA",
      "merchant": "Amazon.com Amzn.com\/Billwa",
      "is-pending": false,
      "transaction-time": "2014-12-15T10:18:00.000Z",
      "amount": -438800,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1418838420000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "DOLLAR GENERAL 8286",
      "merchant": "Dollar General 8286",
      "is-pending": false,
      "transaction-time": "2014-12-16T12:53:00.000Z",
      "amount": -61100,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1418806800000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "Card Purchase BUFFALO WILD WINGS",
      "merchant": "Buffalo Wild Wings",
      "is-pending": false,
      "transaction-time": "2014-12-14T10:05:00.000Z",
      "amount": -72100,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1418797980000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "KOHL'S #0323",
      "merchant": "Kohl's #0323",
      "is-pending": false,
      "transaction-time": "2014-12-16T10:30:00.000Z",
      "amount": -323000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1418742480000",
      "account-id": "nonce:struggling-checking\/struggling",
      "raw-merchant": "VERIZON",
      "merchant": "Verizon",
      "is-pending": false,
      "transaction-time": "2014-12-16T04:36:00.000Z",
      "amount": -660800,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1418521320000",
      "account-id": "nonce:struggling-checking\/struggling",
      "raw-merchant": "CC PAYMENT",
      "merchant": "CC Payment",
      "is-pending": false,
      "transaction-time": "2014-12-12T06:18:00.000Z",
      "amount": -2000000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1418437380000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "ATM WITHDRAWAL",
      "merchant": "ATM Withdrawal",
      "is-pending": false,
      "transaction-time": "2014-12-12T13:51:00.000Z",
      "amount": -820000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1418385360000",
      "account-id": "nonce:struggling-checking\/struggling",
      "raw-merchant": "DIRDEP",
      "merchant": "Dirdep",
      "is-pending": false,
      "transaction-time": "2014-12-11T07:11:00.000Z",
      "amount": 8925800,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1418204520000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "7-ELEVEN 23853",
      "merchant": "7-Eleven 23853",
      "is-pending": false,
      "transaction-time": "2014-12-08T02:36:00.000Z",
      "amount": -105900,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1418128560000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "WENDYS 9974",
      "merchant": "Wendys 9974",
      "is-pending": false,
      "transaction-time": "2014-12-07T05:55:00.000Z",
      "amount": -106600,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1418100720000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "COSTCO",
      "merchant": "Costco",
      "is-pending": false,
      "transaction-time": "2014-12-07T06:04:00.000Z",
      "amount": -282200,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1418099640000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "H&M",
      "merchant": "H&M",
      "is-pending": false,
      "transaction-time": "2014-12-05T02:22:00.000Z",
      "amount": -58200,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1418078700000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "KOHL'S #0323",
      "merchant": "Kohl's #0323",
      "is-pending": false,
      "transaction-time": "2014-12-06T07:07:00.000Z",
      "amount": -355400,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1417992060000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "TACO BELL 021394",
      "merchant": "Taco Bell 021394",
      "is-pending": false,
      "transaction-time": "2014-12-05T08:29:00.000Z",
      "amount": -70200,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1417886700000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "COMCAST",
      "merchant": "Comcast",
      "is-pending": false,
      "transaction-time": "2014-12-05T05:38:00.000Z",
      "amount": -832600,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1417728960000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "CHIPOTLE 1602 0065",
      "merchant": "Chipotle 1602 0065",
      "is-pending": false,
      "transaction-time": "2014-12-03T04:48:00.000Z",
      "amount": -45000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1417724760000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "POS PUR FROM BARNESNOBLE 13800",
      "merchant": "From Barnesnoble 13800",
      "is-pending": false,
      "transaction-time": "2014-12-01T00:42:00.000Z",
      "amount": -488000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1417665060000",
      "account-id": "nonce:struggling-checking\/struggling",
      "raw-merchant": "CHECK",
      "merchant": "Check",
      "is-pending": false,
      "transaction-time": "2014-12-03T12:23:00.000Z",
      "amount": -8642900,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1417643220000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "CREDIT CARD PAYMENT",
      "merchant": "Credit Card Payment",
      "is-pending": false,
      "transaction-time": "2014-12-03T05:02:00.000Z",
      "amount": 2000000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1417601100000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "WMSUPERCENTER",
      "merchant": "Wmsupercenter",
      "is-pending": false,
      "transaction-time": "2014-12-02T20:11:00.000Z",
      "amount": -33800,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1417551360000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "BEST BUY #257",
      "merchant": "Best Buy #257",
      "is-pending": false,
      "transaction-time": "2014-12-02T16:32:00.000Z",
      "amount": -150500,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1417486740000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "TACO BELL 021394",
      "merchant": "Taco Bell 021394",
      "is-pending": false,
      "transaction-time": "2014-12-01T07:01:00.000Z",
      "amount": -50200,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1417394940000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "SUNOCO 0299792200",
      "merchant": "Sunoco",
      "is-pending": false,
      "transaction-time": "2014-11-30T09:10:00.000Z",
      "amount": -20400,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1417364340000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "ATM WITHDRAWAL",
      "merchant": "ATM Withdrawal",
      "is-pending": false,
      "transaction-time": "2014-11-27T01:44:00.000Z",
      "amount": -200000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1417347180000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "Petco Animal Supplies",
      "merchant": "Petco Animal Supplies",
      "is-pending": false,
      "transaction-time": "2014-11-29T05:18:00.000Z",
      "amount": -41600,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1417333620000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "Wal-Mart Super Center",
      "merchant": "Wal-Mart Super Center",
      "is-pending": false,
      "transaction-time": "2014-11-28T06:14:00.000Z",
      "amount": -324300,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1417303800000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "CHECKCARD 1103 MCDONALD'S",
      "merchant": "McDonald's",
      "is-pending": false,
      "transaction-time": "2014-11-28T11:36:00.000Z",
      "amount": -114200,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1417283520000",
      "account-id": "nonce:struggling-checking\/struggling",
      "raw-merchant": "DIRDEP",
      "merchant": "Dirdep",
      "is-pending": false,
      "transaction-time": "2014-11-27T14:14:00.000Z",
      "amount": 8925800,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1417273140000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "ATM WITHDRAWAL",
      "merchant": "ATM Withdrawal",
      "is-pending": false,
      "transaction-time": "2014-11-26T13:31:00.000Z",
      "amount": -820000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1417103700000",
      "account-id": "nonce:struggling-checking\/struggling",
      "raw-merchant": "MACARTHUR FORD",
      "merchant": "MacArthur Ford",
      "is-pending": false,
      "transaction-time": "2014-11-26T01:39:00.000Z",
      "amount": -1418700,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1416547500000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "QDOBA",
      "merchant": "Qdoba",
      "is-pending": false,
      "transaction-time": "2014-11-16T09:07:00.000Z",
      "amount": -85800,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1416376440000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "CVS 00466 0046 PURCHASE CVS",
      "merchant": "CVS 00466 0046 Purchase CVS",
      "is-pending": false,
      "transaction-time": "2014-11-17T21:59:00.000Z",
      "amount": -150800,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1416368280000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "Wal-Mart Super Center",
      "merchant": "Wal-Mart Super Center",
      "is-pending": false,
      "transaction-time": "2014-11-16T08:21:00.000Z",
      "amount": -164900,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1416360780000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "SHELL Service Station",
      "merchant": "Shell Service Station",
      "is-pending": false,
      "transaction-time": "2014-11-14T00:30:00.000Z",
      "amount": -343500,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1416317160000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "4917 SUBWAY",
      "merchant": "Subway",
      "is-pending": false,
      "transaction-time": "2014-11-18T03:32:00.000Z",
      "amount": -65100,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1416293820000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "COSTCO",
      "merchant": "Costco",
      "is-pending": false,
      "transaction-time": "2014-11-18T05:49:00.000Z",
      "amount": -192800,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1416277920000",
      "account-id": "nonce:struggling-checking\/struggling",
      "raw-merchant": "VERIZON",
      "merchant": "Verizon",
      "is-pending": false,
      "transaction-time": "2014-11-15T17:09:00.000Z",
      "amount": -660800,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1416198900000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "DOLLAR TREE #02976 90",
      "merchant": "Dollar Tree #02976 90",
      "is-pending": false,
      "transaction-time": "2014-11-13T16:59:00.000Z",
      "amount": -123800,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1416178740000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "KMART 7777",
      "merchant": "Kmart 7777",
      "is-pending": false,
      "transaction-time": "2014-11-16T06:25:00.000Z",
      "amount": -33700,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1416174180000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "DAIRY QUEEN",
      "merchant": "Dairy Queen",
      "is-pending": false,
      "transaction-time": "2014-11-15T08:59:00.000Z",
      "amount": -46100,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1416137400000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "Starbucks",
      "merchant": "Starbucks",
      "is-pending": false,
      "transaction-time": "2014-11-16T07:36:00.000Z",
      "amount": -118200,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1416129960000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "Wal-Mart Super Center",
      "merchant": "Wal-Mart Super Center",
      "is-pending": false,
      "transaction-time": "2014-11-16T08:57:00.000Z",
      "amount": -464700,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1416108540000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "BURGER KING",
      "merchant": "Burger King",
      "is-pending": false,
      "transaction-time": "2014-11-12T15:28:00.000Z",
      "amount": -116300,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1416106080000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "4917 SONIC DRIVE IN #2545",
      "merchant": "Sonic Drive In #2545",
      "is-pending": false,
      "transaction-time": "2014-11-15T08:46:00.000Z",
      "amount": -82000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1416029460000",
      "account-id": "nonce:struggling-checking\/struggling",
      "raw-merchant": "DIRDEP",
      "merchant": "Dirdep",
      "is-pending": false,
      "transaction-time": "2014-11-14T11:33:00.000Z",
      "amount": 8925800,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1416023700000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "SHOPTRN*Thule",
      "merchant": "Shoptrn*Thule",
      "is-pending": false,
      "transaction-time": "2014-11-12T18:47:00.000Z",
      "amount": -319300,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1415986200000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "WMSUPERCENTER",
      "merchant": "Wmsupercenter",
      "is-pending": false,
      "transaction-time": "2014-11-13T16:02:00.000Z",
      "amount": -44100,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1415874300000",
      "account-id": "nonce:struggling-checking\/struggling",
      "raw-merchant": "CC PAYMENT",
      "merchant": "CC Payment",
      "is-pending": false,
      "transaction-time": "2014-11-12T18:55:00.000Z",
      "amount": -2000000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1415738040000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "ATM WITHDRAWAL",
      "merchant": "ATM Withdrawal",
      "is-pending": false,
      "transaction-time": "2014-11-09T10:55:00.000Z",
      "amount": -820000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1415479680000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "BEST BUY #257",
      "merchant": "Best Buy #257",
      "is-pending": false,
      "transaction-time": "2014-11-06T07:17:00.000Z",
      "amount": -301100,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1415414820000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "ATM WITHDRAWAL",
      "merchant": "ATM Withdrawal",
      "is-pending": false,
      "transaction-time": "2014-11-05T22:18:00.000Z",
      "amount": -820000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1415397060000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "Starbucks",
      "merchant": "Starbucks",
      "is-pending": false,
      "transaction-time": "2014-11-06T21:14:00.000Z",
      "amount": -98700,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1415388240000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "DAIRY QUEEN",
      "merchant": "Dairy Queen",
      "is-pending": false,
      "transaction-time": "2014-11-05T18:08:00.000Z",
      "amount": -77900,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1415200320000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "COMCAST",
      "merchant": "Comcast",
      "is-pending": false,
      "transaction-time": "2014-11-04T12:10:00.000Z",
      "amount": -832600,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1415042820000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "CREDIT CARD PAYMENT",
      "merchant": "Credit Card Payment",
      "is-pending": false,
      "transaction-time": "2014-11-03T18:58:00.000Z",
      "amount": 2000000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1415021520000",
      "account-id": "nonce:struggling-checking\/struggling",
      "raw-merchant": "CHECK",
      "merchant": "Check",
      "is-pending": false,
      "transaction-time": "2014-11-03T12:00:00.000Z",
      "amount": -8642900,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1414910760000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "ATM WITHDRAWAL",
      "merchant": "ATM Withdrawal",
      "is-pending": false,
      "transaction-time": "2014-11-02T06:25:00.000Z",
      "amount": -820000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1414696020000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "KROGER LIMITED P 2009",
      "merchant": "Kroger Limited P 2009",
      "is-pending": false,
      "transaction-time": "2014-10-27T15:29:00.000Z",
      "amount": -272600,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1414625640000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "ATM WITHDRAWAL",
      "merchant": "ATM Withdrawal",
      "is-pending": false,
      "transaction-time": "2014-10-29T11:47:00.000Z",
      "amount": -800000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1414548960000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "WENDYS 9974",
      "merchant": "Wendys 9974",
      "is-pending": false,
      "transaction-time": "2014-10-27T08:53:00.000Z",
      "amount": -53400,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1414516440000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "H&M",
      "merchant": "H&M",
      "is-pending": false,
      "transaction-time": "2014-10-27T06:50:00.000Z",
      "amount": -60300,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1414515000000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "4917 SONIC DRIVE IN #2545",
      "merchant": "Sonic Drive In #2545",
      "is-pending": false,
      "transaction-time": "2014-10-27T20:17:00.000Z",
      "amount": -50700,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1414485600000",
      "account-id": "nonce:struggling-checking\/struggling",
      "raw-merchant": "MACARTHUR FORD",
      "merchant": "MacArthur Ford",
      "is-pending": false,
      "transaction-time": "2014-10-25T07:20:00.000Z",
      "amount": -1418700,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1414478160000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "Starbucks",
      "merchant": "Starbucks",
      "is-pending": false,
      "transaction-time": "2014-10-28T02:25:00.000Z",
      "amount": -57600,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1414461120000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "NAIL LOVERS",
      "merchant": "Nail Lovers",
      "is-pending": false,
      "transaction-time": "2014-10-26T12:13:00.000Z",
      "amount": -349500,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1414455300000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "SOAPS N SUDS",
      "merchant": "Soaps N Suds",
      "is-pending": false,
      "transaction-time": "2014-10-27T19:42:00.000Z",
      "amount": -616500,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1414410360000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "ATM WITHDRAWAL",
      "merchant": "ATM Withdrawal",
      "is-pending": false,
      "transaction-time": "2014-10-25T02:55:00.000Z",
      "amount": -220000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1414309980000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "SUNOCO 0299792200",
      "merchant": "Sunoco",
      "is-pending": false,
      "transaction-time": "2014-10-25T22:50:00.000Z",
      "amount": -71300,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1414270020000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "DOMINO'S 7815",
      "merchant": "Domino's 7815",
      "is-pending": false,
      "transaction-time": "2014-10-24T16:29:00.000Z",
      "amount": -72800,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1414266720000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "7-ELEVEN 23853",
      "merchant": "7-Eleven 23853",
      "is-pending": false,
      "transaction-time": "2014-10-24T06:19:00.000Z",
      "amount": -21000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1414252140000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "CHECK CRD PURCHASE KFC D181002 8301 425907XXXXXX5869 384061094603982 ?MCC=5814",
      "merchant": "KFC D181002 8301",
      "is-pending": false,
      "transaction-time": "2014-10-25T15:30:00.000Z",
      "amount": -54800,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1414203360000",
      "account-id": "nonce:struggling-checking\/struggling",
      "raw-merchant": "DIRDEP",
      "merchant": "Dirdep",
      "is-pending": false,
      "transaction-time": "2014-10-24T12:36:00.000Z",
      "amount": 8925800,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1414158720000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "Amazon.com AMZN.COM\/BILLWA",
      "merchant": "Amazon.com Amzn.com\/Billwa",
      "is-pending": false,
      "transaction-time": "2014-10-23T16:54:00.000Z",
      "amount": -111500,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1414032600000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "4917 SUBWAY",
      "merchant": "Subway",
      "is-pending": false,
      "transaction-time": "2014-10-20T14:22:00.000Z",
      "amount": -108400,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1413978480000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "KOHL'S #0323",
      "merchant": "Kohl's #0323",
      "is-pending": false,
      "transaction-time": "2014-10-21T22:11:00.000Z",
      "amount": -156600,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1413925440000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "WALGREENS",
      "merchant": "Walgreens",
      "is-pending": false,
      "transaction-time": "2014-10-20T20:04:00.000Z",
      "amount": -24800,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1413899100000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "ATM WITHDRAWAL",
      "merchant": "ATM Withdrawal",
      "is-pending": false,
      "transaction-time": "2014-10-20T12:53:00.000Z",
      "amount": -820000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1413618600000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "GIANT EAG 1201",
      "merchant": "Giant Eag 1201",
      "is-pending": false,
      "transaction-time": "2014-10-16T09:24:00.000Z",
      "amount": -432400,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1413616560000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "CHECKCARD 1103 MCDONALD'S",
      "merchant": "McDonald's",
      "is-pending": false,
      "transaction-time": "2014-10-15T23:51:00.000Z",
      "amount": -53800,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1413571860000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "CVS 00466 0046 PURCHASE CVS",
      "merchant": "CVS 00466 0046 Purchase CVS",
      "is-pending": false,
      "transaction-time": "2014-10-16T12:28:00.000Z",
      "amount": -57300,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1413399540000",
      "account-id": "nonce:struggling-checking\/struggling",
      "raw-merchant": "VERIZON",
      "merchant": "Verizon",
      "is-pending": false,
      "transaction-time": "2014-10-15T13:24:00.000Z",
      "amount": -660800,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1413360120000",
      "account-id": "nonce:struggling-checking\/struggling",
      "raw-merchant": "CC PAYMENT",
      "merchant": "CC Payment",
      "is-pending": false,
      "transaction-time": "2014-10-12T02:28:00.000Z",
      "amount": -2000000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1413263400000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "POS PURCHASE POS18758524 0363597 WHOLE FOODS",
      "merchant": "Whole Foods",
      "is-pending": false,
      "transaction-time": "2014-10-12T09:10:00.000Z",
      "amount": -371500,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1413178380000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "DOMINO'S 7815",
      "merchant": "Domino's 7815",
      "is-pending": false,
      "transaction-time": "2014-10-12T03:56:00.000Z",
      "amount": -93000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1413055260000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "KMART 7777",
      "merchant": "Kmart 7777",
      "is-pending": false,
      "transaction-time": "2014-10-11T16:23:00.000Z",
      "amount": -57100,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1413020100000",
      "account-id": "nonce:struggling-checking\/struggling",
      "raw-merchant": "DIRDEP",
      "merchant": "Dirdep",
      "is-pending": false,
      "transaction-time": "2014-10-11T00:49:00.000Z",
      "amount": 8925800,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1412979780000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "WALGREENS",
      "merchant": "Walgreens",
      "is-pending": false,
      "transaction-time": "2014-10-08T01:35:00.000Z",
      "amount": -24100,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1412942220000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "GIANT EAG 1201",
      "merchant": "Giant Eag 1201",
      "is-pending": false,
      "transaction-time": "2014-10-08T09:24:00.000Z",
      "amount": -188800,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1412750220000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "DAIRY QUEEN",
      "merchant": "Dairy Queen",
      "is-pending": false,
      "transaction-time": "2014-10-07T21:16:00.000Z",
      "amount": -49200,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1412563500000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "ATM WITHDRAWAL",
      "merchant": "ATM Withdrawal",
      "is-pending": false,
      "transaction-time": "2014-10-04T19:55:00.000Z",
      "amount": -800000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1412406720000",
      "account-id": "nonce:struggling-checking\/struggling",
      "raw-merchant": "CHECK",
      "merchant": "Check",
      "is-pending": false,
      "transaction-time": "2014-10-03T04:33:00.000Z",
      "amount": -8642900,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1412400600000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "COMCAST",
      "merchant": "Comcast",
      "is-pending": false,
      "transaction-time": "2014-10-03T22:32:00.000Z",
      "amount": -832600,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1412364360000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "CREDIT CARD PAYMENT",
      "merchant": "Credit Card Payment",
      "is-pending": false,
      "transaction-time": "2014-10-03T16:28:00.000Z",
      "amount": 2000000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1412223660000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "Card Purchase BUFFALO WILD WINGS",
      "merchant": "Buffalo Wild Wings",
      "is-pending": false,
      "transaction-time": "2014-09-28T08:49:00.000Z",
      "amount": -81300,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1412099340000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "THE UPS STORE",
      "merchant": "The Ups Store",
      "is-pending": false,
      "transaction-time": "2014-09-27T04:05:00.000Z",
      "amount": -388700,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1411963080000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "KOHL'S #0323",
      "merchant": "Kohl's #0323",
      "is-pending": false,
      "transaction-time": "2014-09-28T12:05:00.000Z",
      "amount": -139400,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1411944960000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "CVS 00466 0046 PURCHASE CVS",
      "merchant": "CVS 00466 0046 Purchase CVS",
      "is-pending": false,
      "transaction-time": "2014-09-28T01:22:00.000Z",
      "amount": -114000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1411932780000",
      "account-id": "nonce:struggling-checking\/struggling",
      "raw-merchant": "MACARTHUR FORD",
      "merchant": "MacArthur Ford",
      "is-pending": false,
      "transaction-time": "2014-09-27T15:01:00.000Z",
      "amount": -1418700,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1411920300000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "Starbucks",
      "merchant": "Starbucks",
      "is-pending": false,
      "transaction-time": "2014-09-28T01:56:00.000Z",
      "amount": -101000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1411874280000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "ATM WITHDRAWAL",
      "merchant": "ATM Withdrawal",
      "is-pending": false,
      "transaction-time": "2014-09-26T06:22:00.000Z",
      "amount": -800000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1411869240000",
      "account-id": "nonce:struggling-checking\/struggling",
      "raw-merchant": "DIRDEP",
      "merchant": "Dirdep",
      "is-pending": false,
      "transaction-time": "2014-09-25T22:30:00.000Z",
      "amount": 8925800,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1411789200000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "QDOBA",
      "merchant": "Qdoba",
      "is-pending": false,
      "transaction-time": "2014-09-26T20:42:00.000Z",
      "amount": -48000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1411032720000",
      "account-id": "nonce:struggling-checking\/struggling",
      "raw-merchant": "VERIZON",
      "merchant": "Verizon",
      "is-pending": false,
      "transaction-time": "2014-09-17T16:58:00.000Z",
      "amount": -660800,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1410727200000",
      "account-id": "nonce:struggling-checking\/struggling",
      "raw-merchant": "DIRDEP",
      "merchant": "Dirdep",
      "is-pending": false,
      "transaction-time": "2014-09-13T21:24:00.000Z",
      "amount": 8925800,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1410636960000",
      "account-id": "nonce:struggling-checking\/struggling",
      "raw-merchant": "CC PAYMENT",
      "merchant": "CC Payment",
      "is-pending": false,
      "transaction-time": "2014-09-12T20:30:00.000Z",
      "amount": -2000000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1410425040000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "ATM WITHDRAWAL",
      "merchant": "ATM Withdrawal",
      "is-pending": false,
      "transaction-time": "2014-09-10T09:44:00.000Z",
      "amount": -800000,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1410414540000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "PetSmart",
      "merchant": "Petsmart",
      "is-pending": false,
      "transaction-time": "2014-09-07T12:50:00.000Z",
      "amount": -279200,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1410290820000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "DOLLAR TREE #02976 90",
      "merchant": "Dollar Tree #02976 90",
      "is-pending": false,
      "transaction-time": "2014-09-08T00:03:00.000Z",
      "amount": -47300,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "1410239820000",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "7-ELEVEN 23853",
      "merchant": "7-Eleven 23853",
      "is-pending": false,
      "transaction-time": "2014-09-07T16:21:00.000Z",
      "amount": -51600,
      "categorization": "Unknown"
    },
    {
      "transaction-id": "pending:pending--0.05782032795672172",
      "account-id": "nonce:struggling-cc\/struggling",
      "raw-merchant": "QDOBA",
      "merchant": "Qdoba",
      "is-pending": true,
      "transaction-time": "2015-03-06T19:22:00.000Z",
      "amount": -51100,
      "categorization": "Unknown"
    }
  ],
  "error": "no-error"
};

// Below are options for selecting data from Capital One Levels API
if (user == 'comfortable') {
	var uid = 1110570164;
	var token = "119947F2D985C3788998543A3D3AD90C";
}
else if(user == 'struggling') {
	var uid = 1110570166;
	var token = "63C08C4AA6E3CB1A4B13C9C5299365C0";
}
else {
	var uid = 1110568334;
	var token = "7A324B8BF29BE881E76FB4492628DB83";
}

if (dataType == 'All') {
	var url = 'https://api.levelmoney.com/api/v2/hackathon/get-all-transactions'
	var args = {"args": {"uid":  uid, "token":  token, "api-token":  "HackathonApiToken"}};
}
else if (dataType == 'ProjectedForMonth') {
	var url = 'https://api.levelmoney.com/api/v2/hackathon/projected-transactions-for-month';
	var args = {"args": {"uid":  uid, "token":  token, "api-token":  "HackathonApiToken"}, "year":  2015, "month":  4};
}
else if (dataType == 'RecentAndProjected') {
	var url = 'https://api.levelmoney.com/api/v2/hackathon/balances';
	var args = args = {"args": {"uid":  uid, "token":  token, "api-token":  "HackathonApiToken"}};
}
else if (dataType == 'FindSimilar') {
	var url = 'https://api.levelmoney.com/api/v2/hackathon/find-similar-transactions';
	var args = {"args": {"uid":  uid, "token":  token, "api-token":  "HackathonApiToken"}, "transaction-ids": []};
}

// Functions for dealing with transaction conversion
function dateConverter(date) {
	var rawDate = new Date(date);
	var intToDay = {}; var intToMonth = {};
	intToDay[0] = 'Sun'; intToDay[1] = 'Mon'; intToDay[2] = 'Tue'; intToDay[3] = 'Wed'; intToDay[4] = 'Thu'; intToDay[5] = 'Fri'; intToDay[6] = 'Sat';
	intToMonth[0] = 'Jan'; intToMonth[1] = 'Feb'; intToMonth[2] = 'Mar'; intToMonth[3] = 'Apr'; intToMonth[4] = 'May'; intToMonth[5] = 'June'; intToMonth[6] = 'July'; intToMonth[7] = 'Aug'; intToMonth[8] = 'Sep'; intToMonth[9] = 'Oct'; intToMonth[10] = 'Nov'; intToMonth[11] = 'Dec';
	var day = rawDate.getDate();
	var month = intToMonth[rawDate.getMonth()];
	var year = rawDate.getFullYear().toString();
	return (day +' ' +  month + ' ' + year);
}

function num2WeekConverter(date) {
	var intToDay = {};
	intToDay[0] = 'Sun'; intToDay[1] = 'Mon'; intToDay[2] = 'Tue'; intToDay[3] = 'Wed'; intToDay[4] = 'Thu'; intToDay[5] = 'Fri'; intToDay[6] = 'Sat';
	var rawDate = new Date(date);
	return intToDay[rawDate.getDay()];
}

function weeklyPattern(results) {
	var labels = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']
	var data = [0, 0, 0, 0, 0, 0, 0]
	for (var i = 0; i < results.length; i++) {
		time = results[i]['transaction-time'];
		if (num2WeekConverter(time) == 'Sun') {
			data[0] += centocentToDollar(results[i]["amount"]);
		}
		else if (num2WeekConverter(time) == 'Mon') {
			data[1] += centocentToDollar(results[i]["amount"]);
		}
		else if (num2WeekConverter(time) == 'Tues') {
			data[2] += centocentToDollar(results[i]["amount"]);
		}
		else if (num2WeekConverter(time) == 'Wed') {
			data[3] += centocentToDollar(results[i]["amount"]);
		}
		else if (num2WeekConverter(time) == 'Thur') {
			data[4] += centocentToDollar(results[i]["amount"]);
		}
		else if (num2WeekConverter(time) == 'Fri') {
			data[5] += centocentToDollar(results[i]["amount"]);
		}
		else if (num2WeekConverter(time) == 'Sat') {
			data[6] += centocentToDollar(results[i]["amount"]);
		}
	}
	for (var i = 0; i < data.length; i++) {
		data[i] = Math.abs(Number(data[i].toFixed(2)));
	}
	return [labels, data];
}

// weeklyPattern(txs.transactions);
// docwrite(JSON.stringify(weeklyPattern(txs.transactions)))



function date_sort_asc(date1, date2) {
	if (date1['transaction-time'] > date2['transaction-time']) return 1;
	if (date1['transaction-time'] < date2['transaction-time']) return -1;
	return 0;
}

function centocentToDollar(number) {
	return number*1.0 / 10000;
}

// Outputs in line plot format
function collateHistoryForLine(transactions) {
	var labels = [];
	var data = [];
	var currDate = dateConverter(transactions[0]['transaction-time']);
	labels.push(dateConverter(transactions[0]['transaction-time']));
	var daySum = transactions[0].amount;
	for (var i = 0; i < transactions.length; i++) {
		if (dateConverter(transactions[i]['transaction-time']) != currDate) {
			data.push(Number(centocentToDollar(daySum).toFixed(2)));
			labels.push(dateConverter(transactions[i]['transaction-time']));
			currDate = dateConverter(transactions[i]['transaction-time']);
			daySum = transactions[i].amount;
		}
		else {
			daySum += transactions[i].amount;
		}
	}
	data.push(centocentToDollar(daySum));
	console.log (labels.length);
	console.log (data.length);
	return [labels, data];
}

// Plot of budget with interest payment
// Refactored to standard transaction history with 00 interest
function collatedLoanLine(results) {
	var labels = results[0];
	var data = results[1];
	var budget = 1000;
	var month = labels[0];
	var interestPayment = 0;
	for (var i = 0; i < data.length; i++) {
		if (labels[i] != month) {
			month = labels[i];
			data[i] += interestPayment;
		}
		data[i] = Number((budget + data[i]).toFixed(2));
	}
	return [labels, data];
}

function patternByWeek(results) {

}


// Outputs in pie chart format
function collateHistoryForPieByTxSize(transactions) {
	var smallTx = 0;
	var medTx = 0;
	var lgTx = 0;
	var supLgTx = 0;
	for (var i = 0; i < transactions.length; i++) {
		amnt = centocentToDollar(transactions[i].amount);
		if (amnt < 0) {
			amnt = Math.abs(amnt);
			if (amnt < 25) {smallTx += amnt;}
			else if (amnt<100) {medTx +=amnt;}
			else if (amnt<500) {lgTx+=amnt;}
			else {supLgTx+=amnt;}
		}
	}
	smallTx = Number(smallTx.toFixed(2));
	medTx = Number(medTx.toFixed(2));
	lgTx = Number(lgTx.toFixed(2));
	supLgTx = Number(supLgTx.toFixed(2));
	var data = [
    {
        value: smallTx,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Small Transactions"
    },
    {
        value: medTx,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Medium Transactions"
    },
    {
        value: lgTx,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Large Transaction"
    },
    {
        value: supLgTx,
        color: "#551A8B",
        highlight: "#b19cd9",
        label: "Very Large Transaction"
    }];
    return data;
}

function pareDownPoints(results) {
	labels = [];
	data = [];
	for (var i = 0; i < results[0].length; i++) {
		if (i%5 == true) {
			labels.push(results[0][i]);
			data.push(results[1][i]);
		}
	}
	return [labels, data];
}


dates = txs.transactions.sort(date_sort_asc);
collatedLine = collateHistoryForLine(dates);
piData = collateHistoryForPieByTxSize(dates);
collatedLoanLine = collatedLoanLine(collatedLine);
txHist = pareDownPoints(collatedLoanLine);
// docwrite(JSON.stringify(piData));


//GetAllTransactions
// xhr.open("POST", "https://api.levelmoney.com/api/v2/hackathon/get-all-transactions", true);
// xhr.setRequestHeader('Content-Type', 'application/json');
// xhr.setRequestHeader('Accept', 'application/json');
// xhr.onloadend = function() {
//     var parsed = JSON.parse(this.response);
//     var pretty = JSON.stringify(parsed, null, 2);
//     data = parsed;
//     dates = data.transactions.sort(date_sort_asc);
//     collatedLine = collateHistoryForLine(dates);
//     collatedPie = collateHistoryForPieByTxSize(dates);
//     collatedLoanLine = collatedLoanLine(collatedLine);
//     docwrite(JSON.stringify(collatedLine));
// };
// xhr.onerror = function(err) {
//     document.getElementById('json_returned').textContent = "ugh an error. i can't handle this right now.";
// };
// args = {"args": {"uid":  uid, "token":  token, "api-token":  "HackathonApiToken"}};
// xhr.send(JSON.stringify(args));



var data = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
]

