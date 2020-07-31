class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }
  updateGrades(grades) {
    this.tableElement.textContent = '';
    for (var i = 0; i < grades.length; i++) {
      var newRow = document.createElement('tr');
      var newTd1 = document.createElement('td');
      var newTd2 = document.createElement('td');
      var newTd3 = document.createElement('td');
        newTd1.textContent = grades[i].name;
        newTd2.textContent = grades[i].course;
        newTd3.textContent = grades[i].grade;
      newRow.append(newTd1);
      newRow.append(newTd2);
      newRow.append(newTd3);
      this.tableElement.append(newRow);
      // this.a.querySelector(".table-body");
    }
  }
}
