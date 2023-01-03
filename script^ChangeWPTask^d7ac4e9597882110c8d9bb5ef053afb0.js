(function executeRule(current, previous /*null when async*/ ) {

    // Add your code here
    (function executeRule(current, previous /*null when async*/ ) {

        var gr = new GlideRecord('sc_task');
        gr.addQuery('request_item', current.request_item);
        gr.addQuery('active', true);
        gr.query();

        while (gr.next()) {
            gr.state = 2;
            gr.update();
            if (previous.state == -5 && current.state == 2) {
                if (gr.next()) {
                    var ritm = current.request_item.getRefRecord();
                    ritm.state = 2;
                    gr.state = 2;
                    gr.update();
                    ritm.update();
                }
            }



        }
        // Add your code here

    })(current, previous);

})(current, previous);