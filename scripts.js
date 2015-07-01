$(function() { 

	var $newItemForm = $("#new_task_item");
	var $toDoList = $("#to_do_list");

	//to do template -- this is a function
	var toDoTemplate = _.template($('#todo-template').html());

	var $toDoUl = $("#todo-list");

	var tasks = [
	  {title: "Sprinkles", description: "cat", date: "2015-07-01"},
	  {title: "Bagel", description: "dog", date: "2015-07-02"},
	  {title: "Fluffy", description: "dinosaur", date: "2015-07-03"}
	];

	_.each(tasks, function (task, index) {
	  var $task = $(toDoTemplate(task));
	  $task.attr('data-index', index);
	  $toDoUl.append($task);
	});


//listens for click on the "add to list" button
	$newItemForm.on("submit", function(event) {
		event.preventDefault();
		
		// if ( ($('#item_name').text() !== $('#item_name').val()) || ($('#item_desc').text() !== $('#item_desc').val()) || ($('due_date').text() !== $('#due_date').val()) ) {
		// 	$(".alert.alert-danger").removeClass("display");
		// } else { 

		console.log('form submitted');
		console.log($('#item_name').val() );  //shopping list name input
		console.log($('#item_desc').val() ); // shopping list description input
		console.log($('#due_date').val() ); // shopping list due date

		//creates a new variable to store the newly submitted item
		var newTasks = [];

		//adds the submitted item to an array of new items
		newTasks.push({title: $('#item_name').val(), description: $('#item_desc').val(), date: $('#due_date').val() });

		//print the new tasks to the html
		_.each(newTasks, function (task, index) {
		  var $task = $(toDoTemplate(task));
		  $task.attr('data-index', index);
		  $toDoUl.append($task);
		});


		// this allows strikeout (or "done" class) for the new items
		$listItems = $("#todo-list .to_do");
		$listItems.click(function (event) {
			event.preventDefault();
			$(this).addClass("done");
			})


		console.log("item title: " + $("#item_name").val() + " description: " + $("#item_desc").val() + " date: " + $('#due_date').val() );
		console.log(tasks);
		
		// });
	});



// this allows strikeout for the hardcoded items
	var $listItems = $("#todo-list .to_do");

		$listItems.click(function (event) {
			event.preventDefault();
			$(this).addClass("done");
			})

});



