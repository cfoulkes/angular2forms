export class Address{

    public id: number;
    public addressLine1: string;
    public addressLine2: string;
    public addressLine3: string;
    public city: string;
    public province: string;
    public postalCode: string;
    public country: string

  constructor(
      id:number,
      addressLine1:string,
      city:string,
      province:string,
      postalCode:string
  ) { 
      this.id = id;
      this.addressLine1 = addressLine1;
      this.city = city;
      this.province = province;
      this.postalCode = postalCode;
  }

}