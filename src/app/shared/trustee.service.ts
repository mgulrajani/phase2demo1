import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Trustee } from 'src/app/trustees/trustee';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TrusteeService {

   private url!: '/api/trustees'
  constructor(private http: HttpClient) { }

  getTrustees() :Observable<Trustee[]>{
    return this.http.get<Trustee[]>(this.url);
  }

  getTrusteeById(id: number) {
    return this.http.get<Trustee>(this.url + '/' + id);
  }

  deleteTrustee(id: number) {
    return this.http.delete(this.url + '/' + id);
  }

  createTrustee(data: Trustee){
    return this.http.post<Trustee>(this.url, JSON.stringify(data), httpOptions);
  }

  updateTrustee(id: number, data: Trustee) {
    return this.http.put<Trustee>(this.url + '/' + id, JSON.stringify(data), httpOptions)
  }
}
