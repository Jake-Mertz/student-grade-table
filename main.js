var table = document.querySelector(".table-body");
var gradeTable = new GradeTable(table);

var header = document.querySelector(".header");
var pageHeader = new PageHeader(header);

var newAPP = new APP(gradeTable, pageHeader);
newAPP.start();
