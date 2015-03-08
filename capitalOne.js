var xhr = new XMLHttpRequest();
var user ='struggling';
var dataType = 'ProjectedForMonth';
var data = '';

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
function collatedLoanLine(results) {
	var labels = results[0];
	var data = results[1];
	var budget = 1000;
	var month = labels[0];
	var interestPayment = -187.16;
	for (var i = 0; i < data.length; i++) {
		if (labels[i] != month) {
			month = labels[i];
			data[i] += interestPayment;
		}
		data[i] = Number((budget + data[i]).toFixed(2));
	}
	return [labels, data];
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



//GetAllTransactions
xhr.open("POST", "https://api.levelmoney.com/api/v2/hackathon/get-all-transactions", true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('Accept', 'application/json');
xhr.onloadend = function() {
    var parsed = JSON.parse(this.response);
    var pretty = JSON.stringify(parsed, null, 2);
    data = parsed;
    dates = data.transactions.sort(date_sort_asc);
    collatedLine = collateHistoryForLine(dates);
    collatedPie = collateHistoryForPieByTxSize(dates);
    collatedLoanLine = collatedLoanLine(collatedLine);
    docwrite(JSON.stringify(collatedLine));
    // docwrite(JSON.stringify(collatedLine));
};
xhr.onerror = function(err) {
    document.getElementById('json_returned').textContent = "ugh an error. i can't handle this right now.";
};
args = {"args": {"uid":  uid, "token":  token, "api-token":  "HackathonApiToken"}};
xhr.send(JSON.stringify(args));



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

