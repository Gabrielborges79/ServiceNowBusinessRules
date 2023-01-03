(function executeRule(current, previous /*null when async*/) {

	var gr = new GlideRecord('sc_task');
	gr.addQuery('request_item', current.request_item); 
	gr.addQuery('active', true);
	gr.query();
	if(!gr.next()){
		var ritm = current.request_item.getRefRecord(); 
		ritm.state = 3;
		ritm.update();
	}
	// Add your code here

})(current, previous);