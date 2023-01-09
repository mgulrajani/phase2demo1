import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
   title='Student Form';
  studentForm:FormGroup;
   constructor(private formBuilder:FormBuilder) {
    //step 1 :you have to create form model
    this.studentForm=this.formBuilder.group({

         id:['1',[Validators.required,Validators.max(100)]],
         name:['Amit',[Validators.required,Validators.minLength(4)]],
         email:['amit@gmail.com',[Validators.required,Validators.email]],
         gender:['Male',[Validators.required]],
         address:this.formBuilder.group({

          city:['Mumbai',[Validators.required]],
          state:['',[Validators.required]],
          country:['',[Validators.required]]}),
          //adding programs as a  FormArray to add programs attended by student
          programs:this.formBuilder.array([])

    })
  }
  //a getter for getting programs , since its return value is FormArray and not an Array ,return type is given as FormArray
    programs():FormArray{
      return this.studentForm.get('programs') as FormArray;

    }
     //when new program is to be added , it is supposed to be a FormGroup of two formcontrols ie prg and duration

    newProgram():FormGroup{
     return this.formBuilder.group({

      prg:'',
      duration:''
     })

    }

    //when button is clicked to addProgram
    addProgram(){
      this.programs().push(this.newProgram());
    }

    //removing a Program
   removeProgram(programIndex:number){
    this.programs().removeAt(programIndex);
   }

    get id(){
      return this.studentForm.get("id");
    }

    get name(){
      return this.studentForm.get("name");
    }

    get email(){
      return this.studentForm.get("email");

    }

    get gender(){
      return this.studentForm.get("gender");
    }

    get city(){
      return this.studentForm.get("address")?.get("city");

    }

    get state(){
       return this.studentForm.get("address")?.get("state");
    }

    get country(){

     return this.studentForm.get("address")?.get("country");

    }

    /*this.studentForm=new FormGroup({

      id:new FormControl('',Validators.required),
      name:new FormControl('',[Validators.required,Validators.minLength(4)])


    })
*/


  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.studentForm.value);
  }
}
