import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl="http://ad440d513b04243b2a37dca1782f47e5-1062220601.ap-south-1.elb.amazonaws.com"

  constructor(private httpClient:HttpClient) { }

  createContact(contact:Contact):Observable<string>{
    return this.httpClient.post(`${this.baseUrl}/contact`, contact, { responseType:"text" } );
  }

  getContacts():Observable<Contact[]>{
    return this.httpClient.get<Contact[]>(`${this.baseUrl}/contacts`);
  }

  findContactById(id:number):Observable<Contact>{
    return this.httpClient.get<Contact>(`${this.baseUrl}/contact/${id}`);
  }

  deleteContactByid(id:number):Observable<string>{
    return this.httpClient.delete(`${this.baseUrl}/contact/${id}`, {responseType:"text"});
  }

}
