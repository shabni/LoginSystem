import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { LoginDataService } from '../login-data.service';
import { dataInterface } from '../models';


@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent
{
    @Input() dataReceived:any;
    theForm: FormGroup;

    data: dataInterface []

    constructor( private fb: FormBuilder,
        private dataserv :LoginDataService )
    { 
        this.theForm = new FormGroup({

            user_name: new FormControl(''),
            password: new FormControl(''),        
          });

          this.data = []

    }

    ngOnInit(): void {

        
    
     
      }

    validateCredentials(){

        console.log("Inside login validateCredentials on init")

        this.dataserv.getData().subscribe( dataVar=>  {this.data = dataVar
      
            console.log(this.data[0]["user_name"],"************************")

            if (this.data[0]["user_name"]==this.theForm.value["user_name"]){

                console.log("++++++++LogIn Succseeful+++++++++++++")
            }
            else {
                console.log("++++++++LogIn Failed+++++++++++++")
            }
          });

          

          

          

          this.getInfo()

    }

    ngOnChanges():void {
        this.theForm.patchValue(this.dataReceived)
    }

    getInfo(){
        console.log(this.theForm.value)
        return this.theForm.value
        

      }

}