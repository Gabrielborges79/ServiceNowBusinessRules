(function executeRule(current, previous /*null when async*/ ) {

    var gr = new GlideRecord('sc_task');
    gr.addQuery('request_item', current.request_item);
    gr.addQuery('active', true);
    gr.query();

    while (gr.next()) {
        gr.state = -5;
        gr.update();
        if (gr.next()) {
            var ritm = current.request_item.getRefRecord();
            ritm.state = -5;
            gr.state = -5;
            gr.update();
            ritm.update();
        }

    }
    // Add your code here

})(current, previous);