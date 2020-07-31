class APP {
  handleGetGradesError(error) {
    console.log(error);
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);

    var sum = null;
    for (var i = 0; i < grades.length; i++) {
      sum += grades[i].grade;
    }
    var gradesAverage = sum / grades.length;
    this.pageHeader.updateAverage(gradesAverage);

    console.log(grades);
  }
  constructor(gradeTable, pageHeader, gradeForm) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
  }
  getGrades() {
    $.ajax({
      url:"https://sgt.lfzprototypes.com/api/grades",
      method: "GET",
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError,
      headers: {
        "x-access-token": "HdLTb3Wd"
      }
  })
  }
  start() {
    this.getGrades();
  }
}
