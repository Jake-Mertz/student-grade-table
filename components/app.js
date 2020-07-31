class APP {
  handleGetGradesError(error) {
    console.log(error);
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);
    console.log(grades);
  }
  constructor(gradeTable, pageHeader) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
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
