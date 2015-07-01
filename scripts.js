$(function() { 

	var $newItemForm = $("#new_task_item");

	//to do template -- this is a function
	var toDoTemplate = _.template($('#todo-template').html());

	//element to hold our list of to dos
	var $toDoUl = $("#todo-list");

	//tasks is a model of our "seed"/test data
	var tasks = [
	  {title: "Sprinkles", description: "cat", date: "2015-07-01"},
	  {title: "Bagel", description: "dog", date: "2015-07-02"},
	  {title: "Fluffy", description: "dinosaur", date: "2015-07-03"}
	];

	//append existing seed data to the HTML
	//_.each is an iterator function provided by Underscore.js
	_.each(tasks, function (task, index) {
	  var $task = $(toDoTemplate(task));
	  $task.attr('data-index', index);
	  $toDoUl.append($task);
	});


//listens for click on the "add to list" button to create new task
	$newItemForm.on("submit", function(event) {
		event.preventDefault();

		//create new todo object from form data
		var toDoName = $('#item_name').val();
	    var toDoDesc = $('#item_desc').val();
	    var toDoDate = $('#due_date').val();
	    var toDoData = {title: toDoName, description: toDoDesc, date: toDoDate};

		
		//store our new toDoData
		tasks.push(toDoData);
		console.log(tasks);
		var index = tasks.indexOf(toDoData);

		// append our new todo to the page
	    var $task = $(toDoTemplate(toDoData));
	    $task.attr('data-index', index);
	    $toDoUl.append($task);

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


// $toDoUl.on('click', '.to_do-text', function() {
//   $(this).toggleClass('done');
// });


});



