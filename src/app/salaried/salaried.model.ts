export class Salaried {
  public id?: string ;
  public fullname?: string;
  public address?: string;
  public category?: string;
  public description?: string;
  constructor(
    id?: string,
    fullname?: string,
    address?: string ,
    category?: string ,
    description?: string) {
    this.id = id ? id : null;
    this.fullname = fullname ? fullname : null;
    this.address = address ? address : null;
    this.category = category ? category : null;
    this.description = description ? description : null;
  }
}
