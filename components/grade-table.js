class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades) {
    this.tableElement.textContent = '';

    // for (var i = 0; i < grades.length; i++) {
    //   var newRow = document.createElement('tr');
    //   var newTd1 = document.createElement('td');
    //   var newTd2 = document.createElement('td');
    //   var newTd3 = document.createElement('td');
    //     newTd1.textContent = grades[i].name;
    //     newTd2.textContent = grades[i].course;
    //     newTd3.textContent = grades[i].grade;
    //   newRow.append(newTd1);
    //   newRow.append(newTd2);
    //   newRow.append(newTd3);
    //   this.tableElement.append(newRow);
    //   }

        for (var z = 0; z < grades.length; z++) {
          this.renderGradeRow(grades[z], this.deleteGrade);
        }

        var noGrades = document.getElementById('noGrades')
      if (grades.length > 0) {
        noGrades.classList.add('d-none')
      } else {
        noGrades.classList.remove('d-none');
      }
    }


  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade) {
    var newRow = document.createElement('tr');
    var newTd1 = document.createElement('td');
    var newTd2 = document.createElement('td');
    var newTd3 = document.createElement('td');
    var newTd4 = document.createElement('td');

    var newButton = document.createElement('button');
    newButton.textContent = "DELETE";
    newTd4.append(newButton);
    newButton.addEventListener('click', function() {deleteGrade(data.id)});

    newTd1.textContent = data.name;
    newTd2.textContent = data.course;
    newTd3.textContent = data.grade;
      newRow.append(newTd1);
      newRow.append(newTd2);
      newRow.append(newTd3);
      newRow.append(newTd4);
    this.tableElement.append(newRow);
    console.log(data);
  }
}
