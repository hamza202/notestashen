var DatatablesBasicHeaders = {
    init: function () {
        $("#m_table_1").DataTable();
    }
};
var DatatablesBasicHeaders2 = {
    init: function () {
        $("#m_table_2").DataTable();
    }
};
jQuery(document).ready(function () {
    DatatablesBasicHeaders.init()
    DatatablesBasicHeaders2.init()
});
