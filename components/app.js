class APP {
  handleGetGradesError(error) {
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);

    var sum = null;
    for (var i = 0; i < grades.length; i++) {
      sum += grades[i].grade;
    }
    if (grades.length === 0) {
      gradesAverage = "N/A";
    } else {
    var gradesAverage = sum / grades.length;
    }
    this.pageHeader.updateAverage(gradesAverage);


  }
  constructor(gradeTable, pageHeader, gradeForm) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
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
    this.gradeForm.onSubmit(this.createGrade);
    this.gradeTable.onDeleteClick(this.deleteGrade);
  }
  createGrade(name, course, grade) {
    $.ajax({
      url: "https://sgt.lfzprototypes.com/api/grades",
      method: "POST",
      data: {name: name, course: course, grade: grade},
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError,
      headers: {
        "x-access-token": "HdLTb3Wd"
      }
    })
    console.log(name, course, grade);
  }
  handleCreateGradeError(error) {
    console.error(error);
  }
  handleCreateGradeSuccess() {
    this.getGrades();
  }
  deleteGrade(id){
    $.ajax({
      url: "https://sgt.lfzprototypes.com/api/grades/"+id,
      method: "DELETE",
      data: 'none',
      success: this.handleDeleteGradeSuccess,
      error: this.handleDeleteGradeError,
      headers: {
        "x-access-token": "HdLTb3Wd"
      }
    })
  }
  handleDeleteGradeError(error) {
    console.error(error);
  }
  handleDeleteGradeSuccess() {
    this.getGrades();
  }
}
