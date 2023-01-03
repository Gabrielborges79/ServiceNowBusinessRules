(function executeRule(current, previous /*null when async*/ ) {

    // Add your code here


    var gr = new GlideRecord('sc_task');
    var obj = [];
    obj = current.variables.dados_do_governo;
    for (var i = 0; i < 5; i++) {
       
        gr.initialize();
        gr.request_item = current.sys_id;
        gr.description = "Orgão: " + obj[i].orgao + "\nEvento: " + obj[i].evento + "\nNum Empenho:" + obj[i].nm_empenho + "\nID Fornecedor:" + obj[i].id_fornecedor + "\nNome Fornecedor" + obj[i].nome_fornecedor + "\nData de Emissão da Despesa:" + obj[i].data_despesa + "\nValor da Despesa: " + obj[i].valor_da_despes;
        var ind = i + 1;
        gr.short_description = "Dados da " + ind + "° maior despesa";
        gr.insert();
    }




})(current, previous);