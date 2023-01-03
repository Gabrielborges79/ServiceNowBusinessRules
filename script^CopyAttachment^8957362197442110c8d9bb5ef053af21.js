(function executeRule(current, previous /*null when async*/ ) {

    var attachment = new GlideSysAttachment();

    var agr = attachment.getAttachments('sc_req_item', '9a26a45b97c02110c8d9bb5ef053af95');
    var gr = new GlideRecord('sc_task');
    gr.addQuery('request_item', current.sys_id);
    gr.query();

    while (gr.next()) {
        while (agr.next()) {
            var ritmsys = current.sys_id;
            var tasksys = gr.sys_id;
            var a = agr.getValue('file_name');

            if (a == 'Nota01.jpg') {
                attachment.copy('sc_req_item', ritmsys, 'sc_task', tasksys);
            }
        }
    }
})(current, previous);