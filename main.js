document.addEventListener("DOMContentLoaded", init);

function init(){ 
    st1 = new Student('Olga Ivanova', '1');
    st2 = new Student('Oleg Petrov', '1');
    st3 = new Student('Vasia Stepanov', '2');
    st4 = new Student('Vera Igoreva', '2');
    st5 = new Student('Galina Seraya', '3');
    
    studentList = [st1, st2, st3, st4, st5];
    
    addNewIssue('First test', '2018-11-15');
    addNewIssue('Second test', '2018-12-25');
}

function Student(name, group) {
    this.name = name;
    this.group = group;
    this.issues = [];
};

function Issue(name, deadline) {
    this.name = name;
    this.deadline = deadline;
    this.isComplited = false;
    this.mark = '';
};

function addNewIssue(name, deadline) {   
    for (var i = 0; i < studentList.length; i++) {
        studentList[i].issues.push(new Issue(name, deadline));
    };
};

Student.prototype.getComplited = function() {
    complitedList = [];
    for (var i = 0; i < this.issues.length; i++) {
        if (this.issues[i].isComplited) {
            complitedList.push(this.issues[i]);
        };
    }; 
    return complitedList;
};


Student.prototype.getFailed = function() {
    failedList = [];
    for (var i = 0; i < this.issues.length; i++) {
        if (!this.issues[i].isComplited && Date.now() > Date.parse(this.issues[i].deadline)) {
            failedList.push(this.issues[i]);
        };
    }; 
    return failedList;
};
