import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-zodiaco',
  templateUrl: './zodiaco.component.html',
  styleUrls: ['./zodiaco.component.css']
})
export class ZodiacoComponent {
  personalForm: FormGroup;
  age: number | null = null;
  zodiacSign: string | null = null;
  zodiacImage: string | null = null;

  private signosZodiacales: Record<number, { sign: string, image: string }> = {
    0: { sign: 'Rata', image: 'https://administrativo.pucp.edu.pe/wp-content/uploads/2020/01/rata.jpg' },
    1: { sign: 'Buey', image: 'https://www.informador.mx/__export/1613162353826/sites/elinformador/img/2021/02/12/axo_nuevo_chino_buey_x1x.jpg_1970638775.jpg' },
    2: { sign: 'Tigre', image: 'https://www.clarin.com/2022/10/28/gi2siHF3l_2000x1500__1.jpg' },
    3: { sign: 'Conejo', image: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Conejo.jpg' },
    4: { sign: 'Dragón', image: 'https://administrativo.pucp.edu.pe/wp-content/uploads/2020/01/dragon.jpg' },
    5: { sign: 'Serpiente', image: 'https://www.informador.mx/__export/1613162354631/sites/elinformador/img/2021/02/12/axo_nuevo_chino_serpiente.jpg_1970638775.jpg' },
    6: { sign: 'Caballo', image: 'https://administrativo.pucp.edu.pe/wp-content/uploads/2020/01/caballo.jpg' },
    7: { sign: 'Cabra', image: 'https://administrativo.pucp.edu.pe/wp-content/uploads/2020/01/cabra.jpg' },
    8: { sign: 'Mono', image: 'https://administrativo.pucp.edu.pe/wp-content/uploads/2020/01/mono.jpg' },
    9: { sign: 'Gallo', image: 'https://revistasocialmente.mx/wp-content/uploads/2017/02/gallo-fondo-blanco-1024x915.jpg' },
    10: { sign: 'Perro', image: 'https://administrativo.pucp.edu.pe/wp-content/uploads/2020/01/perro.jpg' },
    11: { sign: 'Cerdo', image: 'https://administrativo.pucp.edu.pe/wp-content/uploads/2020/01/cerdo.jpg' }
  };

  constructor(private fb: FormBuilder) {
    this.personalForm = this.fb.group({
      nombre: ['', Validators.required],
      apaterno: ['', Validators.required],
      amaterno: ['', Validators.required],
      dia: ['', [Validators.required, Validators.min(1), Validators.max(31)]],
      mes: ['', [Validators.required, Validators.min(1), Validators.max(12)]],
      año: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]],
      sexo: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const { año } = this.personalForm.value;
    const currentYear = new Date().getFullYear();
    this.age = currentYear - año;

    const zodiacIndex = (año - 4) % 12;
    const zodiac = this.signosZodiacales[zodiacIndex];
    
    if (zodiac) {
      this.zodiacSign = zodiac.sign;
      this.zodiacImage = zodiac.image;
    }
  }
}
