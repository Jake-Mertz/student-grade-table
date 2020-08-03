var table = document.querySelector(".table-body");
var gradeTable = new GradeTable(table, noGrades);

var header = document.querySelector(".header");
var pageHeader = new PageHeader(header);

var form = document.querySelector('.form');

var gradeForm = new GradeForm(form);

var newAPP = new APP(gradeTable, pageHeader, gradeForm);
newAPP.start();
