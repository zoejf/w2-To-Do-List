$(function() { 

	var $newItemForm = $("#new_task_item");
	var $toDoList = $("#to_do_list");
	var listArray = [];
	var liArray = [{item_title: "Walk the dog", description: "for 30 mins", due_date: "2015-06-30"}, {item_title: "Do Laundry", description: "all of it", due_date: "2015-07-20"}, 
	{item_title: "Make Lunch", description:"4 servings for the week", due_date: "2015-08-10"}];

//pre-loads first three list items
$(liArray).each (function displayItems() {
		var $newLI = $('<li class="item"> Item: ' + this.item_title + ";     Description: " + this.description + ";     Due Date: " + this.due_date + '</li>'); 
		$('#to_do_list').append($newLI);
});

	//listens for click on the "add to list" button
	$newItemForm.on("submit", function(event) {
		event.preventDefault();
		console.log('form submitted');
		console.log($('#item_name').val() );  //shopping list name input
		console.log($('#item_desc').val() ); // shopping list description input
		console.log($('#due_date').val() ); // shopping list due date

		//creates a new variable to store the newly submitted item
		var $newLI = $('<li class="item"> Item: ' + $('#item_name').val() + ";    Description: " + $('#item_desc').val() + ";    Due Date: " +  $('#due_date').val() +'</li>'); 
		
		//adds the submitted item to the list below
		$('#to_do_list').append($newLI);
		
		// this allows strikeout (or "done" class) for the new items
		$listItems = $("#to_do_list .item");
		$listItems.click(function (event) {
			event.preventDefault();
			$(this).addClass("done");
			})

		//push the newly submitted items to the array of items
		listArray.push({item_title: $("#item_name").val(), description: $('#item_desc').val() });

		console.log("item name: " + $("#item_name").val() + "description: " + $("#item_desc").val() );
		console.log(listArray);
	});


// this allows strikeout for the hardcoded items
	var $listItems = $("#to_do_list .item");

		$listItems.click(function (event) {
			event.preventDefault();
			$(this).addClass("done");
			})

});



