
function numberWithCommas(n) {
    var parts=n.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
}
function getTheData(){

var amount = document.querySelectorAll(".views-field-field-budget-amount");
var budget = amount[1].innerHTML;

//alert(budget);
	//ceate a list of objects with nested sytle
	var nodeList = document.querySelectorAll(".views-field-field-amount");
	var spent = 0;
	if (nodeList){
		// turn the array into a list
		var nodesArray = Array.prototype.slice.call(nodeList);
		var numberItems = nodesArray.slice(1);
		// parse thru the list
		//if(nodesArray){alert("nodearray");}
		numberItems.forEach(function(item, index, array) {
			//look for a specific word in the inner html

		var	itemAmount = numberItems[index].innerHTML;
		var itemNum = parseFloat(itemAmount);
		 if(typeof itemNum == 'number'){
			 //alert(itemNum);
			 spent = spent + itemNum;
		 }
		});
	}
	//alert(spent);
	document.getElementById("total-budget").style.backgroundColor = "#82d88e";
	document.getElementById("total-spent").style.backgroundColor = "#3db6f6";

	if((spent/budget)< .8){
	document.getElementById("total-remain").style.backgroundColor = "#82d88e";
}
if( ((spent/budget) >= .8) && ((spent/budget)< .9) )  {
document.getElementById("total-remain").style.backgroundColor = "#f59e42";
}
if((spent/budget)>= .9){
document.getElementById("total-remain").style.backgroundColor = "#f6403d";
}
	document.getElementById("budget-amount-value").innerHTML = numberWithCommas(budget);
		var budgetAmount = parseFloat(budget);
	document.getElementById("total-budget-spent").innerHTML = numberWithCommas(spent);
	var remaining = Math.round(budget - spent);
	document.getElementById("total-budget-remaining").innerHTML = numberWithCommas(remaining);
}
// wait untit the entire document has loaded, including all attached objects
window.addEventListener("load", function(){
    getTheData();
});
//budget-amount-value
//total-budget-spent
//total-budget-remaining
