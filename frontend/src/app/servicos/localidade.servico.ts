import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { localidade } from "../model/localidade.model";

@Injectable()
export class TarefaService {

    constructor(private http: HttpClient){}

    selectLocais(): Observable<localidade[]>{
        return this.http.get<localidade[]>("http://localhost:3000/localidade");
    }
}