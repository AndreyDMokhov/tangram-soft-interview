import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class IpAddressService {

  constructor(private client: HttpClient) { }

  public getIPAddress()
  {
    return this.client.get("http://api.ipify.org/?format=json");
  }
}
