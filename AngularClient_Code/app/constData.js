System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Occupations, Qualifications, JobTypes, Genders, Hobbies, MaritalStatuses, ResidentTypes;
    return {
        setters: [],
        execute: function () {
            exports_1("Occupations", Occupations = [
                'Service',
                'Self-Employeed',
                'UnEmployeed'
            ]);
            exports_1("Qualifications", Qualifications = [
                'Bachlor-Science',
                'Bachlor-Arts',
                'Bachlor-Commerce',
                'Bachlor-Engineering',
                'Masters-Science',
                'Masters-Arts',
                'Masters-Commerce',
                'Masters-Engineering',
                'Doctor-MBBS',
                'Doctor-BHMS',
                'Doctor-BAMS',
                'Doctor-MBBS-MD',
                'Doctor-BHMS-MD',
                'Doctor-BAMS-MD',
                'Middle-School',
                'High-School',
                'No-Eduction'
            ]);
            exports_1("JobTypes", JobTypes = [
                'IT',
                'Manufactiring',
                'Driver',
                'Doctor',
                'Marketing',
                'Teacher',
                'Gardner',
                'Housekeeper',
                'Banker'
            ]);
            exports_1("Genders", Genders = [
                'Male', 'Female', 'Transsexual'
            ]);
            exports_1("Hobbies", Hobbies = [
                'Music', 'Movies', 'Theater', 'Travel', 'Painting', 'Photography'
            ]);
            exports_1("MaritalStatuses", MaritalStatuses = [
                'Married',
                'Single-Unmarried',
                'Single-Widower',
                'Single-Widow',
                'Single-Divorsed'
            ]);
            exports_1("ResidentTypes", ResidentTypes = [
                'Self-Owned',
                'Rental'
            ]);
        }
    };
});
