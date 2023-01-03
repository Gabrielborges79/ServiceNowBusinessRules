(function executeRule(current, previous /*null when async*/ ) {
    var gr = new GlideRecord('sc_task');
    gr.addQuery('request_item', current.sys_id);
    gr.addQuery('active', true);
    gr.query();
    while (gr.next()) {
        if (current.state == 3 || current.state == 4 || current.state == 7) {
            gs.addInfoMessage("Não é possivel encerrar RITM com tasks Abertas!");
            current.state = previous.state;
            gr.update();
        }
    }
    // Add your code here

})(current, previous);