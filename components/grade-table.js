class GradeTable {
  constructor(tableElement) {
    this.a = tableElement;
  }
  updateGrades(grades) {
    document.querySelector(".table-body").textContent = '';
    for (var i = 0; i < grades.length; i++) {
      var newRow = document.createElement('tr');
      var newTd1 = document.createElement('td');
      var newTd2 = document.createElement('td');
      var newTd3 = document.createElement('td');
        newTd1.textContent = grades.name;
        newTd2.textContent = grades.course;
        newTd3.textContent = grades.grade;
      newRow.append(newTd1);
      newRow.append(newTd2);
      newRow.append(newTd3);
      document.querySelector("table-body").append(newRow);
    }
  }
}
