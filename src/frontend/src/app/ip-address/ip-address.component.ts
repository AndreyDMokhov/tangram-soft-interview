import { Component, OnInit } from '@angular/core';
import {IpAddressService} from "./ip-address.service";

@Component({
  selector: 'app-ip-address',
  templateUrl: './ip-address.component.html',
  styleUrls: ['./ip-address.component.css']
})
export class IpAddressComponent implements OnInit {
  ipAddress: string;

  constructor(private ipAddressService: IpAddressService) { }

  ngOnInit(): void {
    this.getIP();
  }

  getIP() {
    this.ipAddressService.getIPAddress()
      .subscribe((res: any) => {
        this.ipAddress=res.ip;
      })
  }

}
