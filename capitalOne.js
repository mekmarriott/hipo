
var xhr = new XMLHttpRequest();
var user ='struggling';
var dataType = 'ProjectedForMonth';
var data = '';
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

function collateHistory(dataDict) {
	for (var i = 0; i < dataDict.transactions; i++) {

	}
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
    docwrite(dates.stringif)
	docwrite(dateConverter(dates[dates.length-1]['transaction-time']));
    // document.getElementById('json_returned').textContent = pretty;
};
xhr.onerror = function(err) {
    document.getElementById('json_returned').textContent = "ugh an error. i can't handle this right now.";
};
args = {"args": {"uid":  uid, "token":  token, "api-token":  "HackathonApiToken"}};
xhr.send(JSON.stringify(args));




var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};

