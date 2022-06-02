
    function marcarTodos(marcar) {
        var itens = document.getElementsByName('marcar');

        if (marcar) {
            document.getElementById('click').innerHTML = 'Desmarcar Todos';
        } else {
            document.getElementById('click').innerHTML = 'Marcar Todos';
        }

        var i = 0;
        for (i = 0; i < itens.length; i++) {
            itens[i].checked = marcar;
        }

    }

    function contar() {
        var checkboxes = document.getElementsByName('marcar');
        var cont = 0;

        for (var j = 0; j < checkboxes.length; j++) {
            if (checkboxes[j].checked) {
                cont = cont + 1;
            }
        }

        alert("O número de checkbox selecionados: " + cont);
    }