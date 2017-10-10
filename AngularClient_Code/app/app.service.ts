import { Injectable } from '@angular/core';
import { Http,Request,RequestOptions,Headers,Response } from "@angular/http";
import { Observable } from "rxjs";
import { Person } from './app.model';
@Injectable()
export class PersonalInfoService {
    servUrl:string;
    constructor(private http:Http) { 
        this.servUrl = "http://localhost:61758/api/PersonalInformationAPI";
    }
    getAll():Observable<Response>{
      var res = this.http.get(`${this.servUrl}/Person/All`);
      return res;
    }
    getSingle(id:string):Observable<Response>{
        var res = this.http.get(`${this.servUrl}/Person/${id}`);
        return res;
    }
    
    post(per:Person):Observable<Response>{
        var headers = new Headers({'Content-Type':'application/json'});
        var options = new RequestOptions();
        options.headers = headers;
        var res = this.http.post(`${this.servUrl}/Person/Create`,per,options);
        return res;
    }
    put(id:string,per:Person):Observable<Response>{
        var headers = new Headers({'Content-Type':'application/json'});
        var options = new RequestOptions();
        options.headers = headers;
        var res = this.http.put(`${this.servUrl}/Person/Update/${id}`,JSON.stringify(per),options);
        return res;
    }
    delete(id:string):Observable<Response>{
        var res = this.http.delete(`${this.servUrl}/Person/Delete/${id}`);
        return res;
    }
}
