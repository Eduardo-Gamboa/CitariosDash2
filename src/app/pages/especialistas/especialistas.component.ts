import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-especialistas",
  templateUrl: "especialistas.component.html"
})
export class EspecialistasComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder:FormBuilder) {
    this.form = this.formBuilder.group({
      id: 0,
      nombre:['', [Validators.required]],
      apellidoPaterno:['', [Validators.required]],
      apellidoMaterno:['', [Validators.required]],
      numeroTelefono:['', [Validators.required, Validators.maxLength(10)]],
      correoEspecialista:['', [Validators.required, Validators.email]],
      fechaNacimiento:['', [Validators.required], []],
      idConsultorio:['', [Validators.required]],
      idTipoEspecialista:['', [Validators.required]]
    });
  }
  ngOnInit() {}

  guardarInfo(){
    console.log(this.form);
  }
}
