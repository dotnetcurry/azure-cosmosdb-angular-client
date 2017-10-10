//1. Import standard Angular modules
import {Component, OnInit} from '@angular/core';
//2. Import Person class
import {Person} from './app.model';
//3. Import all constants
import {
    Occupations,
    JobTypes,
    Genders,
    Hobbies,
    MaritalStatuses,
    ResidentTypes,
    Qualifications
} from './constData';
//4.Import the Service
import {PersonalInfoService} from './app.service';
//5. Import Response object
import {Response} from "@angular/http";
//6. Import Observable object
import {Observable} from "rxjs";
//7. Define the component
@Component({selector: 'personal-data', 
templateUrl: '../app/app.view.html'})
export class PersonalInfomationComponent implements OnInit {
//7a. Define properties used for databinding
    person : Person;
    persons : Array < Person >;
    arrGender : Array < string >;
    arrOccupation : Array < string >;
    arrJobType : Array < string >;
    arrQualification : Array < string >;
    arrHobbies : Array < string >;
    arrMaritalStatus : Array < string >;
    arrResidentType : Array < string >;
    canChange : boolean;
    canEdit : boolean;
//7b.The property which will be ued to generate table headers
    tableHeaders : Array < string >;
//7c. Constructor to initialize all properties
    constructor(private pServ : PersonalInfoService) {
        this.canChange = false;
        this.canEdit = false;
        this.tableHeaders = new Array < string > ();
        this.person = new Person();
        this.persons = new Array < Person > ();
        this.arrOccupation = new Array < string > ();
        this.arrOccupation = Occupations;
        this.arrQualification = new Array < string > ();
        this.arrQualification = Qualifications;
        this.arrGender = new Array < string > ();
        this.arrGender = Genders;
        this.arrHobbies = new Array < string > ();
        this.arrHobbies = Hobbies;
        this.arrJobType = new Array < string > ();
        this.arrJobType = JobTypes;
        this.arrMaritalStatus = new Array < string > ();
        this.arrMaritalStatus = MaritalStatuses;
        this.arrResidentType = new Array < string > ();
        this.arrResidentType = ResidentTypes;
    }
//7d. Function used to read the person object
//and read all its properties and push them in
//the tableHeaders property. This will be used
//for generating table headers to show person
//information
    private createTableHeaders() {
        for (let p in this.person) {
            this
                .tableHeaders
                .push(p);
        }
    }
//7e. The loadData() function is used to make call to Angular service
//and receive response
    private loadData(){
        this
        .pServ
        .getAll()
        .subscribe((resp : Response) => {
            this.persons = resp.json();
        });
    }
//7f.The cleatInputs() function is used to reinitialize all properties
    clearInputs() {
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
    }
//7g. The ngOnInit() function is used to call to clearInputs, loadData and  createTableHeaders at init
    ngOnInit() {
        this.clearInputs();
        this.loadData();
        this.createTableHeaders();
    }
//7h. The add() function is used to redeclare the person object.
//This function sets the canChange flag to true
//so that the table showing Person information will 
//be hidden and the table contaiinng textboxes will be shown.    
    add() {
        this.person = new Person();
        this.canChange = true;
    }
//7i. The edit() function is used to mark the Person object
//as editable. The canEdit flag is set to true
//to make person object editable.    
    edit(p:Person) {
        this.person = p;
        this.canEdit = true;
        this.canChange = true;
    }
//7j: The save() function is used to add and edit Person object.
//If the canEdit flag is false then the new record will be
//created by calling post() function from service.
//If the canEdit flag is true then the selected person
//record will be updated by calling put() function
//from the Angular service. Once add/edit operation
//is over the canChange flag will be reseted to false.  
    save() {
        if (!this.canEdit) {
            this
                .pServ
                .post(this.person)
                .subscribe((resp : Response) => {
                    this
                        .persons
                        .push(resp.json());
                    this.canChange = false;
                });
        } else {
            this
            .pServ
            .put(this.person.id,this.person)
            .subscribe((resp : Response) => {
                this
                    .persons
                    .push(resp.json());
                this.canChange = false;
                this.canEdit = false;
            });

        }
    }
//7k. The delete() function is used to delete the selected person record.
//This access delete() function from the Angular service
    delete(p:Person){
        this.pServ.delete(p.id).subscribe((resp:Response)=>{
            this.loadData();
        });
    }
}