System.register(["@angular/core", "./app.model", "./constData", "./app.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, app_model_1, constData_1, app_service_1, PersonalInfomationComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_model_1_1) {
                app_model_1 = app_model_1_1;
            },
            function (constData_1_1) {
                constData_1 = constData_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            }
        ],
        execute: function () {
            PersonalInfomationComponent = (function () {
                //7c. Constructor to initialize all properties
                function PersonalInfomationComponent(pServ) {
                    this.pServ = pServ;
                    this.canChange = false;
                    this.canEdit = false;
                    this.tableHeaders = new Array();
                    this.person = new app_model_1.Person();
                    this.persons = new Array();
                    this.arrOccupation = new Array();
                    this.arrOccupation = constData_1.Occupations;
                    this.arrQualification = new Array();
                    this.arrQualification = constData_1.Qualifications;
                    this.arrGender = new Array();
                    this.arrGender = constData_1.Genders;
                    this.arrHobbies = new Array();
                    this.arrHobbies = constData_1.Hobbies;
                    this.arrJobType = new Array();
                    this.arrJobType = constData_1.JobTypes;
                    this.arrMaritalStatus = new Array();
                    this.arrMaritalStatus = constData_1.MaritalStatuses;
                    this.arrResidentType = new Array();
                    this.arrResidentType = constData_1.ResidentTypes;
                }
                //7d. Function used to read the person object
                //and read all its properties and push them in
                //the tableHeaders property. This will be used
                //for generating table headers to show person
                //information
                PersonalInfomationComponent.prototype.createTableHeaders = function () {
                    for (var p in this.person) {
                        this
                            .tableHeaders
                            .push(p);
                    }
                };
                //7e. The loadData() function is used to make call to Angular service
                //and receive response
                PersonalInfomationComponent.prototype.loadData = function () {
                    var _this = this;
                    this
                        .pServ
                        .getAll()
                        .subscribe(function (resp) {
                        _this.persons = resp.json();
                    });
                };
                //7f.The cleatInputs() function is used to reinitialize all properties
                PersonalInfomationComponent.prototype.clearInputs = function () {
                    this.person.id = '';
                    this.person.firstName = '';
                    this.person.lastName = '';
                    this.person.middleName = '';
                    this.person.address = '';
                    this.person.city = '';
                    this.person.state = '';
                    this.person.pinCode = '';
                    this.person.email = '';
                    this.person.income = '';
                    this.person.contactNo = '';
                    this.person.qualification = '';
                    this.person.maritalStatus = '';
                    this.person.gender = '';
                    this.person.residentType = '';
                    this.person.occupation = '';
                    this.person.jobType = '';
                    this.person.hobbies = '';
                };
                //7g. The ngOnInit() function is used to call to clearInputs, loadData and  createTableHeaders at init
                PersonalInfomationComponent.prototype.ngOnInit = function () {
                    this.clearInputs();
                    this.loadData();
                    this.createTableHeaders();
                };
                //7h. The add() function is used to redeclare the person object.
                //This function sets the canChange flag to true
                //so that the table showing Person information will 
                //be hidden and the table contaiinng textboxes will be shown.    
                PersonalInfomationComponent.prototype.add = function () {
                    this.person = new app_model_1.Person();
                    this.canChange = true;
                };
                //7i. The edit() function is used to mark the Person object
                //as editable. The canEdit flag is set to true
                //to make person object editable.    
                PersonalInfomationComponent.prototype.edit = function (p) {
                    this.person = p;
                    this.canEdit = true;
                    this.canChange = true;
                };
                //7j: The save() function is used to add and edit Person object.
                //If the canEdit flag is false then the new record will be
                //created by calling post() function from service.
                //If the canEdit flag is true then the selected person
                //record will be updated by calling put() function
                //from the Angular service. Once add/edit operation
                //is over the canChange flag will be reseted to false.  
                PersonalInfomationComponent.prototype.save = function () {
                    var _this = this;
                    if (!this.canEdit) {
                        this
                            .pServ
                            .post(this.person)
                            .subscribe(function (resp) {
                            _this
                                .persons
                                .push(resp.json());
                            _this.canChange = false;
                        });
                    }
                    else {
                        this
                            .pServ
                            .put(this.person.id, this.person)
                            .subscribe(function (resp) {
                            _this
                                .persons
                                .push(resp.json());
                            _this.canChange = false;
                            _this.canEdit = false;
                        });
                    }
                };
                //7k. The delete() function is used to delete the selected person record.
                //This access delete() function from the Angular service
                PersonalInfomationComponent.prototype.delete = function (p) {
                    var _this = this;
                    this.pServ.delete(p.id).subscribe(function (resp) {
                        _this.loadData();
                    });
                };
                return PersonalInfomationComponent;
            }());
            PersonalInfomationComponent = __decorate([
                core_1.Component({ selector: 'personal-data',
                    templateUrl: '../app/app.view.html' }),
                __metadata("design:paramtypes", [app_service_1.PersonalInfoService])
            ], PersonalInfomationComponent);
            exports_1("PersonalInfomationComponent", PersonalInfomationComponent);
        }
    };
});
